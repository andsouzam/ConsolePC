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

#include "Updater.hpp"
#include "Configuration/Config.hpp"
#include "Logging/LogManager.hpp"
#include "Tools/Unicode.hpp"
#include "Tools/Process.hpp"
#include "Tools/Paths.hpp"
#include "Configuration/nlohmann/json.hpp"

#pragma comment(lib, "winhttp.lib")
#pragma comment(lib, "urlmon.lib")

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
        HINTERNET hSession = WinHttpOpen(L"ConsolePC-Updater/1.0", WINHTTP_ACCESS_TYPE_DEFAULT_PROXY, NULL, NULL, 0);
        if (!hSession) return "";
        HINTERNET hConnect = WinHttpConnect(hSession, host.c_str(), INTERNET_DEFAULT_HTTPS_PORT, 0);
        if (!hConnect) { WinHttpCloseHandle(hSession); return ""; }
        HINTERNET hRequest = WinHttpOpenRequest(hConnect, L"GET", path.c_str(), NULL, WINHTTP_NO_REFERER, WINHTTP_DEFAULT_ACCEPT_TYPES, WINHTTP_FLAG_SECURE);
        if (!hRequest) { WinHttpCloseHandle(hConnect); WinHttpCloseHandle(hSession); return ""; }
        std::wstring headers = L"User-Agent: ConsolePC-Updater\r\nAccept: application/vnd.github.v3+json\r\n";
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
                std::string resp = WinHttpGetFull(L"api.github.com", L"/repos/SteamDeckHomebrew/decky-loader/commits/main");
                if (!resp.empty()) {
                    auto j = json::parse(resp);
                    std::string sha = j.value("sha", "");
                    if (!sha.empty() && sha != Unicode::to_string(Config::DeckyLastSha)) {
                        std::wstring deckyPath = Config::GetDeckyPath();
                        std::wstring zipPath = Tools::Paths::GetTempPath() + L"\\decky.zip";
                        _wremove(zipPath.c_str());
                        if (SUCCEEDED(URLDownloadToFileW(NULL, L"https://nightly.link/SteamDeckHomebrew/decky-loader/workflows/build-win/main/PluginLoader%20Win.zip", zipPath.c_str(), 0, NULL))) {
                            DWORD pid = Process::FindFirstByName(L"PluginLoader_noconsole.exe");
                            if (pid) { HANDLE h = OpenProcess(PROCESS_TERMINATE, FALSE, pid); if (h) { TerminateProcess(h, 0); CloseHandle(h); Sleep(1000); } }
                            std::wstring destDir = std::filesystem::path(deckyPath).parent_path().wstring();
                            std::filesystem::create_directories(destDir);
                            std::wstring cmd = L"-NoProfile -Command \"Expand-Archive -Path '" + zipPath + L"' -DestinationPath '" + destDir + L"' -Force\"";
                            SHELLEXECUTEINFOW sei = { sizeof(sei) };
                            sei.fMask = SEE_MASK_NOCLOSEPROCESS; sei.lpFile = L"powershell.exe"; sei.lpParameters = cmd.c_str(); sei.nShow = SW_HIDE;
                            if (ShellExecuteExW(&sei)) {
                                WaitForSingleObject(sei.hProcess, 60000); CloseHandle(sei.hProcess);
                                Config::DeckyLastSha = Unicode::to_wstring(sha);
                                SYSTEMTIME st; GetLocalTime(&st); wchar_t buf[64]; swprintf_s(buf, L"%04d-%02d-%02dT%02d:%02d:%02d", st.wYear, st.wMonth, st.wDay, st.wHour, st.wMinute, st.wSecond);
                                Config::DeckyLastCheck = buf; Config::Save();
                                if (Config::DeckyUpdateEnabled) Process::StartProcess(deckyPath, L"");
                            }
                        }
                    }
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
        swscanf_s(lastCheck.c_str(), L"%04hd-%02hd-%02hdT%02hd:%02hd:%02hd", &st.wYear, &st.wMonth, &st.wDay, &st.wHour, &st.wMinute, &st.wSecond);
        FILETIME ft; SystemTimeToFileTime(&st, &ft);
        ULARGE_INTEGER uli; uli.LowPart = ft.dwLowDateTime; uli.HighPart = ft.dwHighDateTime;
        SYSTEMTIME nst; GetLocalTime(&nst);
        FILETIME nft; SystemTimeToFileTime(&nst, &nft);
        ULARGE_INTEGER nuli; nuli.LowPart = nft.dwLowDateTime; nuli.HighPart = nft.dwHighDateTime;
        return (int)((nuli.QuadPart - uli.QuadPart) / 10000000);
    }

    void CheckUpdateAsync(bool includePreRelease, HWND hWnd, UINT uMsg) {
        AddSubscribe(hWnd, uMsg);
    }

    int ScheduledCheckAsync(const std::wstring &lastCheck, int checkInterval, bool includePreRelease, HWND hWnd, UINT uMsg) {
        return -1;
    }

    int ScheduledDeckyCheckAsync(HWND hWnd, UINT uMsg)
    {
        if (!Config::DeckyUpdateEnabled) return 0;
        int since = GetSince(Config::DeckyLastCheck);
        if (since >= 86400) CheckDeckyUpdateAsync(hWnd, uMsg);
        return 86400;
    }

    bool UpdaterHandleCommand(HWND hWnd, WPARAM wParam, LPARAM lParam) { return false; }
    void NotifyConfigUpdated() {}
    Updater::UpdateInfo GetLastUpdateInfo() { return m_lastUpdateInfo; }
    void UpdateAsync(const std::wstring &tag, bool silent, HWND h, UINT m) {}
    void ShowVersion(const std::wstring &tag) {}
}
