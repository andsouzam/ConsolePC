// Fix conflict between windows.h and nlohmann/json regarding 'byte'
#ifndef _HAS_STD_BYTE
#define _HAS_STD_BYTE 0
#endif

#include "Configuration/nlohmann/json.hpp"

#include <windows.h>
#include <winhttp.h>
#include <sstream>
#include <vector>
#include <stdexcept>
#include <algorithm>
#include <thread>
#include <mutex>
#include <string>
#include <filesystem>
#include <urlmon.h>
#include <list>
#include <fstream>

#include <winrt/base.h>
#include <winrt/Windows.Foundation.h>
#include <winrt/Windows.Storage.h>

#include "Updater.hpp"
#include "Configuration/Config.hpp"
#include "Logging/LogManager.hpp"
#include "Tools/Unicode.hpp"
#include "Tools/Process.hpp"
#include "Tools/Paths.hpp"

#pragma comment(lib, "winhttp.lib")
#pragma comment(lib, "urlmon.lib")
#pragma comment(lib, "windowsapp.lib")

using json = nlohmann::json;

namespace ConsolePC::Updater
{
    struct SubscribeInfo
    {
        HWND hWnd;
        UINT uMsg;
    };

    static const std::wstring GITHUB_HOST = L"api.github.com";
    static const std::wstring GITHUB_RELEASE_PAGE = L"https://github.com/andsouzam/ConsolePC/releases/tag/";

    static std::string WinHttpGetFull(const std::wstring& host, const std::wstring& path)
    {
        HINTERNET hSession = WinHttpOpen(L"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", WINHTTP_ACCESS_TYPE_DEFAULT_PROXY, NULL, NULL, 0);
        if (!hSession) return "";
        HINTERNET hConnect = WinHttpConnect(hSession, host.c_str(), INTERNET_DEFAULT_HTTPS_PORT, 0);
        if (!hConnect) { WinHttpCloseHandle(hSession); return ""; }
        HINTERNET hRequest = WinHttpOpenRequest(hConnect, L"GET", path.c_str(), NULL, WINHTTP_NO_REFERER, WINHTTP_DEFAULT_ACCEPT_TYPES, WINHTTP_FLAG_SECURE);
        if (!hRequest) { WinHttpCloseHandle(hConnect); WinHttpCloseHandle(hSession); return ""; }
        
        std::wstring headers = L"Accept: application/vnd.github.v3+json\r\n";
        WinHttpAddRequestHeaders(hRequest, headers.c_str(), (ULONG)-1L, WINHTTP_ADDREQ_FLAG_ADD);
        
        std::string response;
        if (WinHttpSendRequest(hRequest, WINHTTP_NO_ADDITIONAL_HEADERS, 0, WINHTTP_NO_REQUEST_DATA, 0, 0, 0) && WinHttpReceiveResponse(hRequest, NULL)) {
            DWORD dwSize = 0;
            while (WinHttpQueryDataAvailable(hRequest, &dwSize) && dwSize > 0) {
                std::vector<char> buffer(dwSize);
                DWORD dwDownloaded = 0;
                if (WinHttpReadData(hRequest, buffer.data(), dwSize, &dwDownloaded)) response.append(buffer.data(), dwDownloaded);
                else break;
            }
        }
        WinHttpCloseHandle(hRequest); WinHttpCloseHandle(hConnect); WinHttpCloseHandle(hSession);
        return response;
    }

    static std::string PSHttpGetReleases()
    {
        std::wstring baseDir = Tools::Paths::GetAppLocalPath();
        std::wstring tempFile = baseDir + L"\\releases.json";
        _wremove(tempFile.c_str());

        std::wstring psCmd = L"-NoProfile -ExecutionPolicy Bypass -Command \"& { "
            L"$ProgressPreference = 'SilentlyContinue'; "
            L"try { "
            L"  Invoke-WebRequest -Uri 'https://api.github.com/repos/andsouzam/ConsolePC/releases' -Headers @{'Accept'='application/vnd.github.v3+json'; 'User-Agent'='ConsolePC'} -OutFile '" + tempFile + L"'; "
            L"} catch { "
            L"  $_.Exception.Message | Out-File '" + baseDir + L"\\ps_net_error.txt'; "
            L"} "
            L"}\"";

        SHELLEXECUTEINFOW sei = { sizeof(sei) };
        sei.fMask = SEE_MASK_NOCLOSEPROCESS; sei.lpFile = L"powershell.exe"; sei.lpParameters = psCmd.c_str(); sei.nShow = SW_HIDE;

        if (ShellExecuteExW(&sei)) {
            WaitForSingleObject(sei.hProcess, 30000);
            CloseHandle(sei.hProcess);
            
            if (std::filesystem::exists(tempFile)) {
                std::ifstream f(tempFile);
                std::stringstream buffer;
                buffer << f.rdbuf();
                f.close();
                _wremove(tempFile.c_str());
                return buffer.str();
            }
        }
        return "";
    }

