# Repositórios

Este diretório define as interfaces (contratos) para os repositórios de dados da aplicação. O padrão de repositório é utilizado para desacoplar a lógica de negócio das implementações de acesso a dados.

## Estrutura

- **/post**: Contém os arquivos relacionados ao repositório da entidade `Post`.
  - `post-repository.ts`: Define a interface `PostRepository`. Esta interface estabelece os métodos que qualquer classe de repositório de posts deve implementar, como `findAll()` e `findById()`.

## Padrão de Repositório

Ao definir interfaces claras para o acesso a dados, permitimos que diferentes implementações de fonte de dados (como um arquivo JSON, um banco de dados SQL ou uma API externa) possam ser trocadas sem a necessidade de alterar o código que consome esses dados.

A implementação concreta que utiliza um arquivo JSON como fonte de dados pode ser encontrada em `src/models/post/json-post-repository.ts`.
