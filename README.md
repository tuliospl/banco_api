# banco_api

# Habilidades
Projeto desenvolvido com arquitetura MSC, utilizando mongoDB e NodeJS com express.

## Conexão com o Banco

**⚠️ IMPORTANTE! ⚠️**

Para criar uma conexão com o banco voce deve possuir o mongoDB instalado em sua maquina, copie o codigo url de conexão com o mongo e cole na chave MONGO_DB_URL, do arquivo `.env.dev`.

Além disso, **renomeie o arquivo `.env.dev` para `.env`**.

## Como executar
Clone o projeto para sua maquina, execute um `npm install` no terminal dentro da pasta do projeto baixado.

Altere o arquivo `.env.dev` seguindo os passos a cima para conexão com o BD, adicione uma chave secreta para o JWT e uma porta para a conexão.

Execute `npm start` para rodar o projeto

## Criação de usuario
Para criação de usuario deve ser feito um POST na rota /createUser:

```json
{
  "name": "Nome com 8 caracteres",  
  "cpf": "100.100.100-10"  
}
```

## Login
Para login de um usuario ja cadastrado faça um POST na rota /login:

```json
{
  "cpf": "100.100.100-10"  
}
```

## Deposito
Para desposito em qualquer conta utilize POST na rota /deposit:

```json
{
  "cpf": "100.100.100-10",
  "money": 1000
}
```

## Transferencia
Essa operação so e permitida para quem possui um usuario, pois ela necessita de um login para gerar um JWT.

Para realizar uma transferencia utilize POST na rota /transfer:

Sera necessario passar o JWT no cabeçalho da requisiçao, dentro da chave `Authorization`.
```json
{
  "cpf": "100.100.100-10",
  "money": 1000,
  "cpfTransfer": "100.100.100-10"  
}
```
