import BucketIcon from "../../assets/images/icons/bucket.svg?react";
import "./Bucket.css";

const Bucket = ({ bucketCount }) => {
  return (
    <button className="cart-btn">
      <BucketIcon />
      <span className="cart-count">{bucketCount}</span>
    </button>
  );
};

export default Bucket;
