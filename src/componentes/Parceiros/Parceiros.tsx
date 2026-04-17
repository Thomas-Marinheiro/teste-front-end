import React from 'react';
import styles from './Parceiros.module.scss';

const Parceiros: React.FC = () => {
  const banners = [
    {
      id: 1,
      titulo: 'Parceiros',
      descricao: 'Lorem ipsum dolor sit amet, consectetur',
      link: '#',
    },
    {
      id: 2,
      titulo: 'Parceiros',
      descricao: 'Lorem ipsum dolor sit amet, consectetur',
      link: '#',
    }
  ];

  return (
    <section className={styles.parceiros}>
      <div className="container">
        <div className={styles.grid}>
          {banners.map((banner) => (
            <div key={banner.id} className={styles.banner}>
              <div className={styles.overlay}>
                <h2 className={styles.titulo}>{banner.titulo}</h2>
                <p className={styles.descricao}>{banner.descricao}</p>
                <a href={banner.link} className={styles.botao}>CONFIRA</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parceiros;