    static bool m_bThreadExecuted = false;
    static std::mutex m_readMutex;
    static std::thread m_thread;
    static std::list<SubscribeInfo> m_subscribes;
    static UpdateInfo m_lastUpdateInfo;
    static Logger log = LogManager::GetLogger("Updater");

    void AddSubscribe(HWND hWnd, UINT uMsg) {
        if (!hWnd) return;
        std::lock_guard<std::mutex> lock(m_readMutex);
        m_subscribes.push_back({hWnd, uMsg});
    }

    void Subscribe(HWND hWnd, UINT uMsg) {
        AddSubscribe(hWnd, uMsg);
    }

    void NotifySubscribers() {
        std::lock_guard<std::mutex> lock(m_readMutex);
        for (auto const& s : m_subscribes) {
            ::PostMessageW(s.hWnd, s.uMsg, 0, 0);
        }
        m_subscribes.clear();
    }

    void CheckDeckyUpdateAsync(HWND hWnd, UINT uMsg)
    {
        AddSubscribe(hWnd, uMsg);
        {
            std::lock_guard<std::mutex> lock(m_readMutex);
            if (m_bThreadExecuted) return;
            m_bThreadExecuted = true;
        }

        m_lastUpdateInfo.uiState = UpdaterState::CheckingUpdate;

        m_thread = std::thread([]()
        {
            try {
                winrt::init_apartment();
                
                std::wstring baseDir = Tools::Paths::GetAppLocalPath();
                _wremove((baseDir + L"\\ps_error.txt").c_str());

                std::wstring shaTemp = baseDir + L"\\decky_sha.json";
                std::wstring psShaCmd = L"-NoProfile -ExecutionPolicy Bypass -Command \"& { "
                    L"Invoke-WebRequest -Uri 'https://api.github.com/repos/SteamDeckHomebrew/decky-loader/commits/main' -Headers @{'User-Agent'='ConsolePC'} -OutFile '" + shaTemp + L"'; "
                    L"}\"";
                
                std::string sha = "";
                SHELLEXECUTEINFOW seiSha = { sizeof(seiSha) };
                seiSha.fMask = SEE_MASK_NOCLOSEPROCESS; seiSha.lpFile = L"powershell.exe"; seiSha.lpParameters = psShaCmd.c_str(); seiSha.nShow = SW_HIDE;
                if (ShellExecuteExW(&seiSha)) {
                    WaitForSingleObject(seiSha.hProcess, 20000);
                    CloseHandle(seiSha.hProcess);
                    if (std::filesystem::exists(shaTemp)) {
                        std::ifstream f(shaTemp);
                        json j = json::parse(f);
                        sha = j.value("sha", "");
                        f.close();
                        _wremove(shaTemp.c_str());
                    }
                }

                std::wstring deckyPath = Config::GetDeckyPath();
                std::wstring deckyDir = std::filesystem::path(deckyPath).parent_path().wstring();
                bool fileExists = std::filesystem::exists(deckyPath);

                if (!fileExists || (!sha.empty() && sha != Unicode::to_string(Config::DeckyLastSha))) {
                    std::wstring zipPath = Tools::Paths::GetTempPath() + L"\\decky.zip";
                    std::wstring psCmd = L"-NoProfile -ExecutionPolicy Bypass -Command \"& { "
                        L"try { "
                        L"  $ProgressPreference = 'SilentlyContinue'; "
                        L"  if (Test-Path '" + zipPath + L"') { Remove-Item '" + zipPath + L"' -Force }; "
                        L"  Invoke-WebRequest -Uri 'https://nightly.link/SteamDeckHomebrew/decky-loader/workflows/build-win/main/PluginLoader%20Win.zip' -OutFile '" + zipPath + L"'; "
                        L"  if (Test-Path '" + zipPath + L"') { "
                        L"    Expand-Archive -Path '" + zipPath + L"' -DestinationPath '" + deckyDir + L"' -Force; "
                        L"    Remove-Item '" + zipPath + L"' -Force; "
                        L"  } "
                        L"} catch { "
                        L"  $_.Exception.Message | Out-File '" + baseDir + L"\\ps_error.txt'; "
                        L"} "
                        L"}\"";

                    SHELLEXECUTEINFOW sei = { sizeof(sei) };
                    sei.fMask = SEE_MASK_NOCLOSEPROCESS; sei.lpFile = L"powershell.exe"; sei.lpParameters = psCmd.c_str(); sei.nShow = SW_HIDE;

                    if (ShellExecuteExW(&sei)) {
                        WaitForSingleObject(sei.hProcess, 120000);
                        CloseHandle(sei.hProcess);

                        if (std::filesystem::exists(deckyPath)) {
                            if (!sha.empty()) Config::DeckyLastSha = Unicode::to_wstring(sha);
                            SYSTEMTIME st; GetLocalTime(&st);
                            wchar_t buf[64];
                            swprintf_s(buf, L"%04d-%02d-%02dT%02d:%02d:%02d", st.wYear, st.wMonth, st.wDay, st.wHour, st.wMinute, st.wSecond);
                            Config::DeckyLastCheck = buf;
                            Config::Save();
                            if (Config::DeckyUpdateEnabled) Process::StartProcess(deckyPath, L"");
                        }
                    }
                } else if (Config::DeckyUpdateEnabled && !Process::FindFirstByName(L"PluginLoader_noconsole.exe")) {
                    Process::StartProcess(deckyPath, L"");
                }
            } catch (...) {}
            {
                std::lock_guard<std::mutex> lock(m_readMutex);
                m_bThreadExecuted = false;
                m_lastUpdateInfo.uiState = UpdaterState::Idle;
            }
            NotifySubscribers();
        });
        m_thread.detach();
    }

