// Importa o modelo de post para tipagem.
import { postModel } from "@/models/post/post-models";

// Define a interface para o repositório de posts, estabelecendo um contrato para as operações de dados.
export interface PostRepository {
  // Retorna uma lista de todos os posts.
  findAll(): Promise<postModel[]>;
  // Busca um post específico pelo seu ID.
  findById(id: string): Promise<postModel | undefined>;
}
