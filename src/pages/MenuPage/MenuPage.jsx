import { useEffect, useMemo, useState } from "react";
import Button from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";

import styles from "./MenuPage.module.css";

export const MenuPage = ({ onAddToBucket }) => {
  const [page, setPage] = useState(1);
  const [meals, setMeals] = useState([]);
  const [isSeeMoreButtonVisible, setIsSeeMoreButtonVisible] = useState(true);

  const MAX_PAGE_SIZE = 6;

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((meals) => {
        setMeals(meals);
      });
  }, []);

  const categories = useMemo(() => {
    return Array.from(new Set(meals.map((meal) => meal.category)));
  }, [meals]);

  const handleSeeMoreButtonClick = () => {
    if ((page + 1) * MAX_PAGE_SIZE >= meals.length) {
      setIsSeeMoreButtonVisible(false);
    }

    setPage(page + 1);
  };

  const pageMeals = meals.slice(0, page * MAX_PAGE_SIZE);

  return (
    <div className={styles.menupage}>
      <div className={styles.info}>
        <h1 className={styles.pageTitle}>Browse our menu</h1>
        <p className={styles.pageDescription}>
          Use our menu to place an order online, or{" "}
          <span
            className={`${styles.highlight} ${styles.tooltip}`}
            data-tooltip="Call us at 123-456-789"
          >
            phone
          </span>{" "}
          our store
          <br />
          to place a pickup order. Fast and fresh food.
        </p>
      </div>

      <div className={styles.buttons}>
        {categories.map((category) => (
          <Button key={category} title={category} outlined />
        ))}
      </div>

      <div className={styles.cards}>
        {pageMeals.map((meal) => (
          <Card
            key={meal.id}
            meal={meal.meal}
            image={meal.img}
            price={meal.price}
            instructions={meal.instructions}
            onAddToBucket={onAddToBucket}
          />
        ))}
      </div>

      <div>
        {isSeeMoreButtonVisible && (
          <Button title="See more" onClick={handleSeeMoreButtonClick} />
        )}
      </div>
    </div>
  );
};
