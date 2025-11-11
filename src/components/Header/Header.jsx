import Logo from "../Logo/Logo";
import Bucket from "../Bucket/Bucket";
import { Navigation } from "./Navigation/Navigation";
import styles from "./Header.module.css";

const Header = ({ bucketCount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Logo />
        <div className={styles.navLinksWrapper}>
          <Navigation items={["Home", "Menu", "Company", "Login"]} />
          <Bucket bucketCount={bucketCount} />
        </div>
      </div>
    </header>
  );
};

export default Header;
