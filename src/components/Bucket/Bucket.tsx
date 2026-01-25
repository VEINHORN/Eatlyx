import { Link } from "react-router";
import BucketIcon from "../../assets/images/icons/bucket.svg?react";
import styles from "./Bucket.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../types/rootStateType";

const Bucket = () => {
  const totalItems = useSelector((state: RootState) =>
    Object.values(state.cart.itemsById).reduce(
      (sum: number, count: number) => sum + count,
      0,
    ),
  );

  return (
    <Link to="/order" className={styles.cartBtn}>
      <BucketIcon />
      <span className={styles.cartCount}>{totalItems}</span>
    </Link>
  );
};

export default Bucket;
