import React, { useState } from "react";
import type { Produto } from "../../tipos/Produto";
import styles from "./ModalProduto.module.scss";
import { X, Minus, Plus } from "lucide-react";

interface Props {
  produto: Produto;
  aoFechar: () => void;
}

const ModalProduto: React.FC<Props> = ({ produto, aoFechar }) => {
  const [quantidade, setQuantidade] = useState(1);

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  return (
    <div className={styles.overlay} onClick={aoFechar}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={aoFechar}
          aria-label="Fechar"
        >
          <X size={24} color="#707070" />
        </button>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <h2 className={styles.title}>{produto.nome}</h2>
            <p className={styles.price}>{precoFormatado}</p>
            <p className={styles.description}>{produto.descricao}</p>
            <a href="#" className={styles.detailsLink}>
              Veja mais detalhes do produto &gt;
            </a>

            <div className={styles.actions}>
              <div className={styles.quantity}>
                <button
                  onClick={diminuirQuantidade}
                  disabled={quantidade <= 1}
                  aria-label="Diminuir quantidade"
                >
                  <Minus size={20} />
                </button>
                <span>{quantidade}</span>
                <button
                  onClick={aumentarQuantidade}
                  aria-label="Aumentar quantidade"
                >
                  <Plus size={20} />
                </button>
              </div>
              <button className={styles.buyButton}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduto;
