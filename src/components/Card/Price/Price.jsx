import styles from "./Price.module.css";

const Price = ({ price }) => {
  return <span className={styles.price}>$ {price} USD</span>;
};

export default Price;
