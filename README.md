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

---

## Especificações Originais do Teste

### Instruções

- Faça um fork desse projeto para a sua conta pessoal do GitHub.
- Desenvolva a página conforme as **Especificações Técnicas**
- Crie um README com as instruções para compilar, testar e rodar o projeto.
- O link do repositório deverá ser enviado para o e-mail julia.gardiano@econverse.com.br com o título **Teste Vaga FrontEnd**

### Especificações Técnicas

- Desenvolver a pagina em React e TypeScript conforme o [layout](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1). Para conseguir pegar os elementos do Figma, basta copiar o layout para sua conta que terá acesso de edição.
- Montar a [vitrine](https://app.econverse.com.br/teste-front-end/junior/tecnologia/layout/vitrine-produtos.png) de produtos consumindo as informações dos produtos em json através desse [Link](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json).
- Desenvolver a interação ao clicar em um produto conforme layout. A interação consiste em abrir um modal com as principais informações do produto presente no arquivo [JSON](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json) conforme o produto que clicar.
- Utilizar Pré-processador Sass, Less ou Stylus.
- Respeitar o Layout pixel a pixel, tamanho das fontes, cores e botões.
- Não Utilizar bibliotecas UI como Bootstrap, Foundation, ou afins.

### Pontos Extras

- Utilizar Boas práticas de SEO
- Uso de HTML semântico

### O que avaliaremos em seu teste

- Organização do projeto
- Lógica do código
- Componentização
- Alcance dos objetivos propostos

**Boa sorte! ;)**
