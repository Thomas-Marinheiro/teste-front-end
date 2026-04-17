import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import styles from "./Footer.module.scss";
import logoImg from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.columnLogo}>
            <div className={styles.logo}>
              <img src={logoImg} alt="Econverse" />
            </div>
            <p className={styles.logoText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Institucional</h3>
            <ul className={styles.list}>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Movimento</a>
              </li>
              <li>
                <a href="#">Trabalhe Conosco</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Ajuda</h3>
            <ul className={styles.list}>
              <li>
                <a href="#">Suporte</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
              <li>
                <a href="#">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Termos</h3>
            <ul className={styles.list}>
              <li>
                <a href="#">Termos e Condições</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Troca e Devolução</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.bottomLogos}>
              <img src={logoImg} alt="Econverse" className={styles.logoSmall} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
