import { useState } from "react";
import Button from "../Button/Button";
import "./Card.css";

export const Card = ({ meal, image, price, onAddToBucket }) => {
  const [itemsCount, setItemsCount] = useState(1);

  const handleAddToCart = () => {
    if (itemsCount == 1) onAddToBucket(2);
    else onAddToBucket(1);

    setItemsCount((prevItemsCount) => {
      return prevItemsCount + 1;
    });
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} />
      </div>

      <div className="card-info">
        <div className="card-header">
          <h3 className="card-title">{meal}</h3>
          <span>$ {price} USD</span>
        </div>
        <p className="card-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="card-control">
          <input value={itemsCount} readOnly />
          <Button title="Add to card" onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};
