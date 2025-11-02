import TrustpilotLogo from "../../assets/images/logos/trustpilot-logo.svg?react";
import "./Rating.css";

export const Rating = () => {
  return (
    <div className="rating-wrapper">
      <TrustpilotLogo className="rating-logo" />
      <div className="rating">
        <p>
          <span className="green-text">4.8 out of 5</span> based on 2000+
          reviews
        </p>
      </div>
    </div>
  );
};
