<p align="center">
<img src="https://github.com/schontz0310/develcode_web/blob/master/src/assets/LogoDevel.svg" width="150" height="150" align="center">
</p>
<h2 align="center">
Develcode Challenge - Cadastro de Usúarios
</h2>
<h2 align="center">
Back End
</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/schontz0310/Challenges-Develcode?style=plastic">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/schontz0310/Challenges-Develcode">
  
  <img alt="Typescript" src="https://badges.frapsoft.com/typescript/code/typescript.png?v=101">
     
</p>

<p align="center">

  <a href="https://www.linkedin.com/in/eliverto-schontz-moraes/" target="_blank" >
    <img alt="Linkedin - Eliverto" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
  </a>
  
  <a href="mailto:schontz0310@gmail.com" target="_blank" >
    <img alt="Email - Eliverto" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
  </a>
</p>

## :file_folder: Projeto
  
A  **[Develcode][Develcode_site]** Propos o desafio como segue abaixo:

TESTE CADASTRO BÁSICO USUÁRIO
Cadastro de usuários contendo os campos:

- Código
- Nome
- Data de nascimento
- Foto

Alguns detalhes:
- Serviços do backend deverão ser em node.js ou php ou java spring boot
- Banco de dados postgresql ou mysql
- Frontend: Android em Kotlin ou Java ou react native (gerando android) ou react (web) com tela de splash (react web não precisa tela de splash), listagem do cadastro com possibilidade de visualizar/incluir/editar o registro
- Código deverá ser comitado no github e depois nos enviado para análise
  
## :pencil2:  Tecnologias
  
 Este projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://github.com/expressjs/express)
- [React](https://github.com/facebook/react)
- [axios](https://github.com/axios/axios)
- [Knex](http://knexjs.org/)
- [Multer](https://www.npmjs.com/package/multer)

## :paperclip: Tools
- [Visual Studio Code](https://code.visualstudio.com)
- [Insomnia](https://insomnia.rest)
- [Figma](https://www.figma.com/)
- [Notion](https://www.notion.so/)
  

## :boom: Como Executar o Back End

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  
1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/schontz0310/Challenges-Develcode.git
```

2. Executando a Aplicação:

```sh

  $ cd Challenges-Develcode
  
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  
  # Configurando o banco de dados e criando as tabelas.
  !! Criar uma base de dados postgres com o nome de ChallengeDevelcode, caso queira usar outro nome para a base de dados, 
  você deve alterar o nome da mesma no arquivo src/database/knex/knexfile.ts
  !! Ainda no arquino src/database/knex/knexfile.ts configure o usuario e senha de seu banco de dados, 
  substituindo USER_NAME e PASSWORD respectivamente.
  
  # Criação da tabela 'users' no banco de dados
  $ yarn knex:Mrun # ou npm run knex:Mrun

  # Inicie a API
  $ yarn start # ou npm start

  # testando a aplicação
  !! dentro da pasta extras existem um arquivo com as configurações das rotas para inportação no insominia, 
  inporte o mesmo e teste as rotas
 
```

Se deu tudo certo é hora do front end.

[Develcode_site]: https://www.develcode.com.br/
