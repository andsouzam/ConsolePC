#include <filesystem>
#include "Tools/Event.hpp"
#include "AppSettings/SettingsLayout.hpp"
#include "AppSettings/SettingsDialog.hpp"
#include "SplashPage.hpp"
#include "Tools/Paths.hpp"


namespace ConsolePC::App::AppSettings::Settings::Page
{
    void SplashPage::AddPage(std::list<SettingsLine>& settingPageList, ULONG &top)
    {
        ULONG pageTop = 0;
        m_pSplashTextLine = &m_dialog.AddSettingsLine(m_pageLinesList, pageTop,
            L"Mostrar texto de carregamento",
            L"",
            m_showTextToggle,
            Layout::LineHeight, 0, 0);

        m_pSplashTextLine->AddGroupItem(&m_dialog.AddSettingsLine(m_pageLinesList, pageTop,
            L"Usar texto personalizado",
            L"",
            m_customTextEdit,
            Layout::LineHeightSmall, Layout::LinePadding, Layout::LineSmallMargin));

        m_pSplashLogoLine = &m_dialog.AddSettingsLine(m_pageLinesList, pageTop,
            L"Mostrar logotipo do aplicativo",
            L"",
            m_showLogoToggle,
            Layout::LineHeight, 0, 0);

        m_pSplashLogoLine->AddGroupItem(&m_dialog.AddSettingsLine(m_pageLinesList, pageTop,
            L"Animar logotipo",
            L"",
            m_showAnimationToggle,
            Layout::LineHeightSmall, Layout::LinePadding, Layout::LineSmallMargin));


        m_pSplashVideoLine = &m_dialog.AddSettingsLine(m_pageLinesList, pageTop,
            L"Mostrar vídeo",
            L"Exibe um vídeo aleatório da pasta \"splash\"",
            m_showVideoToggle,
            Layout::LineHeight, 0, 0);

        m_pSplashVideoLine->OnLink = delegate(OnGotoSplashFolder);

        m_pSplashVideoLine->AddGroupItem(&m_dialog.AddSettingsLine(m_pageLinesList, pageTop,
            L"Reproduzir vídeo até o fim",
            L"Forçar o vídeo a tocar pelo menos uma vez, mesmo se o sistema iniciar",
            m_videoTillEndToggle,
            Layout::LineHeightSmall, 0, Layout::LineSmallMargin));

        m_pSplashVideoLine->AddGroupItem(&m_dialog.AddSettingsLine(m_pageLinesList, pageTop,
            L"Repetir vídeo (Loop)",
            L"",
            m_videoLoopToggle,
            Layout::LineHeightSmall, 0, Layout::LineSmallMargin));

        m_pSplashVideoLine->AddGroupItem(&m_dialog.AddSettingsLine(m_pageLinesList, pageTop,
            L"Silenciar vídeo (Mudo)",
            L"",
            m_videoMuteToggle,
            Layout::LineHeightSmall, 0, Layout::LineSmallMargin));

        m_pSplashVideoLine->AddGroupItem(&m_dialog.AddSettingsLine(m_pageLinesList, pageTop,
            L"Pausar ao concluir",
            L"Mantém o último quadro do vídeo até o app de jogos iniciar",
            m_videoPauseToggle,
            Layout::LineHeightSmall, Layout::LinePadding, Layout::LineSmallMargin));

        m_showTextToggle.OnChanged += delegate(OnShowTextChanged);
        m_pSplashTextLine->OnChanged += delegate(m_dialog.UpdateLayout);

        m_showLogoToggle.OnChanged += delegate(OnShowLogoChanged);
        m_pSplashLogoLine->OnChanged += delegate(m_dialog.UpdateLayout);

        m_showVideoToggle.OnChanged += delegate(OnShowVideoChanged);
        m_pSplashVideoLine->OnChanged += delegate(m_dialog.UpdateLayout);
    }

    void SplashPage::LoadControls()
    {
        m_showTextToggle.SetCheck(Config::SplashShowText);
        m_customTextEdit.SetText(Config::SplashCustomText);

        m_showLogoToggle.SetCheck(Config::SplashShowLogo);
        m_showAnimationToggle.SetCheck(Config::SplashShowAnimation);

        m_showVideoToggle.SetCheck(Config::SplashShowVideo);
        m_videoTillEndToggle.SetCheck(Config::SplashTillEnd);
        m_videoLoopToggle.SetCheck(Config::SplashVideoLoop);
        m_videoMuteToggle.SetCheck(Config::SplashVideoMute);
        m_videoPauseToggle.SetCheck(Config::SplashVideoPause);
    }

    void SplashPage::SaveControls()
    {
        Config::SplashShowText = m_showTextToggle.GetCheck();
        Config::SplashCustomText = m_customTextEdit.GetText();

        Config::SplashShowLogo = m_showLogoToggle.GetCheck();
        Config::SplashShowAnimation = m_showAnimationToggle.GetCheck();

        Config::SplashShowVideo = m_showVideoToggle.GetCheck();
        Config::SplashTillEnd = m_videoTillEndToggle.GetCheck();
        Config::SplashVideoLoop = m_videoLoopToggle.GetCheck();
        Config::SplashVideoMute = m_videoMuteToggle.GetCheck();
        Config::SplashVideoPause = m_videoPauseToggle.GetCheck();
    }

    void SplashPage::OnGotoSplashFolder()
    {
        std::wstring path = Tools::Paths::GetSplashDefaultPath();

        std::filesystem::create_directories(path);
        ShellExecuteW(NULL, L"open", L"explorer.exe", path.c_str(), NULL, SW_SHOWNORMAL);
    }

    void SplashPage::OnShowTextChanged()
    {
        m_pSplashTextLine->SetState(m_showTextToggle.GetCheck()
            ? SettingsLine::Opened
            : SettingsLine::Normal);

        m_dialog.UpdateLayout();
    }

    void SplashPage::OnShowLogoChanged()
    {
        m_pSplashLogoLine->SetState(m_showLogoToggle.GetCheck()
            ? SettingsLine::Opened
            : SettingsLine::Normal);

        m_dialog.UpdateLayout();
    }

    void SplashPage::OnShowVideoChanged()
    {
        m_pSplashVideoLine->SetState(m_showVideoToggle.GetCheck()
            ? SettingsLine::Opened
            : SettingsLine::Normal);

        m_dialog.UpdateLayout();
    }
};
