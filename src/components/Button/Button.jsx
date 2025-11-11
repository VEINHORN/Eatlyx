import styles from "./Button.module.css";

const Button = ({ title, onClick, outlined }) => {
  return (
    <button
      className={`${styles.btn} ${
        outlined ? styles.btnOutlined : styles.btnRegular
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
