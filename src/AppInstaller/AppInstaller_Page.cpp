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
#include <commctrl.h>
#include <shellapi.h>
#include <shlobj.h>
#include <objbase.h>
#include <string>
#include <filesystem>

#include <fstream>
#include <filesystem>
#include <ShlObj.h>

#include "Tools/Process.hpp"
#include "Tools/Unicode.hpp"
#include "Tools/Registry.hpp"
#include "Tools/Paths.hpp"
#include "AppInstaller.hpp"
#include "Logging/LogManager.hpp"

#pragma comment(lib, "urlmon.lib")

namespace ConsolePC
{
    namespace fs = std::filesystem;
    static Logger log = LogManager::GetLogger("Installer");

    std::list<HWND> AppInstaller::CreatePage()
    {
        RECT rc;
        GetClientRect(m_hDialog, &rc);

        rc.left += m_theme.DpiScale(Layout_ImageWidth + Layout_Margins * 2);
        InflateRect(&rc, -m_theme.DpiScale(Layout_Margins), -m_theme.DpiScale(Layout_Margins));
        int width = rc.right - rc.left;

        std::list<HWND> page;

        page.push_back(m_imageStatic.Create(m_hDialog,
            rc.left - m_theme.DpiScale(Layout_ImageWidth + Layout_Margins),
            rc.top + m_theme.DpiScale(Layout_ImageTop),
            m_theme.DpiScale(Layout_ImageWidth),
            m_theme.DpiScale(Layout_ImageWidth)
        ));

        page.push_back( m_captionStatic.Create(m_hDialog,
            rc.left,
            rc.top,
            width,
            m_theme.DpiScale(Layout_CaptionHeight)
        ));

        page.push_back( m_textStatic.Create(m_hDialog,
            rc.left,
            rc.top + m_theme.DpiScale(Layout_CaptionHeight),
            width,
            rc.bottom - rc.top - m_theme.DpiScale(Layout_CaptionHeight + Layout_ButtonHeight + Layout_ButtonPadding)
        ));

        page.push_back( m_leftButton.Create(m_hDialog,
            rc.right - m_theme.DpiScale(Layout_ButtonWidth * 2 + Layout_ButtonPadding),
            rc.bottom - m_theme.DpiScale(Layout_ButtonHeight),
            m_theme.DpiScale(Layout_ButtonWidth),
            m_theme.DpiScale(Layout_ButtonHeight)
        ).GetHwnd());

        page.push_back( m_rightButton.Create(m_hDialog,
            rc.right - m_theme.DpiScale(Layout_ButtonWidth),
            rc.bottom - m_theme.DpiScale(Layout_ButtonHeight),
            m_theme.DpiScale(Layout_ButtonWidth),
            m_theme.DpiScale(Layout_ButtonHeight)
        ).GetHwnd());

        m_captionStatic.SetLarge(true);
        m_captionStatic.SetColor(Theme::Colors::TextAccented);

        return page;
    }

    void AppInstaller::ShowPage(
        const std::wstring &icon,
        const std::wstring &caption,
        const std::wstring &text,
        const std::wstring &buttonRight,
        const std::function<void()> &callbackRight,
        const std::wstring &buttonLeft,
        const std::function<void()> &callbackLeft,
        bool showBrowse)
    {

        m_imageStatic.LoadIcon(icon.empty() ? Tools::Paths::GetExeFileName() : icon, 128);

        m_captionStatic.SetText(caption);
        m_textStatic.SetText(text);

        if( !buttonRight.empty())
        {
            m_rightButton.SetText(buttonRight);
            m_rightButton.OnChanged = callbackRight;
            m_rightButton.Show(true);
        }
        else
        {
            m_rightButton.Show(false);
        }


        if( !buttonLeft.empty())
        {
            m_leftButton.SetText(buttonLeft);
            m_leftButton.OnChanged = callbackLeft;
            m_leftButton.Show(true);
        }
        else
        {
            m_leftButton.Show(false);
        }

        RedrawWindow(m_hDialog, NULL, NULL, RDW_ALLCHILDREN | RDW_INVALIDATE | RDW_UPDATENOW);
    }

