import { useNavigate } from "react-router";
import food from "../../assets/images/backgrounds/food.png";
import Button from "../../components/Button/Button";
import { Rating } from "../../components/Rating/Rating";

import styles from "./HomePage.module.css";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Beautiful food & takeaway,{" "}
            <span className={styles.highlight}>delivered</span> to your door.
          </h1>
          <p>
            Enjoy restaurant-quality meals made with fresh ingredients.
            Delivered hot and ready whenever you are.
          </p>
          <Button title="Place an Order" onClick={() => navigate("/order")} />

          <Rating />
        </div>

        <div className={styles.foodImage}>
          <img src={food} aria-label="Food delivery" />
        </div>
      </section>
    </div>
  );
};
