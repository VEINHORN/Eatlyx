import styles from "./OrderItem.module.css";
import cardStyles from "./../Card/Card.module.css";
import Button from "../Button/Button";
import Price from "../Card/Price/Price";
import Input from "../Input/Input";
import Title from "../Card/Title/Title";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";

export const OrderItem = ({ id, image, meal, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.orderItem}>
      <div className={styles.left}>
        <div className={cardStyles.cardImage}>
          <img src={image} />
        </div>
        <Title meal={meal} />
      </div>

      <div className={styles.right}>
        <Price price={price} />

        <Input value={quantity} disabled />

        <Button title="X" onClick={() => dispatch(removeFromCart({ id }))} />
      </div>
    </div>
  );
};
