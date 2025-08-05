# Modelos

Este diretório contém as definições de tipos de dados e as implementações de repositórios para as entidades da aplicação.

## Estrutura

- **/post**: Contém os arquivos relacionados à entidade `Post`.
  - `post-models.ts`: Define o tipo `postModel`, que representa a estrutura de um post.
  - `json-post-repository.ts`: Uma implementação concreta da interface `PostRepository` que busca os dados de um arquivo JSON (`src/db/seed/posts.json`). Esta classe é responsável por ler e parsear o arquivo para fornecer os dados dos posts para a aplicação.

## Padrão de Repositório

A classe `JsonPostRepository` segue o padrão de repositório, que abstrai a lógica de acesso a dados. Ela implementa a interface `PostRepository` (definida em `src/repositories/post/post-repository.ts`), garantindo um contrato consistente para buscar dados de posts, independentemente da fonte de dados.
