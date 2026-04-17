import React from "react";
import {
  Smartphone,
  Monitor,
  ShoppingBag,
  Heart,
  Coffee,
  Car,
  Dumbbell,
} from "lucide-react";
import styles from "./MenuCategoria.module.scss";

const categories = [
  { id: 1, name: "Tecnologia", icon: <Smartphone size={32} />, active: true },
  { id: 2, name: "Supermercado", icon: <ShoppingBag size={32} /> },
  { id: 3, name: "Bebidas", icon: <Coffee size={32} /> },
  { id: 4, name: "Ferramentas", icon: <Car size={32} /> },
  { id: 5, name: "Saúde", icon: <Heart size={32} /> },
  { id: 6, name: "Esportes e Fitness", icon: <Dumbbell size={32} /> },
  { id: 7, name: "Moda", icon: <Monitor size={32} /> },
];

const MenuCategoria: React.FC = () => {
  return (
    <section className={styles.categoryMenu}>
      <div className="container">
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${styles.categoryItem} ${category.active ? styles.active : ""}`}
            >
              <div className={styles.iconContainer}>{category.icon}</div>
              <span className={styles.categoryName}>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategoria;
