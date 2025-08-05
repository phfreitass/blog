// Importa as dependências necessárias.
import { postModel } from "@/models/post/post-models";
import { PostRepository } from "@/repositories/post/post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

// Define o diretório raiz do projeto.
const ROOT_DIR = process.cwd();

// Define o caminho para o arquivo JSON que armazena os posts.
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

// Implementação do repositório de posts que lê dados de um arquivo JSON.
export class JsonPostRepository implements PostRepository {
  // Método privado para ler e analisar o arquivo JSON do disco.
  private async readFromDisk(): Promise<postModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  // Retorna todos os posts do arquivo.
  async findAll(): Promise<postModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  // Encontra um post específico pelo seu ID.
  async findById(id: string): Promise<postModel> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);

    // Lança um erro se o post não for encontrado.
    if (!post) {
      throw new Error(`Post não encontrado`);
    }

    return post;
  }
}

// Exporta uma instância única do repositório de posts.
export const postRepository: PostRepository = new JsonPostRepository();
