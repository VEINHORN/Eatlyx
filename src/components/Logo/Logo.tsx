import LogoImage from "../../assets/images/logos/logo.svg?react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="#" className={styles.logo}>
      <LogoImage aria-label="Logo" className={styles.logoImg} />
    </a>
  );
};

export default Logo;
