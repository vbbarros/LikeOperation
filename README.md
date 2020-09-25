# LIKE OPERATOR

# Overview
Solução criada com o intuito de gerir likes de um artigo.

A aplicação foi construída utilizando nodeJS. Detalhes técnicos abaixo:

* Yarn
* NodeJS
* RabbitMQ
* MongoDB

# Inicialização
Para rodar a aplicação basta somente ter o docker instalado e rodar os seguintes comandos:

> docker-compose build

> docker-compose up

Para testar a aplicação basta abrir o arquivo LikeOperation.postman_collection no postman, que contém a configuração das rotas

# Detalhes

O servidor do RabbitMQ fica exposto no endereço:
- localhost:15672

### Credenciais:
- usuário: admin
- senha: admin

O mongoDB fica exposto no endereço:
 - localhost:27017

A API fica exposta no endereço:
 - localhost:3001

# Objetivos
### O objetivo aqui, foi tentar criar algo simples e robusto, para conseguir ter uma boa performance e lidar com um número massivo de requisições. Para isso optei por subir um serviço de mensageria (RabbitMQ), já que o eventLoop do Node trabalha com single Thread, e pode nos limitar ao processar tarefas.
------------------
#### Ps: Foquei mais na criação do ambiente como um todo, para ter uma solução mais robusta. O banco não foi todo desenhado, fiz somente um schema para conseguir demonstrar a inserção de um "like" e a busca do total de likes.

# Outras Abordagens

### Implementar o uso do socket junto das filas, para conseguir ter uma comunicação em tempo real. 

### Implementar múltiplos consumers concorrentes no RabbitMQ ou utilizar do padrão Publish/Subscribe.

### Paralelizar a capacidade da api utilizando clusters.