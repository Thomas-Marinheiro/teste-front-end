import localData from "../dados/produtos.json";
import type { Produto } from "../tipos/Produto";

export const buscarProdutos = async (): Promise<Produto[]> => {
  return localData.products.map((produto, indice) => ({
    id: indice + 1,
    nome: produto.productName,
    imagem: produto.photo,
    descricao: produto.descriptionShort,
    preco: produto.price,
  }));
};
