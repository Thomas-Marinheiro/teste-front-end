import React, { useState, useEffect } from "react";
import styles from "./ModalNewsletter.module.scss";
import { X } from "lucide-react";
import modalImg from "../../assets/black_friday.png";

const ModalNewsletter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenNewsletterModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenNewsletterModal", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={modalImg} alt="Newsletter" className={styles.image} />
          </div>

          <div className={styles.formContainer}>
            <h2 className={styles.title}>
              BEM-VINDO À <strong>ECONVERSE</strong>
            </h2>
            <p className={styles.subtitle}>
              Seja o primeiro a receber nossas novidades e ofertas exclusivas
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Digite seu nome"
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                required
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                GANHAR 10% OFF
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNewsletter;
