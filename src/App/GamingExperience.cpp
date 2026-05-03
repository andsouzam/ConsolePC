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

#include <apiquery2.h>
#include <libloaderapi.h>
#include <libloaderapi2.h>
#include "gamingexperience.h"
#include "Logging/LogManager.hpp"
#include "GamingExperience.hpp"


#pragma comment(lib, "delayimp.lib")
#pragma comment(lib, "windowsapp.lib")
#pragma comment(lib, "onecore.lib")

namespace ConsolePC::App
{
    static Logger log = LogManager::GetLogger("GamingExperience");

    // Dynamic function pointers
    static pfnIsGamingFullScreenExperienceSupported fIsGamingFullScreenExperienceSupported = nullptr;
    static pfnIsGamingFullScreenExperienceActive fIsGamingFullScreenExperienceActive = nullptr;
    static pfnSetGamingFullScreenExperience fSetGamingFullScreenExperience = nullptr;
    static pfnRegisterGamingFullScreenExperienceChangeNotification fRegisterGamingFullScreenExperienceChangeNotification = nullptr;
    static pfnUnregisterGamingFullScreenExperienceChangeNotification fUnregisterGamingFullScreenExperienceChangeNotification = nullptr;

    bool isApiSetImplemented( const std::string& api )
    {
        HMODULE hDll = LoadLibraryA((api + ".dll").c_str());
        if (!hDll) return false;

        fIsGamingFullScreenExperienceSupported = (pfnIsGamingFullScreenExperienceSupported)GetProcAddress(hDll, "IsGamingFullScreenExperienceSupported");
        fIsGamingFullScreenExperienceActive = (pfnIsGamingFullScreenExperienceActive)GetProcAddress(hDll, "IsGamingFullScreenExperienceActive");
        fSetGamingFullScreenExperience = (pfnSetGamingFullScreenExperience)GetProcAddress(hDll, "SetGamingFullScreenExperience");
        fRegisterGamingFullScreenExperienceChangeNotification = (pfnRegisterGamingFullScreenExperienceChangeNotification)GetProcAddress(hDll, "RegisterGamingFullScreenExperienceChangeNotification");
        fUnregisterGamingFullScreenExperienceChangeNotification = (pfnUnregisterGamingFullScreenExperienceChangeNotification)GetProcAddress(hDll, "UnregisterGamingFullScreenExperienceChangeNotification");

        // We don't free hDll because we need the function pointers to stay valid
        return fRegisterGamingFullScreenExperienceChangeNotification != nullptr;
    }

    bool GamingExperience::ApiIsAvailable = isApiSetImplemented("api-ms-win-gaming-experience-l1-1-0");

    bool GamingExperience::IsFullscreenMode()
    {
        return ApiIsAvailable && fIsGamingFullScreenExperienceActive && fIsGamingFullScreenExperienceActive();
    }

    bool GamingExperience::IsDesktopMode()
    {
        return !ApiIsAvailable
            || (fIsGamingFullScreenExperienceSupported && fIsGamingFullScreenExperienceSupported() 
                && fIsGamingFullScreenExperienceActive && !fIsGamingFullScreenExperienceActive());
    }

    bool GamingExperience::ExitFSEMode()
    {
        if (ApiIsAvailable && fSetGamingFullScreenExperience)
        {
            HRESULT hres = fSetGamingFullScreenExperience(FALSE);
            log.Debug("Set FSE off return %u", hres);
        }
        return false;
    }

    bool GamingExperience::EnterFSEMode()
    {
        if (ApiIsAvailable && fSetGamingFullScreenExperience)
        {
            HRESULT hres = fSetGamingFullScreenExperience(TRUE);
            log.Debug("Entering FSE mode ... %u", hres);
        }
        return false;
    }

    GamingExperience::GamingExperience()
    {
        m_fseHandle = nullptr;
        if (ApiIsAvailable && fRegisterGamingFullScreenExperienceChangeNotification)
        {
            fRegisterGamingFullScreenExperienceChangeNotification((PFN_GAMING_FULL_SCREEN_EXPERIENCE_CHANGE_CALLBACK)Callback, this, &m_fseHandle);
            if (m_fseHandle != nullptr)
            {
                log.Debug(
                    "FullScreenExperienceChangeNotification is registered. "
                    "Current mode is %s",
                    GamingExperience::IsFullscreenMode() ? "Fullscreeen experience" : "Windows Desktop"
                );
            }
            else
            {
                log.Error(log.APIError(), "FullScreenExperienceChangeNotification registation failed");
            }
        }
    }
    //static
    void GamingExperience::Callback(GamingExperience * This)
    {
        This->OnExperienseChanged.Notify();
    }

    GamingExperience::~GamingExperience()
    {
        if (m_fseHandle != nullptr && ApiIsAvailable && fUnregisterGamingFullScreenExperienceChangeNotification)
        {
            fUnregisterGamingFullScreenExperienceChangeNotification(m_fseHandle);
        }
    }
}