    void AppInstaller::ShowWelcomePage()
    {
        if (m_isUpdate)
        {
            ShowPage(L"",
                L"Bem-vindo ao Atualizador ConsolePC",
                std::wstring(L"Isso irá atualizar o ConsolePC para a versão ") +
                Unicode::to_wstring(APP_VERSION) +
                std::wstring(L" no seu sistema.\n\nClique em Atualizar para prosseguir ou Cancelar para sair."),
                L"Cancelar", delegate(OnCancel),
                L"Atualizar", delegate(OnInstall)
            );
        }
        else
        {
            ShowPage(L"",
                L"Bem-vindo ao Instalador ConsolePC",
                std::wstring(L"Isso irá instalar a versão ") +
                Unicode::to_wstring(APP_VERSION) +
                std::wstring(L" do ConsolePC no seu sistema.\n\nClique em Próximo para prosseguir ou Cancelar para sair."),
                L"Cancelar", delegate(OnCancel),
                L"Próximo", delegate(ShowLicensePage)
            );
        }
    }

    void AppInstaller::ShowLicensePage()
    {
        ShowPage(Icon_EULA,
            L"Contrato de Licença de Usuário Final",

            L"O ConsolePC é um software livre, distribuído sob os termos da Licença MIT "
            L"na esperança de que seja útil, "
            L"mas SEM QUALQUER GARANTIA; sem mesmo a garantia implícita de "
            L"COMERCIALIZAÇÃO ou ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO.",

            L"Cancelar", delegate(OnCancel),
            L"Aceitar", delegate(OnInstall)
        );
    }

    void AppInstaller::ShowProgressPage()
    {
        ShowPage(Icon_Progress,
            m_isUpdate ? L"Atualizando ConsolePC" : L"Instalando ConsolePC",
            L"Preparando...",
            L"", delegate(OnCancel));
    }

    void AppInstaller::ShowCompletePage()
    {
        if (m_isUpdate)
        {
            ShowPage(Icon_Done,
                L"Concluído",
                L"A atualização do ConsolePC foi finalizada com sucesso.",
                L"Concluir", delegate(OnDone)
            );
        }
        else
        {
            ShowPage(Icon_Done,
                L"Concluído",
                L"A instalação do ConsolePC foi finalizada com sucesso.\n\nPressione Configurar para alterar as definições.\n",
                L"Configurar", delegate(OnSettings),
                IsConfigured() ? L"Concluir" : L"", delegate(OnDone)
            );
        }
    }

    bool AppInstaller::IsConfigured()
    {
        wchar_t appData[MAX_PATH]={0};
        ExpandEnvironmentStringsW(L"%PROGRAMDATA%\\ConsolePC", appData, MAX_PATH);
        return fs::exists(fs::path(std::wstring(appData) + L"\\ConsolePC.json"));
    }

    void AppInstaller::ShowErrorPage(const std::wstring &caption, const std::wstring &text, const std::wstring &icon)
    {
        ShowPage(icon.empty() ? Icon_Error : icon,
                 caption,
                 text,
                 L"Fechar", delegate(OnCancel));
    }


    #define TRY(hr) if (FAILED((hr))) break;
    #define FREE(f) if (f) f->Release();

    std::wstring AppInstaller::GetProgressText(int lines)
    {
        std::wstring progress;

        auto it = m_progressStatus.begin();
        if (m_progressStatus.size() > lines)
        {
            std::advance(it, m_progressStatus.size() - lines);
        }
        for (; it != m_progressStatus.end(); ++it)
        {
            std::wstring prefix = (*it)[0] < L'\x2000' ? L" \x2012  " : L"";
            progress += prefix + *it + L"\n";
        }
        return progress;
    }
    void AppInstaller::SetCurrentProgress(const std::wstring& status)
    {
        m_progressStatus.push_back(status);
        m_textStatic.SetText(GetProgressText(5));
        RedrawWindow(m_hDialog, NULL, NULL, RDW_ALLCHILDREN | RDW_INVALIDATE | RDW_UPDATENOW);
    }

    void AppInstaller::CheckSuccess(bool bSuccess)
    {
        log.Info("%s - %s", Unicode::to_string(m_progressStatus.back()).c_str(), bSuccess ? "OK" : "FAIL");

        std::wstring step = (bSuccess ? L"\x2713 ": L"\x2715 ") + m_progressStatus.back();
        m_progressStatus.pop_back();
        SetCurrentProgress(step);

        if (!bSuccess)
        {
            throw Logging::Logger::APIError();
        }
    }

