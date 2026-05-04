// MIT License
//
// Copyright (c) 2025 Artem Shpynov
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//


#include <windows.h>
#include <iostream>
#include "resource.h"
#include <tchar.h>
#include <commctrl.h>
#include <strsafe.h>
#include <filesystem>

#include "Logging/LogManager.hpp"
#include "Configuration/Config.hpp"
#include "Tools/Process.hpp"
#include "Tools/Notification.hpp"
#include "Tools/Registry.hpp"
#include "Tools/Unicode.hpp"
#include "Tools/Paths.hpp"

#include "App/App.hpp"
#include "App/GamingExperience.hpp"
#include "App/MainWindow.hpp"
#include "App/Launchers.hpp"
#include "App/JumpList.hpp"
#include "Ally/Ally.hpp"
#include "Updater/Updater.hpp"

#pragma comment(lib, "comctl32.lib")
#pragma comment(linker, "\"/manifestdependency:type='win32' name='Microsoft.Windows.Common-Controls' version='6.0.0.0' processorArchitecture='*' publicKeyToken='6595b64144ccf1df' language='*'\"")
#include "Tools/Minidump.hpp"
#include "App.hpp"

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow)
{
    ConsolePC::Tools::InstallUnhandledExceptionHandler();
    return ConsolePC::App::App::WinMain(hInstance, hPrevInstance, lpCmdLine, nCmdShow);
}

namespace ConsolePC::App
{
    static Logger log = LogManager::GetLogger("Application");

    int App::CallLibrary(const WCHAR * library, HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow)
    {
        HMODULE hModuleDll = NULL;
        static MainFunc *Main = nullptr;

        int result = INT_MIN;
        do
        {
            hModuleDll = LoadLibrary(library);
            if (!hModuleDll)
            {
                break;
            }

            MainFunc Main = (MainFunc)GetProcAddress(hModuleDll, "Main");
            if( !Main )
            {
                break;
            }
            result = (int)Main(hInstance, hPrevInstance, lpCmdLine, nCmdShow);

        } while (false);

        if (result == INT_MIN)
        {
            LPSTR messageBuffer = nullptr;
            DWORD size = FormatMessageA(
                FORMAT_MESSAGE_ALLOCATE_BUFFER |
                    FORMAT_MESSAGE_FROM_SYSTEM |
                    FORMAT_MESSAGE_IGNORE_INSERTS,
                NULL,
                GetLastError(),
                MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT),
                (LPSTR)&messageBuffer,
                0,
                NULL);
            MessageBoxA(NULL, messageBuffer, "Call module error", MB_OK | MB_ICONERROR);
            LocalFree(messageBuffer);
        }

        if (hModuleDll)
            FreeLibrary(hModuleDll);

