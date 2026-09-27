# ONG Esperança

Aplicação FrontEnd desenvolvida para uma ONG, com o objetivo de apresentar projetos e campanhas de voluntariado e permitir o cadastro de novos voluntários.

## Funcionalidades

- Navegação entre as principais seções da aplicação.
- Apresentação de projetos e campanhas da ONG.
- Formulário de cadastro de voluntários.
- Validação dos campos do formulário.
- Persistência dos cadastros utilizando `localStorage`.
- Restauração dos voluntários armazenados no navegador.
- Feedback visual utilizando SweetAlert2.
- Organização do código JavaScript em módulos ES6.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- ES6 Modules
- LocalStorage
- SweetAlert2
- Git
- GitHub

## Estrutura do projeto

- `html/index.html` — página principal da aplicação.
- `css/style.css` — estilos da aplicação.
- `images/` — imagens utilizadas no projeto.
- `js/app.js` — controle da aplicação e navegação.
- `js/form.js` — validação e gerenciamento do formulário.
- `js/storage.js` — leitura e gravação dos dados no `localStorage`.

## Como executar

Não é necessário instalar dependências ou realizar uma build para executar o projeto.

Clone o repositório utilizando:

`git clone <URL_DO_REPOSITORIO>`

Depois, abra o arquivo `html/index.html` em um navegador.

## Persistência de dados

Os dados dos voluntários são armazenados no `localStorage` do navegador. Dessa forma, os registros permanecem disponíveis enquanto os dados armazenados pelo site não forem removidos do navegador.

## Biblioteca externa

O projeto utiliza a biblioteca SweetAlert2 para apresentar mensagens de feedback ao usuário após o cadastro de voluntários.

A biblioteca é carregada por CDN diretamente no arquivo HTML.

## Organização do JavaScript

O código JavaScript foi dividido em módulos de acordo com suas responsabilidades.

O arquivo `app.js` controla a aplicação e a navegação. O arquivo `form.js` concentra a validação e o gerenciamento do formulário. O arquivo `storage.js` é responsável pela leitura e gravação dos dados no `localStorage`.

Essa divisão facilita a manutenção e reduz o acoplamento entre as funcionalidades.

## Versionamento

O projeto utiliza Git para controle de versão e GitHub para hospedagem do repositório.

As alterações foram registradas por meio de commits que representam as principais etapas do desenvolvimento, incluindo criação das páginas, implementação dos estilos, funcionalidades JavaScript, persistência de dados, integração com biblioteca externa e modularização do código.

## Autor

Davi Viana