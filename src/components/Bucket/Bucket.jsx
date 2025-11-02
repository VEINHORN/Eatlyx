import BucketIcon from "../../assets/images/icons/bucket.svg?react";
import "./Bucket.css";

const Bucket = () => {
  return (
    <button className="cart-btn">
      <BucketIcon />
      <span className="cart-count">0</span>
    </button>
  );
};

export default Bucket;