        return result;
    }

    int App::ShowSettings()
    {
        return CallLibrary(L"ConsolePC.Settings.dll", GetModuleHandle(NULL), NULL, NULL, 0);;
    }

    void App::InitCustomControls()
    {
        INITCOMMONCONTROLSEX icex;
        icex.dwSize = sizeof(INITCOMMONCONTROLSEX);
        icex.dwICC = ICC_STANDARD_CLASSES;
        ::InitCommonControlsEx(&icex);
    }

    bool App::AsAllyHid(LPSTR lpCmdLine)
    {
        for (char *a = lpCmdLine; *a; a++)
        {
            if (_strnicmp(a, "/AllyHid", 8) == 0)
            {
                return true;
            }
        }
        return false;
    }


    bool App::AsFSE(LPSTR lpCmdLine)
    {
        for (char *a = lpCmdLine; *a; a++)
        {
            if (_strnicmp(a, "/FSE", 4) == 0)
            {
                return true;
            }
        }
        return false;
    }

    bool App::AsSettings(LPSTR lpCmdLine)
    {
        // no gamingapp:/// protocol specified
        if (strlen(lpCmdLine) == 0)
        {
            return true;
        }
        // Settings or Config is not exists
        //
        if (!Config::IsConfigured())
        {
            return true;
        }

        for (char *a = lpCmdLine; *a; a++)
        {
            if (_strnicmp(a, "/Settings", 9) == 0)
            {
                return true;
            }
        }

        // or Launcher == None or Launcher == Xbox
        if (Config::Launcher.Type == LauncherType::None
         || Config::Launcher.Type == LauncherType::Native)
        {
            return true;
        }

        // Registry != ConsolePC
        const std::wstring ConsolePCApp = L"ConsolePC_fwdx51s6az6d4!App";
        const std::wstring selectedApp = Registry::ReadString(
            L"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\GamingConfiguration",
            L"GamingHomeApp");

        if (_wcsicmp(selectedApp.c_str(), ConsolePCApp.c_str() ) != 0)
        {
            return true;
        }

        // TODO check launcher is available

        return false;
    }

    int WINAPI App::WinMain(HINSTANCE hInstance,
                    HINSTANCE hPrevInstance,
                    LPSTR lpCmdLine,
                    int nCmdShow)
    {
        std::wstring baseDir = Tools::Paths::GetAppLocalPath();
        
        // Clear old markers
        _wremove((baseDir + L"\\winmain.marker").c_str());
        _wremove((baseDir + L"\\config_loaded.marker").c_str());
        _wremove((baseDir + L"\\pre_findwindow.marker").c_str());
        _wremove((baseDir + L"\\post_findwindow.marker").c_str());
        _wremove((baseDir + L"\\decky_check_start.marker").c_str());
        _wremove((baseDir + L"\\decky_download_start.marker").c_str());
        _wremove((baseDir + L"\\ps_error.txt").c_str());

        // New markers in LocalState
        CreateFile((baseDir + L"\\winmain.marker").c_str(), GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);

        Config::Load();
        CreateFile((baseDir + L"\\config_loaded.marker").c_str(), GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);

        ConsolePC::Logging::LogManager::Initialize("ConsolePC", Config::LogLevel, Config::LogPath);
        log.Debug("\nApplication is started (hInstance=%08x) args: [%s]", hInstance, lpCmdLine);

        if (Ally::IsSupported() && Config::AllyHidEnable)
        {
            log.Debug("Ally::IsSupported and enabled\n");
            if (AsAllyHid(lpCmdLine))
            {
                log.Debug("Ally start as HIDListener\n");
                ConsolePC::Logging::LogManager::Initialize("ConsolePC/AllyHID", Config::LogLevel, Config::LogPath);
                return Ally::HIDListener(NULL);
            }

            if (Ally::CheckListener())
            {
                log.Debug("Ally not started and enabled\n");
                Process::StartProtocol(L"consolepc://AllyHid");
            }
        }
        else if (AsAllyHid(lpCmdLine))
        {
            return 0;
        }

        ConsolePC::Logging::LogManager::Initialize("ConsolePC", Config::LogLevel, Config::LogPath);

        CreateFile((baseDir + L"\\pre_findwindow.marker").c_str(), GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);
        if (FindWindow(L"ConsolePC", NULL))
        {
            log.Debug("Application control is executed already, exiting\n");
            return 0;
        }
        CreateFile((baseDir + L"\\post_findwindow.marker").c_str(), GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);

        ConsolePC::App::JumpList::RegisterJumpList();

        int exitCode = -1;
        SetProcessDpiAwarenessContext(DPI_AWARENESS_CONTEXT_PER_MONITOR_AWARE_V2);


        if (!GamingExperience::ApiIsAvailable)
        {
            log.Warn("Fullscreen Gaming API is not detected, continuing anyway for testing\n");
        }

        log.Debug("\n\nApplication control is started (hInstance=%08x) args: [%s]", hInstance, lpCmdLine);

        bool bFirstLaunch = false;

        if (!GlobalFindAtom(L"ConsolePC"))
        {
            GlobalAddAtom(L"ConsolePC");
            log.Debug("First launch at fullscreen experience mode");
            bFirstLaunch = true;
        }
        else
        {
            log.Debug("Subsequence launch at fullscreen experience mode");
        }

        if (AsFSE(lpCmdLine))
        {
            return GamingExperience::EnterFSEMode();
        }

        if (AsSettings(lpCmdLine))
        {
            return ShowSettings();
        }

        // Run Decky Loader logic before checking if launcher is active
        if (Config::DeckyUpdateEnabled)
        {
            std::wstring deckyPath = Config::GetDeckyPath();
            if (std::filesystem::exists(deckyPath))
            {
                log.Debug("Starting built-in Decky Loader");
                Process::StartProcess(deckyPath, L"");
            }
            // Trigger check even if Steam is running
            Updater::ScheduledDeckyCheckAsync(NULL, 0);
        }

        if (Launchers::IsLauncherActive())
        {
            Launchers::FocusLauncher();
            return 0;
        }

        bool restartDetected = false;

        if ((Config::Launcher.Type == LauncherType::PlayniteDesktop
            || Config::Launcher.Type == LauncherType::PlayniteFullscreen)
            && GamingExperience::IsFullscreenMode() && !bFirstLaunch)
        {
            log.Debug("Looking for Playnite process");

            restartDetected = Launchers::HasLauncherProcess();
            if (!restartDetected)
            {
                Sleep(500);
                log.Debug("Once more Looking for Playnite process");
                restartDetected = Launchers::HasLauncherProcess();
            }
        }

        if (!restartDetected)
        {
            Launchers::LauncherOnBoot();
            Launchers::StartLauncher();
            if (GamingExperience::IsFullscreenMode() && bFirstLaunch)
            {
                Launchers::LaunchStartupApps();
            };

            if (Config::DeckyUpdateEnabled)
            {
                std::wstring deckyPath = Config::GetDeckyPath();
                if (std::filesystem::exists(deckyPath))
                {
                    log.Debug("Starting built-in Decky Loader");
                    Process::StartProcess(deckyPath, L"");
                }
                else
                {
                    log.Warn("Decky Loader enabled but executable not found at %s", Unicode::to_string(deckyPath).c_str());
                }
            }
        }
        else
        {
            log.Debug("Restart Playnite is detected");
        }

        Window::MainWindow mainWindow;

        if (!mainWindow.Create(L"ConsolePC", hInstance, (Config::Launcher.Name + L" is launching").c_str()))
        {
            return (int)GetLastError();
        }

        mainWindow.Show();

        Updater::ScheduledDeckyCheckAsync(mainWindow.GetHwnd(), 0);

        exitCode = Window::MainWindow::RunLoop();

        log.Debug("Loop finished. Time to exit");

        if (exitCode)
        {
            log.Warn(log.APIError(exitCode),"Exiting with code: (%d) error", exitCode);
        }
        else
        {
            log.Debug("Job is done!");
        }

        return (int)exitCode;
    }
};
