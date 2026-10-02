# VOLT — Landing Page Responsiva

Projeto acadêmico com HTML semântico e Tailwind CSS, inspirado na referência visual enviada (scooter elétrica, paleta grafite e destaque do produto). Marca, planos e valores são fictícios. A ilustração SVG é original e conceitual.

## Como abrir
1. Extraia a pasta compactada.
2. Abra `index.html` no navegador, com conexão à internet para carregar o Tailwind.
3. Opcionalmente, abra pelo Live Server do VS Code.

## Arquivos
- `index.html`: conteúdo, estrutura semântica e classes Tailwind.
- `assets/scooter.svg`: imagem local com texto alternativo no HTML.
- `script.js`: simulação de envio do formulário, sem backend.

## Requisitos atendidos
- Cabeçalho com logotipo textual e menu.
- Hero com título, subtítulo, CTA e imagem com alt.
- Três cards de benefícios e três planos ilustrativos.
- Contato com nome, e-mail e mensagem, labels e validação nativa.
- Rodapé com links internos e redes sociais (links demonstrativos para as plataformas).
- Elementos `header`, `main`, `section` e `footer`.
- Mobile-first: classes básicas para celular; ajustes com `sm:`, `md:` e `lg:`.
- Cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- Sem CSS próprio: todo o estilo da página usa classes utilitárias do Tailwind.

## Entenda a responsividade
`sm:` se aplica a partir de 640 px, `md:` a partir de 768 px e `lg:` a partir de 1024 px. Por exemplo, os cards ficam em uma coluna até 767 px, duas de 768 a 1023 px e três a partir de 1024 px.

## Observações
O Tailwind Play CDN é indicado para desenvolvimento e atividades de estudo. Para produção, compile as classes usando Tailwind CLI ou outra integração. Documentação: https://tailwindcss.com/docs/installation/play-cdn

O formulário apenas exibe uma confirmação de demonstração; não transmite nem salva dados. Para receber mensagens de verdade, é necessário integrar um backend ou serviço de formulários.
