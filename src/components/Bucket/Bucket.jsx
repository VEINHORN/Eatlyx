import { Link } from "react-router";
import BucketIcon from "../../assets/images/icons/bucket.svg?react";
import styles from "./Bucket.module.css";
import { useSelector } from "react-redux";

const Bucket = () => {
  const totalItems = useSelector((state) =>
    Object.values(state.cart.itemsById).reduce((sum, count) => sum + count, 0)
  );

  return (
    <Link to="/order" className={styles.cartBtn}>
      <BucketIcon />
      <span className={styles.cartCount}>{totalItems}</span>
    </Link>
  );
};

export default Bucket;
