import React from "react";
import type { Produto } from "../../tipos/Produto";
import CardProduto from "../CardProduto/CardProduto";
import styles from "./VitrineProdutos.module.scss";

interface Props {
  titulo: string;
  produtos: Produto[];
  aoClicarProduto: (produto: Produto) => void;
}

const filtros = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

const VitrineProdutos: React.FC<Props> = ({
  titulo,
  produtos,
  aoClicarProduto,
}) => {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <div className={styles.line}></div>
            <h2 className={styles.title}>{titulo}</h2>
            <div className={styles.line}></div>
          </div>

          <ul className={styles.filters}>
            {filtros.map((filtro, indice) => (
              <li
                key={filtro}
                className={`${styles.filterItem} ${indice === 0 ? styles.active : ""}`}
              >
                <button>{filtro}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.grid}>
          {produtos.slice(0, 4).map((produto) => (
            <CardProduto
              key={produto.id}
              produto={produto}
              aoClicar={aoClicarProduto}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VitrineProdutos;
