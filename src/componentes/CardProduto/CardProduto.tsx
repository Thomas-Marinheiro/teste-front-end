import React from "react";
import type { Produto } from "../../tipos/Produto";
import styles from "./CardProduto.module.scss";

interface Props {
  produto: Produto;
  aoClicar: (produto: Produto) => void;
}

const CardProduto: React.FC<Props> = ({ produto, aoClicar }) => {
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const precoAntigo = (produto.preco * 1.2).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const parcelas = `10x de ${(produto.preco / 10).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })} sem juros`;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={produto.imagem} alt={produto.nome} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{produto.nome}</h3>

        <div className={styles.prices}>
          <span className={styles.oldPrice}>{precoAntigo}</span>
          <span className={styles.price}>{precoFormatado}</span>
        </div>

        <p className={styles.installments}>ou {parcelas}</p>
        <p className={styles.shipping}>Frete grátis</p>

        <button className={styles.buyButton} onClick={() => aoClicar(produto)}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CardProduto;