    void AppInstaller::OnInstall()
    {
        fs::path path(fs::temp_directory_path().append(L"ConsolePC_install"));
        if (fs::exists(path))
        {
            fs::remove_all(path);
        }

        fs::create_directories(path.wstring() + L"\\logs");

        LogManager::Initialize("ConsolePC.Installer", LogLevels::Debug, path.wstring() + L"\\logs");
        log.Info("Starting Installation ConsolePC v%s to %s", APP_VERSION, path.string().c_str());

        try
        {
            ShowProgressPage();
            Sleep(1);

#ifdef OFFLINE_INSTALLER
            // Extract resource file
            SetCurrentProgress(L"Descompactando arquivos");
            CheckSuccess(ExtractEmbeddedZip(path));
#else
            SetCurrentProgress(L"Baixando arquivos");
            CheckSuccess(DownloadFiles(path));
#endif

            std::wstring oldPath = Registry::ReadString(registryPath, L"InstallLocation");
            if (!oldPath.empty())
            {
                SetCurrentProgress(L"Removendo versão antiga");
                CheckSuccess(DeleteOldVersion() && DeleteOldFiles(oldPath));
            }



            m_isDevModeEnabled = IsDeveloperModeEnabled();
            if (!m_isDevModeEnabled)
            {
                SetCurrentProgress(L"Habilitando modo desenvolvedor");
                EnableDeveloperMode(true);
                CheckSuccess(true);
            }

            if (!IsRootCertificateInstalled(Unicode::to_wstring(VER_PUBLISHER_CN)))
            {
                SetCurrentProgress(L"Instalando certificado do publicador");
                m_isRootCertInstalled = InstallRootCertificate(path.wstring() + L"/" + L"ConsolePC.cer");
                CheckSuccess(m_isRootCertInstalled);
            }

            SetCurrentProgress(L"Instalando pacote");
            CheckSuccess(InstallPackage(
                path.wstring() + L"/ConsolePC-" + Unicode::to_wstring(VER_VERSION_STR) + L".appx",
                L"ConsolePC"
            ));

            SetCurrentProgress(L"Limpando arquivos temporários");
            CheckSuccess(true);

            if (!m_isDevModeEnabled)
            {
                SetCurrentProgress(L"Desabilitando modo desenvolvedor");
                EnableDeveloperMode(false);
                CheckSuccess(true);
            }

            if (m_isRootCertInstalled)
            {
                SetCurrentProgress(L"Removendo certificado temporário");
                RemoveRootCertificate(Unicode::to_wstring(VER_PUBLISHER_CN));
                m_isRootCertInstalled = false;
                CheckSuccess(true);
            }

            ShowCompletePage();

            LogManager::DeleteLog();
            if (fs::exists(path))
            {
                fs::remove_all(path);
            }

        }
        catch(const std::exception& e)
        {
            if (m_isRootCertInstalled)
            {
                RemoveRootCertificate(Unicode::to_wstring(VER_PUBLISHER_CN));
            }

            if (!m_isDevModeEnabled)
            {
                EnableDeveloperMode(false);
            }

            log.Error(e, "Installation fail:");
            ShowErrorPage(L"Erro na Instalação", GetProgressText(4) + Unicode::to_wstring(e.what()));
        }
    }

    bool AppInstaller::DeleteOldVersion()
    {
        std::wstring uninstaller = Registry::ReadString(registryPath, L"UninstallString");
        if (uninstaller.empty())
        {
            return true;
        }
        // Execute uninstaller
        SHELLEXECUTEINFOW sei = { sizeof(sei) };
        sei.lpFile = uninstaller.c_str();
        sei.lpParameters = L"/s";
        sei.nShow = SW_HIDE;
        sei.fMask = SEE_MASK_NOCLOSEPROCESS;

        if (ShellExecuteExW(&sei))
        {
            WaitForSingleObject(sei.hProcess, 30000);
            CloseHandle(sei.hProcess);
        }
        return true;
    }

