import React from 'react';
import styles from './Banner.module.scss';

const Banner: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>Venha conhecer nossas<br />promoções</h1>
            <p className={styles.subtitle}>50% Off nos produtos</p>
            <button className={styles.button}>Ver produto</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
