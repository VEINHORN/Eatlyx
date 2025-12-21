import styles from "./Title.module.css";

const Title = ({ meal }) => {
  return <h3 className={styles.cardTitle}>{meal}</h3>;
};

export default Title;
