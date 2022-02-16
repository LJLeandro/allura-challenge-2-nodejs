<h1>ALURA CHALLENGE 2 - NODE.JS</h1>

<h2> Introdução </h2>
Estamos desenvolvendo uma aplicação com NodeJS para poder controlar o Orçamento Familiar de uma Familia.

<h2> Preparando MySql </h2>
Para executar o programa será preciso instalar o docker executar os comandos abaixo para poder se conectar ao MySQL.

$ docker pull mysql

$ docker run --name orcamentodb -e MYSQL_ROOT_PASSWORD=Sua_Senha -d -p 127.0.0.1:3306:3306 mysql:latest

<h2> Executando o Programa </h2>
No terminal, no diretório do projeto execute o comando baixo para que as tabelas sejam criadas.

$ npm run db

<h2> Testando a API </h2>
Na pasta Test, se encontram os teste feitos pelo Postman. Os testes automatizados estão em jest, para executa-los execute o comando

$ npm test

<h2> Executando a API </h2>

$ npm start
