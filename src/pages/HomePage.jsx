import food from "../assets/images/backgrounds/food.png";
import Button from "../components/Button/Button";
import { Rating } from "../components/Rating/Rating";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <section className="hero">
          <div className="hero-content">
            <h1>
              Beautiful food & takeaway,{" "}
              <span className="highlight">delivered</span> to your door.
            </h1>
            <p>
              Enjoy restaurant-quality meals made with fresh ingredients.
              Delivered hot and ready whenever you are.
            </p>
            <Button title="Place an Order" />

            <Rating />
          </div>

          <div className="food-image">
            <img src={food} alt="Food delivery" />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
