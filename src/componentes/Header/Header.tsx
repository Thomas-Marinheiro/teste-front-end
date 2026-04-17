import React from "react";
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  Box,
  ShieldCheck,
  Truck,
  CreditCard,
} from "lucide-react";
import styles from "./Header.module.scss";
import logoImg from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.infoItem}>
              <ShieldCheck size={20} color="#9F9F9F" />
              <span>
                Compra <strong>100% segura</strong>
              </span>
            </div>
            <div className={styles.infoItem}>
              <Truck size={20} color="#9F9F9F" />
              <span>
                <strong>Frete grátis</strong> acima de R$ 200
              </span>
            </div>
            <div className={styles.infoItem}>
              <CreditCard size={20} color="#9F9F9F" />
              <span>
                <strong>Parcele</strong> suas compras
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainBar}>
        <div className="container">
          <div className={styles.mainContent}>
            <div className={styles.logo}>
              <img src={logoImg} alt="VTEX" />
            </div>

            <div className={styles.search}>
              <input type="text" placeholder="O que você está procurando?" />
              <button type="submit" aria-label="Buscar">
                <Search size={24} color="#9F9F9F" />
              </button>
            </div>

            <div className={styles.actions}>
              <button className={styles.actionItem} aria-label="Produtos">
                <Box size={24} color="#9F9F9F" />
              </button>
              <button className={styles.actionItem} aria-label="Favoritos">
                <Heart size={24} color="#9F9F9F" />
              </button>
              <button className={styles.actionItem} aria-label="Minha conta">
                <User size={24} color="#9F9F9F" />
              </button>
              <button className={styles.actionItem} aria-label="Carrinho">
                <ShoppingCart size={24} color="#9F9F9F" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className="container">
          <ul className={styles.navList}>
            <li>
              <a href="#" className={styles.navItem}>
                TODAS CATEGORIAS
              </a>
            </li>
            <li>
              <a href="#" className={styles.navItem}>
                SUPERMERCADO
              </a>
            </li>
            <li>
              <a href="#" className={styles.navItem}>
                LIVROS
              </a>
            </li>
            <li>
              <a href="#" className={styles.navItem}>
                MODA
              </a>
            </li>
            <li>
              <a href="#" className={styles.navItem}>
                LANÇAMENTOS
              </a>
            </li>
            <li>
              <a href="#" className={styles.navItem}>
                OFERTAS DO DIA
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.navItem} ${styles.navItemHighlight}`}
              >
                <ShieldCheck size={16} />
                ASSINATURA
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
