import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../features/cart/cartSlice";
import clsx from "clsx";
import Price from "./Price/Price";
import Title from "./Title/Title";

export const Card = ({
  id,
  meal,
  image,
  price,
  instructions,
  className,
  infoClassName,
}) => {
  const [itemsCount, setItemsCount] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setItemsCount(Number(event.target.value));
  };

  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.cardImage}>
        <img src={image} />
      </div>

      <div className={clsx(styles.cardInfo, infoClassName)}>
        <div className={styles.cardHeader}>
          <Title meal={meal} />

          <Price price={price} />
        </div>
        {instructions && (
          <p className={styles.cardDescription}>{instructions}</p>
        )}
        <div className={styles.cardControl}>
          <input
            type="number"
            min={1}
            value={itemsCount}
            onChange={handleChange}
          />
          <Button
            title="Add to card"
            onClick={() => dispatch(addToCart({ id, itemsCount }))}
          />
        </div>
      </div>
    </div>
  );
};
