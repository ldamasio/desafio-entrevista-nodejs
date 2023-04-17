# SISTEMA DE GESTÃO DO ESTACIONAMENTO SABARUTUBA

O nome da empresa fictícia Sabarutuba é apenas uma brincadeira, 
unindo partes das palavras Sabará e Jurubatuba.

## TECNOLOGIAS UTILIZADAS

DOCKER - Nesta versão de desenvolvimento, o sistema utiliza docker 
apenas para subir o container do banco de dados.

MYSQL - O clássico MySQL guardará todos os dados de gestão em suas 
tabelas.

NESTJS - Framework NodeJS que nos permitirá escrever os códigos a 
partir de uma base, incluindo toda uma arquitetura de software para o 
nosso projeto.

TYPEORM - Padronizando e facilitando a interação com o Banco de Dados.

SWAGGER - Automatizando a criação da documentação da API.

## CHAMADAS DE SERVIÇOS

## CONFIGURAÇÕES

### INSTALAÇÃO

Testado no Ubuntu 22.10

$ sudo docker-compose up -d --build

http://localhost:3000

Para mais detalhes, leia o arquivo INSTALL

Documentação: http://localhost:3000/api