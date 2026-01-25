import type React from "react";
import styles from "./Button.module.css";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  title: React.ReactNode;
  outlined?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  title,
  onClick,
  outlined,
  className,
  ...rest
}: ButtonProps) => {
  const buttonClasses = clsx(
    styles.btn,
    outlined && styles.btnOutlined,
    !outlined && styles.btnRegular,
    className,
  );

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {title}
    </button>
  );
};

export default Button;
