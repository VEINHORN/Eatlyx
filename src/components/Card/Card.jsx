import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";

export const Card = ({ meal, image, price, instructions, onAddToBucket }) => {
  const [itemsCount, setItemsCount] = useState(1);

  const handleAddToCart = async () => {
    await onAddToBucket(itemsCount);
  };

  const handleChange = (event) => {
    setItemsCount(Number(event.target.value));
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} />
      </div>

      <div className={styles.cardInfo}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{meal}</h3>
          <span className={styles.price}>$ {price} USD</span>
        </div>
        <p className={styles.cardDescription}>{instructions}</p>
        <div className={styles.cardControl}>
          <input
            type="number"
            min={1}
            value={itemsCount}
            onChange={handleChange}
          />
          <Button title="Add to card" onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};
