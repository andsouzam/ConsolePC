#pragma once
#include <windows.h>

/**
 * Windows Gaming Experience (FSE) Definitions
 * 
 * This file provides the necessary definitions for interacting with the 
 * Windows Full Screen Experience API via dynamic loading.
 */

DECLARE_HANDLE(GAMING_FULL_SCREEN_EXPERIENCE_REGISTRATION);
typedef void (CALLBACK *PFN_GAMING_FULL_SCREEN_EXPERIENCE_CHANGE_CALLBACK)(_In_ void* context);

// Function pointer types for dynamic loading
typedef BOOL (WINAPI *pfnIsGamingFullScreenExperienceSupported)();
typedef BOOL (WINAPI *pfnIsGamingFullScreenExperienceActive)();
typedef HRESULT (WINAPI *pfnSetGamingFullScreenExperience)(BOOL active);
typedef HRESULT (WINAPI *pfnRegisterGamingFullScreenExperienceChangeNotification)(
    _In_ PFN_GAMING_FULL_SCREEN_EXPERIENCE_CHANGE_CALLBACK callback,
    _In_opt_ void* context,
    _Out_ GAMING_FULL_SCREEN_EXPERIENCE_REGISTRATION* registration);
typedef void (WINAPI *pfnUnregisterGamingFullScreenExperienceChangeNotification)(
    _In_ GAMING_FULL_SCREEN_EXPERIENCE_REGISTRATION registration);
