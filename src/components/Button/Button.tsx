import type React from "react";
import styles from "./Button.module.css";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  title: React.ReactNode;
  outlined?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, onClick, outlined, ...rest }: ButtonProps) => {
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
