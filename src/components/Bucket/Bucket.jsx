import { Link } from "react-router";
import BucketIcon from "../../assets/images/icons/bucket.svg?react";
import styles from "./Bucket.module.css";

const Bucket = ({ bucketCount }) => {
  return (
    <Link to="/order" className={styles.cartBtn}>
      <BucketIcon />
      <span className={styles.cartCount}>{bucketCount}</span>
    </Link>
  );
};

export default Bucket;
