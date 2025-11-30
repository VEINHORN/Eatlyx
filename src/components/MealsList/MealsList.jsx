import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Card } from "../Card/Card";

import styles from "./MealsList.module.css";

const INITIAL_PAGE = 1;
const MAX_PAGE_SIZE = 6;

export const MealsList = ({ meals, onAddToBucket }) => {
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    setPage(INITIAL_PAGE);
  }, [meals]);

  const pageMeals = meals.slice(0, page * MAX_PAGE_SIZE);
  const canSeeMore = page * MAX_PAGE_SIZE < meals.length;

  return (
    <>
      <div className={styles.cardsWrapper}>
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
      </div>

      <div className={styles.seeMoreContainer}>
        {canSeeMore && (
          <Button
            title="See more"
            onClick={() => setPage((prevPage) => prevPage + 1)}
          />
        )}
      </div>
    </>
  );
};
