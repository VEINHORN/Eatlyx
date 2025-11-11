import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";

import "./MenuPage.css";

export const MenuPage = ({ onAddToBucket }) => {
  const [page, setPage] = useState(1);
  const [meals, setMeals] = useState([]);
  const [isSeeMoreButtonVisible, setIsSeeMoreButtonVisible] = useState(true);

  useEffect(() => {
    fetch(
      `https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals?page=${page}&limit=6`
    )
      .then((res) => res.json())
      .then((meals) => {
        if (meals.length === 0) {
          setIsSeeMoreButtonVisible(false);
          return;
        }

        setMeals((existingMeals) => existingMeals.concat(meals));
      });
  }, [page]);

  const handleSeeMoreButtonClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="menupage">
      <div className="info">
        <h1 className="page-title">Browse our menu</h1>
        <p className="page-description">
          Use our menu to place an order online, or{" "}
          <span
            className="highlight tooltip"
            data-tooltip="Call us at 123-456-789"
          >
            phone
          </span>{" "}
          our store<br/>to place a pickup order. Fast and fresh food.
        </p>
      </div>

      <div className="buttons">
        <Button title="Desert" />
        <Button title="Dinner" outlined />
        <Button title="Breakfast" outlined />
      </div>

      <div className="cards">
        {meals.map((meal) => (
          <Card
            key={meal.id}
            meal={meal.meal}
            image={meal.img}
            price={meal.price}
            onAddToBucket={onAddToBucket}
          />
        ))}
      </div>

      <div className="see-more-btn-wrapper">
        {isSeeMoreButtonVisible && (
          <Button title="See more" onClick={handleSeeMoreButtonClick} />
        )}
      </div>
    </div>
  );
};
