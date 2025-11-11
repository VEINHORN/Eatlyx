import { useState } from "react";
import Button from "../Button/Button";
import "./Card.css";

export const Card = ({ meal, image, price, instructions, onAddToBucket }) => {
  const [itemsCount, setItemsCount] = useState(1);

  const handleAddToCart = () => {
    onAddToBucket(itemsCount);
  };

  const handleChange = (event) => {
    setItemsCount(Number(event.target.value));
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
        <p className="card-description">{instructions}</p>
        <div className="card-control">
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
