#include "Tools/Event.hpp"
#include "AppSettings/SettingsLayout.hpp"
#include "AppSettings/SettingsDialog.hpp"
#include "SupportPage.hpp"
#include "Tools/Paths.hpp"


namespace ConsolePC::App::AppSettings::Settings::Page
{
    void SupportPage::AddPage(std::list<SettingsLine>& settingPageList, ULONG &top)
    {
        m_dialog.AddSettingsLine(settingPageList, top,
            L"Suporte relacionado",
            L"",
            Layout::LineHeightSmall, 0, 0
        ).SetState(FluentDesign::SettingsLine::Caption);

        SettingsLine &support = m_dialog.AddSettingsLine(settingPageList, top,
            L"Suporte e comunidade",
            L"",
            Layout::LineHeight, 0, 0);

        support.SetIcon(L'\xF6FA');
        support.OnChanged += delegateparam(m_dialog.UpdateLine, &support);

        SettingsLine &links = m_dialog.AddSettingsLine(settingPageList, top,
            L"",
            L"",
            Layout::LineHeightSmall, Layout::LinePadding, Layout::LineSmallMargin);

        support.AddGroupItem(&links);

        links.AddLinkButton(L"Código fonte oficial (GitHub)", L"https://github.com/andsouzam/ConsolePC/");
        links.AddLinkButton(L"Abrir pasta de logs", Tools::Paths::GetLogsPath());

        links.AddLinkButton(L"Reportar problema ou sugestão", L"https://github.com/andsouzam/ConsolePC/issues");
        links.AddLinkButton(L"Abrir pasta de configurações", Tools::Paths::GetConfigPath());

        links.AddLinkButton(L"Site oficial do projeto", L"https://github.com/andsouzam/ConsolePC/");
        links.AddLinkButton(L"Abrir pasta de Splash Screen", Tools::Paths::GetSplashDefaultPath());

        support.SetState(FluentDesign::SettingsLine::Opened);
    }
};
