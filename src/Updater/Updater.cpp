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

    static const std::wstring GetRelease(const std::wstring &tag)
    {
        return L"/repos/andsouzam/ConsolePC/releases/tags/" + tag;
    }

    static std::string WinHttpGetFull(const std::wstring& host, const std::wstring& path)
    {
        HINTERNET hSession = WinHttpOpen(L"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", WINHTTP_ACCESS_TYPE_DEFAULT_PROXY, NULL, NULL, 0);
        if (!hSession) return "";
        HINTERNET hConnect = WinHttpConnect(hSession, host.c_str(), INTERNET_DEFAULT_HTTPS_PORT, 0);
        if (!hConnect) { WinHttpCloseHandle(hSession); return ""; }
        HINTERNET hRequest = WinHttpOpenRequest(hConnect, L"GET", path.c_str(), NULL, WINHTTP_NO_REFERER, WINHTTP_DEFAULT_ACCEPT_TYPES, WINHTTP_FLAG_SECURE);
        if (!hRequest) { WinHttpCloseHandle(hConnect); WinHttpCloseHandle(hSession); return ""; }
        
        // Add headers
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
                winrt::init_apartment(); // CRITICAL for MSIX worker threads
                
                log.Debug("Checking for Decky Loader updates...");
                
                std::wstring baseDir = Tools::Paths::GetAppLocalPath();
                std::wstring errorFile = baseDir + L"\\ps_error.txt";
                _wremove(errorFile.c_str()); // Clear previous errors

                std::wstring markerPath = baseDir + L"\\decky_check_start.marker";
                CreateFile(markerPath.c_str(), GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);

                std::string resp = WinHttpGetFull(L"api.github.com", L"/repos/SteamDeckHomebrew/decky-loader/commits/main");

                std::string sha = "";
                if (!resp.empty()) {
                    auto j = json::parse(resp);
                    sha = j.value("sha", "");
                } else {
                    log.Warn("Failed to get latest Decky SHA from GitHub API (Response empty)");
                    std::wstring failMarker = baseDir + L"\\decky_sha_failed.marker";
                    CreateFile(failMarker.c_str(), GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);
                }

                std::wstring deckyPath = Config::GetDeckyPath();
                std::wstring deckyDir = std::filesystem::path(deckyPath).parent_path().wstring();
                
                bool fileExists = std::filesystem::exists(deckyPath);

                // Download if file is missing OR sha is different
                if (!fileExists || (!sha.empty() && sha != Unicode::to_string(Config::DeckyLastSha))) {
                    log.Info("Downloading Decky Loader (Missing: %d, New SHA: %s)", !fileExists, sha.c_str());

                    std::wstring zipPath = Tools::Paths::GetTempPath() + L"\\decky.zip";
                    std::wstring dlMarker = baseDir + L"\\decky_download_start.marker";
                    CreateFile(dlMarker.c_str(), GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);

                    // Kill existing process first
                    DWORD pid = Process::FindFirstByName(L"PluginLoader_noconsole.exe");
                    if (pid) {
                        log.Debug("Terminating existing Decky process (PID: %d)", pid);
                        HANDLE h = OpenProcess(PROCESS_TERMINATE, FALSE, pid);
                        if (h) { TerminateProcess(h, 0); CloseHandle(h); Sleep(1000); }
                    }

                    std::filesystem::create_directories(deckyDir);

                    // PowerShell command: use Expand-Archive for better compatibility with PS 5.1
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
                        L"  $_.Exception.Message | Out-File '" + errorFile + L"'; "
                        L"} "
                        L"}\"";

                    SHELLEXECUTEINFOW sei = { sizeof(sei) };
                    sei.fMask = SEE_MASK_NOCLOSEPROCESS; sei.lpFile = L"powershell.exe"; sei.lpParameters = psCmd.c_str(); sei.nShow = SW_HIDE;

                    if (ShellExecuteExW(&sei)) {
                        log.Debug("Waiting for PowerShell to finish...");
                        WaitForSingleObject(sei.hProcess, 120000); // 2 minutes
                        CloseHandle(sei.hProcess);

                        if (std::filesystem::exists(deckyPath)) {
                            log.Info("Decky Loader updated and extracted successfully.");
                            if (!sha.empty()) Config::DeckyLastSha = Unicode::to_wstring(sha);

                            SYSTEMTIME st; GetLocalTime(&st);
                            wchar_t buf[64];
                            swprintf_s(buf, L"%04d-%02d-%02dT%02d:%02d:%02d", st.wYear, st.wMonth, st.wDay, st.wHour, st.wMinute, st.wSecond);
                            Config::DeckyLastCheck = buf;
                            Config::Save();

                            if (Config::DeckyUpdateEnabled) {
                                log.Debug("Starting Decky Loader: %s", Unicode::to_string(deckyPath).c_str());
                                DWORD deckyPid = Process::StartProcess(deckyPath, L"");
                                if (deckyPid) {
                                    log.Info("Decky Loader started with PID: %d", deckyPid);
                                } else {
                                    log.Error("Failed to start Decky Loader process.");
                                }
                            }
                        } else {
                            log.Error("PowerShell finished but PluginLoader_noconsole.exe still missing at %s", Unicode::to_string(deckyPath).c_str());
                        }
                    } else {
                        log.Error("Failed to launch PowerShell (Error: %d)", GetLastError());
                    }
                } else {
                    log.Debug("Decky Loader is up to date (SHA: %s)", sha.c_str());
                    // Start it anyway if it's there but not running
                    if (Config::DeckyUpdateEnabled && !Process::FindFirstByName(L"PluginLoader_noconsole.exe")) {
                        log.Debug("Starting Decky Loader (Already present): %s", Unicode::to_string(deckyPath).c_str());
                        Process::StartProcess(deckyPath, L"");
                    }
                }
            } catch (const std::exception& e) {
                log.Error("Exception in Decky update thread: %s", e.what());
            } catch (...) {
                log.Error("Unknown exception in Decky update thread");
            }
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
        log.Debug("Checking for main app updates...");

        m_thread = std::thread([includePreRelease]() {
            try {
                winrt::init_apartment(); // CRITICAL for MSIX worker threads
                
                std::string resp = WinHttpGetFull(L"api.github.com", L"/repos/andsouzam/ConsolePC/releases");
                if (!resp.empty()) {
                    auto releases = json::parse(resp);
                    for (auto& release : releases) {
                        bool isPreRelease = release.value("prerelease", false);
                        if (isPreRelease && !includePreRelease) continue;

                        std::string tag = release.value("tag_name", "");
                        if (tag.empty()) continue;

                        // Simple version comparison: if tag starts with 'v', remove it
                        std::string cleanTag = tag;
                        if (cleanTag[0] == 'v') cleanTag = cleanTag.substr(1);

                        if (cleanTag != VER_VERSION_STR) {
                            m_lastUpdateInfo.newVersion = Unicode::to_wstring(cleanTag);
                            m_lastUpdateInfo.uiState = UpdaterState::Done;
                            log.Info("New version found: %s", cleanTag.c_str());
                            goto end;
                        }
                        break; // Latest stable version matches current
                    }
                    m_lastUpdateInfo.uiState = UpdaterState::Idle;
                    log.Debug("No new version found.");
                } else {
                    log.Error("Failed to fetch releases from GitHub");
                    m_lastUpdateInfo.uiState = UpdaterState::NetworkFailed;
                }
            } catch (const std::exception& e) {
                log.Error("Update check exception: %s", e.what());
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
        if (checkInterval == -2) return 0; // Manual only

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
        if (versionTag[0] != L'v') versionTag = L"v" + versionTag;

        m_thread = std::thread([versionTag, h, m]() {
            try {
                winrt::init_apartment(); // CRITICAL for MSIX worker threads
                
                std::string path = "/repos/andsouzam/ConsolePC/releases/tags/" + Unicode::to_string(versionTag);
                std::string resp = WinHttpGetFull(L"api.github.com", Unicode::to_wstring(path));

                if (!resp.empty()) {
                    auto release = json::parse(resp);
                    std::string downloadUrl = "";
                    for (auto& asset : release["assets"]) {
                        std::string name = asset.value("name", "");
                        if (name.find(".appx") != std::string::npos) {
                            downloadUrl = asset.value("browser_download_url", "");
                            break;
                        }
                    }

                    if (!downloadUrl.empty()) {
                        std::wstring localPath = Tools::Paths::GetTempPath() + L"\\ConsolePC-Update.appx";
                        _wremove(localPath.c_str());

                        log.Info("Downloading update from: %s", downloadUrl.c_str());
                        
                        // Use PowerShell for download to be more robust
                        std::wstring psDownload = L"-NoProfile -ExecutionPolicy Bypass -Command \"& { "
                            L"try { "
                            L"  $ProgressPreference = 'SilentlyContinue'; "
                            L"  Invoke-WebRequest -Uri '" + Unicode::to_wstring(downloadUrl) + L"' -OutFile '" + localPath + L"'; "
                            L"} catch { "
                            L"  $_.Exception.Message | Out-File '" + Tools::Paths::GetAppLocalPath() + L"\\ps_update_error.txt'; "
                            L"} "
                            L"}\"";
                        
                        SHELLEXECUTEINFOW sei = { sizeof(sei) };
                        sei.fMask = SEE_MASK_NOCLOSEPROCESS; sei.lpFile = L"powershell.exe"; sei.lpParameters = psDownload.c_str(); sei.nShow = SW_HIDE;

                        if (ShellExecuteExW(&sei)) {
                            WaitForSingleObject(sei.hProcess, 300000); // 5 minutes for app update
                            CloseHandle(sei.hProcess);

                            if (std::filesystem::exists(localPath)) {
                                log.Info("Update downloaded, starting AppInstaller...");
                                m_lastUpdateInfo.uiState = UpdaterState::ReadyForUpdate;
                                ShellExecuteW(NULL, L"open", localPath.c_str(), NULL, NULL, SW_SHOWNORMAL);
                            } else {
                                log.Error("PowerShell failed to download the update package.");
                                m_lastUpdateInfo.uiState = UpdaterState::NetworkFailed;
                            }
                        }
                    }
                }
            } catch (...) {
                m_lastUpdateInfo.uiState = UpdaterState::NetworkFailed;
            }
            {
                std::lock_guard<std::mutex> lock(m_readMutex);
                m_bThreadExecuted = false;
            }
            NotifySubscribers();
        });
        m_thread.detach();
    }

    void ShowVersion(const std::wstring &tag) {
        std::wstring url = L"https://github.com/andsouzam/ConsolePC/releases/tag/";
        if (tag[0] == L'v') url += tag;
        else url += L"v" + tag;
        ShellExecuteW(NULL, L"open", url.c_str(), NULL, NULL, SW_SHOWNORMAL);
    }

    int ScheduledDeckyCheckAsync(HWND hWnd, UINT uMsg)
    {
        if (!Config::DeckyUpdateEnabled) return 0;

        std::wstring deckyPath = Config::GetDeckyPath();
        bool fileExists = std::filesystem::exists(deckyPath);
        int since = GetSince(Config::DeckyLastCheck);

        if (since >= 86400 || !fileExists) {
            CheckDeckyUpdateAsync(hWnd, uMsg);
        }
        return 86400;
    }

    bool UpdaterHandleCommand(HWND hWnd, WPARAM wParam, LPARAM lParam) { return false; }
    void NotifyConfigUpdated() {}
    Updater::UpdateInfo GetLastUpdateInfo() { return m_lastUpdateInfo; }
}
