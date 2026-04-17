# Econverse - Teste Front-End Junior

Este é o meu projeto para o teste técnico da Econverse. Desenvolvi uma landing page de e-commerce usando React e TypeScript, focando em deixar o layout o mais fiel possível ao que foi pedido no Figma.

A página tem uma vitrine de produtos que puxa dados de um JSON, filtros por categoria, um modal que abre quando você clica no produto e algumas outras seções como o banner e a newsletter.

## Tecnologias que usei

- React 
- TypeScript
- Sass (SCSS Modules) para os estilos
- Vite para o build
- Lucide-React para os ícones
- Axios (foi instalado, mas no final decidi usar o JSON local para evitar erros no console)

## Como rodar o projeto

Para rodar na sua máquina, você vai precisar do Node.js instalado.

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Rode em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

   O site vai abrir em `http://localhost:5173/`.

3. Para rodar o linter e checar o código:

   ```bash
   npm run test
   ```

4. Para fazer o build de produção:
   ```bash
   npm run build
   ```

## O que eu implementei

- Vitrine de produtos consumindo dados de um arquivo JSON local.
- Modal de detalhes que abre ao clicar no produto.
- Área de parceiros com banners personalizados.
- Layout responsivo para celular e tablet.
- Popup de newsletter que aparece depois de 2 segundos (e salva no localStorage pra não ficar incomodando).
- Estrutura de pastas e arquivos organizadas.
- HTML semântico pensando em SEO.