    bool AppInstaller::DeleteOldFiles(const std::wstring& dir)
    {
        std::wstring moduleName = Unicode::to_lower(Paths::GetExeFileName());

        fs::path path(dir);
        if (fs::is_directory(path))
        {
            for (const auto & entry : fs::directory_iterator(path))
            {
                if (!entry.is_regular_file() || Unicode::to_lower(entry.path().wstring()) == moduleName)
                {
                    continue;
                }
                std::wstring ext = Unicode::to_lower(entry.path().extension().wstring());

                if (ext == L".log" || ext == L".exe" || ext == L".dll")
                {
                    fs::remove(entry.path());
                }
            }
        }
        return true;
    }

#ifdef OFFLINE_INSTALLER
    bool AppInstaller::ExtractEmbeddedZip(const std::wstring &path)
    {
        if (FAILED(SHCreateDirectoryExW(NULL, path.c_str(), NULL)))
        {
            throw std::exception("Não foi possível criar a pasta binária");
        }

        HINSTANCE hInstance = GetModuleHandle(NULL);

        // Find the ZIP resource
        HRSRC hResource = FindResource(hInstance, MAKEINTRESOURCE(IDR_EMBEDDED_ZIP), L"ZIP");
        if (!hResource)
        {
            throw std::exception("Arquivo de instalação corrompido. Recurso não encontrado.");
        }

        // Load the resource
        HGLOBAL hGlobal = LoadResource(hInstance, hResource);
        if (!hGlobal)
        {
            throw std::exception("Arquivo de instalação corrompido. Falha ao carregar arquivos.");
        }

        // Get resource data
        LPVOID zipData = LockResource(hGlobal);
        DWORD zipSize = SizeofResource(hInstance, hResource);

        if (!zipData || zipSize == 0)
        {
            throw std::exception("Arquivo de instalação corrompido. Sem dados ZIP.");
        }

        // Write resource to temporary ZIP file
        std::wstring zipArchive = path + L"\\ConsolePC." + Unicode::to_wstring(APP_VERSION) + L".zip";

        std::ofstream tempStream(zipArchive, std::ios::binary);
        tempStream.write(static_cast<const char *>(zipData), zipSize);
        tempStream.close();


        // Use Windows built-in tar to extract
        SHELLEXECUTEINFOW sei = {sizeof(sei)};
        sei.fMask = SEE_MASK_NOCLOSEPROCESS;
        sei.lpFile = L"tar";

        std::wstring parameters = L"-xf \"" + zipArchive + L\" -C \"" + path + L"\"";
        sei.lpParameters = parameters.c_str();
        sei.nShow = SW_HIDE;

        BOOL success = ShellExecuteExW(&sei);
        if (success)
        {
            WaitForSingleObject(sei.hProcess, INFINITE);
            DWORD exitCode;
            GetExitCodeProcess(sei.hProcess, &exitCode);
            success = (exitCode == 0);
            CloseHandle(sei.hProcess);
        }
        else
        {
            throw std::exception("Arquivo de instalação corrompido. Falha na descompactação.");
        }

        // Clean up temporary file
        DeleteFile(zipArchive.c_str());

        return success;
    }
#else
    bool AppInstaller::DownloadFiles(const std::wstring &path)
    {
        if (FAILED(SHCreateDirectoryExW(NULL, path.c_str(), NULL)))
        {
            throw std::exception("Não foi possível criar a pasta de instalação");
        }
        const std::wstring rootPath = L"https://github.com/andsouzam/ConsolePC/releases/download/v" + Unicode::to_wstring(APP_VERSION);
        std::list<std::wstring> files;
        files.push_back(L"/consolepc.cer");
        files.push_back(L"/ConsolePC-" + Unicode::to_wstring(APP_VERSION) + L".appx");

        for (std::wstring file : files)
        {
            HRESULT hr = URLDownloadToFileW(
                NULL,
                (rootPath + file).c_str(),
                (path + file).c_str(),
                0, NULL);

            if (FAILED(hr))
            {
                throw std::runtime_error("Falha no download");
            }
        }

        return true;
    }
#endif

    void AppInstaller::OnSettings()
    {
        Process::StartProtocol(L"consolepc://settings");
        EndDialog(m_hDialog, IDOK);
    }

    void AppInstaller::OnDone()
    {
        EndDialog(m_hDialog, IDOK);
    }

    bool AppInstaller::AutoDeleteSelf()
    {
        std::wstring batchPath = fs::temp_directory_path().wstring() + L"\\ins000_consolepc_cleanup.bat";

        std::wofstream batch(batchPath);
        if (!batch.is_open()) return false;

        batch << L"@echo off\n";
        batch << L"chcp 65001 >nul\n";
        batch << L"echo Limpando arquivos temporários...\n";

        batch << L":waitloop\n";
        batch << L"tasklist /fi \"PID eq " << GetCurrentProcessId() << L"\" | find \"" << GetCurrentProcessId() << L"\" >nul\n";
        batch << L"if not errorlevel 1 (\n";
        batch << L"  timeout /t 1 /nobreak >nul\n";
        batch << L"  goto waitloop\n";
        batch << L")\n\n";

        // Delete this batch file
        batch << L"del /f /q \"" << Tools::Paths::GetExeFileName() << "\"\n";
        batch << L"del /f /q \"" << batchPath << L"\"\n";

        batch << L"echo Limpeza concluída!\n";

        batch.close();

        // Execute batch
        SHELLEXECUTEINFOW sei = { sizeof(sei) };
        sei.lpFile = batchPath.c_str();
        sei.nShow = SW_HIDE;
        sei.fMask = SEE_MASK_NOCLOSEPROCESS;

        if (ShellExecuteExW(&sei)) {
            CloseHandle(sei.hProcess);
        }

        return true;
    }

}
