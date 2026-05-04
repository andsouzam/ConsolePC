# ConsolePC - Gaming Home Application

O ConsolePC permite que você use seus launchers favoritos (Playnite, Steam Big Picture, LaunchBox, etc.) como a aplicação "Home" oficial do Windows para o modo de **Experiência de Tela Cheia** (Gaming Full Screen Experience).

[Última Versão](https://github.com/andsouzam/ConsolePC/releases/latest)

---

## Funcionalidades

- **Suporte a Múltiplos Launchers:** Escolha entre Playnite, Steam, RetroBat, Armoury Crate SE, entre outros.
- **Alta Performance:** Desenvolvido em C++ para garantir consumo mínimo de memória e CPU.
- **Vídeos de Splash Personalizados:** Adicione seus próprios vídeos de carregamento enquanto o launcher inicia.
- **Integração ROG Ally:** Mapeamento completo dos botões traseiros e frontais do ASUS ROG Ally.
- **Integração Decky Loader:** Suporte automático para plugins da Steam no Windows.
- **Interface Amigável para Gamepad:** Configure tudo sem precisar de teclado ou mouse.

---

## Como Funciona

Quando o ConsolePC é definido como sua aplicação Home:
1. O Windows inicia o ConsolePC ao entrar no modo de jogos.
2. O ConsolePC carrega sua configuração e inicia o launcher selecionado.
3. Uma tela de carregamento (Splash) é exibida (com texto ou vídeo).
4. Assim que o launcher está pronto, o ConsolePC encerra silenciosamente, liberando recursos para seus jogos.

---

## Instalação e Configuração

### Como Instalar
1. Baixe o instalador mais recente na aba de [Releases](https://github.com/andsouzam/ConsolePC/releases).
2. Instale o certificado `consolepc.cer` em "Autoridades de Certificação Raiz Confiáveis" (Máquina Local).
3. Execute o arquivo `.appx` para instalar o aplicativo.
4. Nas configurações do Windows (**Configurações -> Jogos -> Experiência de tela cheia**), selecione o ConsolePC como seu Home App.

### Como Configurar
Procure por "ConsolePC" no Menu Iniciar, clique com o botão direito e selecione a tarefa **Configurar**.

---

## Créditos e Origem
Este projeto é um fork do AnyFSE desenvolvido originalmente por Artem Shpynov. O ConsolePC expande a visão original com foco em automação, tradução para PT-BR e integração de plugins de terceiros.

- Baseado no trabalho de @driver1998 (FullScreenExperienceShell).
- Inspirado por projetos como Handheld Companion e G-Helper para suporte ao ROG Ally.

---

## Licença
Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---
**Desenvolvido por andsouzam - Elevando a experiência de console no PC.**
