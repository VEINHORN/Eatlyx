import { useSelector } from "react-redux";
import styles from "./OrderPage.module.css";
import Button from "../../components/Button/Button";
import { useGetMealsQuery } from "../../features/meals/mealsApi";
import { selectEnrichedOrderItems } from "../../features/cart/cartSelectors";
import { OrderItem } from "../../components/OrderItem/OrderItem";
import { useState } from "react";
import clsx from "clsx";

export const OrderPage = () => {
  useGetMealsQuery();

  const orderItems = useSelector(selectEnrichedOrderItems);
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  return (
    <div className={styles.orderpage}>
      <h1 className={clsx("h1Title", styles.header)}>Finish your order</h1>
      {orderItems.length === 0 ? (
        <p className={styles.emptyCartMessage}>Your cart is empty</p>
      ) : (
        <>
          <div className={styles.cardsWrapper}>
            <div className={styles.cards}>
              {orderItems.map(({ id, quantity, meal }) => (
                <OrderItem
                  key={id}
                  id={id}
                  image={meal?.img}
                  meal={meal?.meal}
                  price={meal?.price}
                  quantity={quantity}
                />
              ))}
            </div>
          </div>

          <div className={styles.address}>
            <div className={styles.inputField}>
              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            <div className={styles.inputField}>
              <label htmlFor="house">House</label>
              <input
                id="house"
                type="text"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
            </div>

            <Button
              title="Order"
              onClick={() =>
                alert("Order placed successfully. Thanks for your order!")
              }
            />
          </div>
        </>
      )}
    </div>
  );
};
