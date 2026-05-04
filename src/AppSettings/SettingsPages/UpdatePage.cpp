#include "Updater/Updater.hpp"
#include "Tools/Event.hpp"
#include "AppSettings/SettingsLayout.hpp"
#include "AppSettings/SettingsDialog.hpp"
#include "UpdatePage.hpp"


namespace ConsolePC::App::AppSettings::Settings::Page
{
    void UpdatePage::AddPage(std::list<SettingsLine>& settingPageList, ULONG &top)
    {
        RECT rect;
        GetClientRect(m_dialog.GetHwnd(), &rect);

        SettingsLine & dialogLine = m_dialog.AddSettingsLine(settingPageList, top,
            L"Configurações de atualização",
            L"Alterar o período e as configurações de busca de nova versão",
            Layout::LineHeight, Layout::LinePadding, 0);

        dialogLine.SetState(FluentDesign::SettingsLine::Next);
        dialogLine.SetIcon(L'\xEDAB');


        ULONG topPage = 0;

        m_dialog.AddSettingsLine(m_pageLinesList, topPage,
            L"Período de verificação",
            L"Intervalo de busca por novas versões",
            m_checkIntervalCombo,
            Layout::LineHeight, Layout::LinePadding, 0);

        m_checkIntervalCombo.AddItem(L"Manual", L"", {(wchar_t)-2, 0});
        m_checkIntervalCombo.AddItem(L"Ao abrir as configurações", L"", {(wchar_t)-1, 0});

        m_dialog.AddSettingsLine(m_pageLinesList, topPage,
            L"Incluir versões pré-lançamento",
            L"Versões Beta podem ser menos estáveis",
            m_preReleaseToggle,
            Layout::LineHeight, Layout::LinePadding, 0);

        m_dialog.AddSettingsLine(m_pageLinesList, topPage,
            L"Mostrar notificações",
            L"Exibir alertas quando uma nova versão estiver disponível",
            m_notificationsToggle,
            Layout::LineHeight, Layout::LinePadding, 0);

        LoadControls();

        m_notificationsToggle.OnChanged = delegate(SaveControls);
        dialogLine.OnChanged += delegate(OpenUpdateSettingsPage);
        m_preReleaseToggle.OnChanged = delegate(UpdateSettingsChangedCheck);
        m_checkIntervalCombo.OnChanged = delegate(UpdateSettingsChangedCheck);
    }

    void UpdatePage::LoadControls()
    {
        m_checkIntervalCombo.SelectItem({(wchar_t)Config::UpdateCheckInterval, 0});
        m_preReleaseToggle.SetCheck(Config::UpdatePreRelease);
        m_notificationsToggle.SetCheck(Config::UpdateNotifications);
    }

    void UpdatePage::SaveControls()
    {
        Config::UpdateCheckInterval = (int)(short)m_checkIntervalCombo.GetCurentValue().c_str()[0];
        Config::UpdatePreRelease = m_preReleaseToggle.GetCheck();
        Config::UpdateNotifications = m_notificationsToggle.GetCheck();
    }

    void UpdatePage::OpenUpdateSettingsPage()
    {
        m_dialog.SwitchActivePage(L"Configurações de atualização", &m_pageLinesList);
    }

    void UpdatePage::UpdateSettingsChangedCheck()
    {
        UpdateSettingsChanged();
        if (Config::UpdateCheckInterval == -1)
        {
            Updater::CheckUpdateAsync(Config::UpdatePreRelease, m_dialog.GetHwnd(), SettingsDialog::WM_UPDATE_NOTIFICATION);
        }
    }

    void UpdatePage::UpdateSettingsChanged()
    {
        SaveControls();
        PostMessage(m_dialog.GetHwnd(), SettingsDialog::WM_UPDATE_NOTIFICATION, 0, 0);
    }
};
