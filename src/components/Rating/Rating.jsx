import TrustpilotLogo from "../../assets/images/logos/trustpilot-logo.svg?react";
import styles from "./Rating.module.css";

export const Rating = () => {
  return (
    <div className={styles.ratingWrapper}>
      <TrustpilotLogo className={styles.ratingLogo} />
      <div className={styles.rating}>
        <p>
          <span className={styles.greenText}>4.8 out of 5</span> based on 2000+
          reviews
        </p>
      </div>
    </div>
  );
};
