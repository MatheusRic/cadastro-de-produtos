# Objetivo
O Objetivo dessa api, é oferecer de maneira imediata, requisiçoes para que seja feito o cadastro de produtos.

# Abrir no insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=cadastro%20de%20produtos&uri=https%3A%2F%2Fraw.githubusercontent.com%2FMatheusRic%2Fcadastro-de-produtos%2Fmain%2Fdata.json)

## Para ter acesso as requisiçoes, e retornos esperados, basta clicar no botao do insomnia, que sera tudo configurado altomaticamente, e voce podera acessar as informaçoes por la, na aba DOCS

# **Iniciando o projeto**

Antes de tudo, crie um banco de dados **POSTGRESQL** utilizando seu gerenciador preferido **"beekeper, Dbeaber etc"**.
Lembre se de guardar o nome do seu banco, pois vamos utilizar o mesmo.

## **Clonando o repositorio e configurando o ambiente**

No canto superior, logo acima do codigo do projeto, tem um botao escrito **CODE**, clique nele, e faça a clonagem do repositorio.
Uma vez que voce clonou o repositorio, pegue o arquivo **.env.example**, e apague o **.example**, e preencha com suas informaçoes,
colocando no campo **DATABASE**, o banco de dados que voce criou anteriormente.

## **Instalando dependencias**

Logo após toda essa configuraçao, precisamos instalar os pacotes que foram utilizados no projeto... Entao, basta rodar o comando `yarn install` em seu terminal e espere que seja concluido a instalaçao dos mesmos.

## **Rodando Migrations**

Abra a pasta **migrations**, la contem um arquivo vazio txt... Voce deve exclui-lo

Como ORM, utilizamos o **typeORM**, sendo assim, nos precisamos criar as nossas tabelas no banco criado anteriormente, e persistir as mesmas... Execute em sequencia os comandos `yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts`, e logo quando o processo terminar, executar o comando `yarn typeorm migration:run -d src/data-source.ts`

## **Rodando nosso projeto**

Uma vez que voce seguiu todos os passos corretamente, basta abrir seu terminal, e executar o comando `yarn dev`, e pronto... Seu servidor ja vai estar rodando em sua maquina local.
