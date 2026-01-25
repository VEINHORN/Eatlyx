import styles from "./Title.module.css";

type TitleProps = {
  meal: string;
};

const Title = ({ meal }: TitleProps) => {
  return <h3 className={styles.cardTitle}>{meal}</h3>;
};

export default Title;
