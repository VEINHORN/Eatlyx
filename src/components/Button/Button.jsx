import styles from "./Button.module.css";

const Button = ({ title, onClick, outlined, ...rest }) => {
  return (
    <button
      className={`${styles.btn} ${
        outlined ? styles.btnOutlined : styles.btnRegular
      }`}
      onClick={onClick}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
