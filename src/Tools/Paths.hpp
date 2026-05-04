#pragma once
#include <string>

namespace ConsolePC::Tools::Paths
{
    std::wstring GetConfigPath();
    std::wstring GetLogsPath();
    std::wstring GetTempPath();
    std::wstring GetDumpsPath();
    std::wstring GetSplashDefaultPath();
    std::wstring GetExeFileName();

    std::wstring GetAppPath();
    std::wstring GetDataPath();

    std::wstring GetAppLocalPath();
    std::wstring GetAppLocalCachePath();
    std::wstring GetAppTempPath();
}
