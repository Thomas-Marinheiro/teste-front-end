import React from "react";
import styles from "./Newsletter.module.scss";

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
            <p className={styles.subtitle}>
              Assine nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputsRow}>
              <input type="text" placeholder="Digite seu nome" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <button type="submit" className={styles.button}>
                INSCREVER
              </button>
            </div>

            <div className={styles.checkboxContainer}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Aceito os termos e condições</label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