    int GetSince(const std::wstring& lastCheck)
    {
        if (lastCheck.empty()) return 86400 * 365;
        SYSTEMTIME st = {0};
        if (swscanf_s(lastCheck.c_str(), L"%04hd-%02hd-%02hdT%02hd:%02hd:%02hd", &st.wYear, &st.wMonth, &st.wDay, &st.wHour, &st.wMinute, &st.wSecond) != 6)
            return 86400 * 365;
        FILETIME ft; SystemTimeToFileTime(&st, &ft);
        ULARGE_INTEGER uli; uli.LowPart = ft.dwLowDateTime; uli.HighPart = ft.dwHighDateTime;
        SYSTEMTIME nst; GetLocalTime(&nst);
        FILETIME nft; SystemTimeToFileTime(&nst, &nft);
        ULARGE_INTEGER nuli; nuli.LowPart = nft.dwLowDateTime; nuli.HighPart = nft.dwHighDateTime;
        if (nuli.QuadPart < uli.QuadPart) return 0;
        return (int)((nuli.QuadPart - uli.QuadPart) / 10000000);
    }

    void CheckUpdateAsync(bool includePreRelease, HWND hWnd, UINT uMsg) {
        AddSubscribe(hWnd, uMsg);
        {
            std::lock_guard<std::mutex> lock(m_readMutex);
            if (m_bThreadExecuted) return;
            m_bThreadExecuted = true;
        }

        m_lastUpdateInfo.uiState = UpdaterState::CheckingUpdate;

        m_thread = std::thread([includePreRelease]() {
            try {
                winrt::init_apartment();
                std::string resp = PSHttpGetReleases();
                if (!resp.empty()) {
                    auto releases = json::parse(resp);
                    for (auto& release : releases) {
                        if (release.value("prerelease", false) && !includePreRelease) continue;
                        std::string tag = release.value("tag_name", "");
                        if (tag.empty()) continue;
                        
                        // Keep full tag for update process
                        m_lastUpdateInfo.newVersion = Unicode::to_wstring(tag);
                        
                        std::string cleanTag = tag;
                        if (cleanTag[0] == 'v') cleanTag = cleanTag.substr(1);

                        if (cleanTag != VER_VERSION_STR) {
                            m_lastUpdateInfo.uiState = UpdaterState::Done;
                            goto end;
                        }
                        break;
                    }
                    m_lastUpdateInfo.uiState = UpdaterState::Idle;
                } else {
                    m_lastUpdateInfo.uiState = UpdaterState::NetworkFailed;
                }
            } catch (...) {
                m_lastUpdateInfo.uiState = UpdaterState::NetworkFailed;
            }
    end:
            {
                std::lock_guard<std::mutex> lock(m_readMutex);
                m_bThreadExecuted = false;
            }
            NotifySubscribers();
        });
        m_thread.detach();
    }

