import BucketIcon from "../../assets/images/icons/bucket.svg?react";
import styles from "./Bucket.module.css";

const Bucket = ({ bucketCount }) => {
  return (
    <button className={styles.cartBtn}>
      <BucketIcon />
      <span className={styles.cartCount}>{bucketCount}</span>
    </button>
  );
};

export default Bucket;
