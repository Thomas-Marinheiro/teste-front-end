import React from "react";
import styles from "./Marcas.module.scss";
import logoImg from "../../assets/logo.png";

const brands = [
  { id: 1, name: "VTEX", logo: logoImg },
  { id: 2, name: "VTEX", logo: logoImg },
  { id: 3, name: "VTEX", logo: logoImg },
  { id: 4, name: "VTEX", logo: logoImg },
  { id: 5, name: "VTEX", logo: logoImg },
];

const Marcas: React.FC = () => {
  return (
    <section className={styles.brands}>
      <div className="container">
        <h2 className={styles.title}>Navegue por marcas</h2>
        <div className={styles.brandList}>
          {brands.map((brand) => (
            <div key={brand.id} className={styles.brandItem}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marcas;
