import { Card } from "../Card/Card";
import styles from "./MealsList.module.css";
import type { Meal } from "../../types/mealType";

type MealsListProps = {
  meals: Meal[];
};

export const MealsList = ({ meals }: MealsListProps) => {
  return (
    <>
      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          {meals.map((meal) => (
            <Card
              key={meal.id}
              id={meal.id}
              meal={meal.meal}
              img={meal.img}
              price={meal.price}
              instructions={meal.instructions}
            />
          ))}
        </div>
      </div>
    </>
  );
};
