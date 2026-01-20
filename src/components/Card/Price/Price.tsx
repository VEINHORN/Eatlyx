import styles from "./Price.module.css";

type PriceProps = {
  price: string;
};

const Price = ({ price }: PriceProps) => {
  return <span className={styles.price}>$ {price} USD</span>;
};

export default Price;