    int ScheduledCheckAsync(const std::wstring &lastCheck, int checkInterval, bool includePreRelease, HWND hWnd, UINT uMsg) {
        if (checkInterval == -2) return 0;
        int since = GetSince(lastCheck);
        if (checkInterval == -1 || since >= checkInterval * 3600 || since >= 86400) {
            CheckUpdateAsync(includePreRelease, hWnd, uMsg);
        }
        return 86400;
    }

    void UpdateAsync(const std::wstring &tag, bool silent, HWND h, UINT m) {
        AddSubscribe(h, m);
        {
            std::lock_guard<std::mutex> lock(m_readMutex);
            if (m_bThreadExecuted) return;
            m_bThreadExecuted = true;
        }

        m_lastUpdateInfo.uiState = UpdaterState::Downloading;
        std::wstring versionTag = tag;

        m_thread = std::thread([versionTag]() {
            try {
                winrt::init_apartment();
                std::wstring baseDir = Tools::Paths::GetAppLocalPath();
                _wremove((baseDir + L"\\ps_update_error.txt").c_str());

                // PowerShell logic:
                // 1. Try to find the tag as-is. 
                // 2. If it fails, try adding 'v' prefix.
                // 3. Download to Downloads and start.
                std::wstring psUpdate = L"-NoProfile -ExecutionPolicy Bypass -Command \"& { "
                    L"try { "
                    L"  $ProgressPreference = 'SilentlyContinue'; "
                    L"  $headers = @{'Accept'='application/vnd.github.v3+json'; 'User-Agent'='ConsolePC'}; "
                    L"  $tag = '" + versionTag + L"'; "
                    L"  $url = 'https://api.github.com/repos/andsouzam/ConsolePC/releases/tags/' + $tag; "
                    L"  $r = try { Invoke-RestMethod -Uri $url -Headers $headers } catch { "
                    L"     $vtag = 'v' + $tag; "
                    L"     $vurl = 'https://api.github.com/repos/andsouzam/ConsolePC/releases/tags/' + $vtag; "
                    L"     Invoke-RestMethod -Uri $vurl -Headers $headers "
                    L"  }; "
                    L"  $a = $r.assets | Where-Object { $_.name -like '*.appx' } | Select-Object -First 1; "
                    L"  if ($a) { "
                    L"    $dl = $a.browser_download_url; "
                    L"    $out = Join-Path ([Environment]::GetFolderPath('UserProfile')) 'Downloads\\ConsolePC-Update.appx'; "
                    L"    Invoke-WebRequest -Uri $dl -Headers $headers -OutFile $out; "
                    L"    Start-Process $out; "
                    L"  } else { throw 'APPX asset not found in release' } "
                    L"} catch { "
                    L"  $_.Exception.Message | Out-File '" + baseDir + L"\\ps_update_error.txt'; "
                    L"} "
                    L"}\"";

                SHELLEXECUTEINFOW sei = { sizeof(sei) };
                sei.fMask = SEE_MASK_NOCLOSEPROCESS; sei.lpFile = L"powershell.exe"; sei.lpParameters = psUpdate.c_str(); sei.nShow = SW_HIDE;

                if (ShellExecuteExW(&sei)) {
                    WaitForSingleObject(sei.hProcess, 300000);
                    CloseHandle(sei.hProcess);
                }
            } catch (...) {}
            {
                std::lock_guard<std::mutex> lock(m_readMutex);
                m_bThreadExecuted = false;
                m_lastUpdateInfo.uiState = UpdaterState::Idle;
            }
            NotifySubscribers();
        });
        m_thread.detach();
    }

    void ShowVersion(const std::wstring &tag) {
        std::wstring url = L"https://github.com/andsouzam/ConsolePC/releases/tag/";
        url += tag;
        ShellExecuteW(NULL, L"open", url.c_str(), NULL, NULL, SW_SHOWNORMAL);
    }

    int ScheduledDeckyCheckAsync(HWND hWnd, UINT uMsg)
    {
        if (!Config::DeckyUpdateEnabled) return 0;
        std::wstring deckyPath = Config::GetDeckyPath();
        bool fileExists = std::filesystem::exists(deckyPath);
        int since = GetSince(Config::DeckyLastCheck);
        if (since >= 86400 || !fileExists) CheckDeckyUpdateAsync(hWnd, uMsg);
        return 86400;
    }

    bool UpdaterHandleCommand(HWND hWnd, WPARAM wParam, LPARAM lParam) { return false; }
    void NotifyConfigUpdated() {}
    Updater::UpdateInfo GetLastUpdateInfo() { return m_lastUpdateInfo; }
}
