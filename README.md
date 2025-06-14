# 📦 SpaceCards Curiosidades

**SpaceCards Curiosidades** é uma aplicação web interativa, construída com HTML, CSS e JavaScript puro, que permite organizar e estudar flashcards baseados em curiosidades. Inclui funcionalidades de flip, edição, seções e personalização visual com tema espacial e fontes personalizadas.

## 📌 Sumário
- [Descrição](#descricao)
- [Motivação e Público-Alvo](#motivacao)
- [Tecnologias Utilizadas](#tecnologias)
- [Funcionalidades Principais](#funcionalidades)
- [Acessibilidade & Responsividade](#acessibilidade)
- [Estrutura do Projeto](#estrutura)
- [Como Executar](#como-executar)
- [Histórico de Desenvolvimento](#historico)
- [Licença](#licenca)
- [Possíveis Melhorias](#melhorias)
- [Contribuição](#contribuicao)
- [Curiosidade Extra](#curiosidade)

## 📝 Descrição
Aplicativo web que exibe flashcards de curiosidades em seções temáticas (como “Animais”, “Nosso Planeta” e “Espaço”). Os cartões têm frente e verso, suportam flip, edição, exclusão, além de permitir adição condicional via botão central ou menu “⋮”. O design faz uso de estilo único, mascote, fontes Google e responsividade.

## 🎯 Motivação e Público-Alvo
- Estudantes e entusiastas que queiram aprender de forma interativa.
- Professores interessados em apresentar conteúdo em formato de flashcards.
- Desenvolvedores iniciantes, interessados em DOM dinâmico, eventos, storage e acessibilidade.

## ⚙ Tecnologias Utilizadas
- **HTML5** – Marcação semântica (`header`, `main`, `section`, `nav`, `footer`).
- **CSS3** – Variables, Flexbox, efeitos visuais, media query e transições.
- **Google Fonts** – _Pacifico_ (títulos) e _Roboto_ (texto).
- **JavaScript** – Lógica de renderização, persistência via `localStorage`, manipulação de eventos.
- **localStorage** – Armazenamento e recuperação de dados entre sessões.
- **SVG** – Mascote “mascote-astro.svg”.
- **Acessibilidade** – `aria-label`, foco por teclado e leitura semântica.

## 🧩 Funcionalidades Principais
### Flip de Flashcards
Cartões viram ao clicar ou usar _Enter/Espaço_, exibindo a resposta.

### Adição Condicional
- **Seção vazia:** botão central “Adicionar Flashcard” aparece no centro da área.
- **Após 1º flashcard:** botão central desaparece e futuras adições só via menu “⋮” do cartão.

### Imagens nos Cartões
O formulário aceita upload de imagens para frente e verso. As imagens são convertidas em Base64 e exibidas no cartão sendo salvas junto aos dados.

### Seções Dinâmicas
- Seções iniciais: `Animais`, `Nosso Planeta` e `Espaço`.
- Usuário pode adicionar (+), renomear ou excluir seções via menu da barra de seções.
- Executa operações em `localStorage`, atualiza flashcards associados e re-renderiza.

### Editar e Excluir Flashcards
Menu “⋮” nos cartões oferece opções para editar (abre formulário com dados já preenchidos) e excluir (com confirmação). Edição modifica o elemento específico do array.

### Reiniciar Todo o App
O botão “Reiniciar Flashcards” apaga os dados do `localStorage` e recarrega o estado inicial (dados embutidos no código).

### Persistência com Segurança
Funções de carregamento fazem parse com tratamento de erros; recuperam dados, ou caso inválido, reinicializam com dados padrão.

## ♿ Acessibilidade & Responsividade
- Elementos semânticos facilitam leitura por leitores de tela e navegação via teclado.
- Estilos CSS com foco visível e contraste de cores satisfatório.
- Layout reponsivo: cartões diminuem para _95vw_, padding reduzido via media query até 600px.

## 🗂 Estrutura do Projeto
```
Projeto_Flashcards2025/
├── assets/
│   └── mascote-astro.svg
├── index.html
├── style.css
└── script.js
```
- **assets/**: mascote em SVG.
- **index.html**: estrutura HTML e importações.
- **style.css**: tema visual, variáveis, layout.
- **script.js**: lógica completa do app.

## 🚀 Como Executar
1. `git clone https://github.com/LFIDlugosz/Projeto_Flashcards2025.git`
2. `cd Projeto_Flashcards2025`
3. Abra `index.html` no navegador.
4. Interaja com os flashcards: flip, menus, adicionar/excluir, reiniciar.

## 🧾 Histórico de Desenvolvimento
Sugere-se seguir fluxo de desenvolvimento com commits incrementais como:
- _feat:_ estrutura inicial
- _feat:_ renderização de seções e cartões
- _feat:_ flip de flashcards
- _feat:_ formulário de adição e persistência
- _feat:_ menus de seção e cartão
- _feat:_ botão reiniciar
- _style:_ aplicação de tema visual
- _refactor:_ limpeza de código, acessibilidade, testes

## 📄 Licença
Licenciado sob **Creative Commons Attribution‑NonCommercial‑ShareAlike 4.0 International (CC BY‑NC‑SA 4.0)**. Isso permite o uso acadêmico, com crédito ao autor, sem fins comerciais e sob a mesma licença.

