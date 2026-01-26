import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type InputProps = {
  value: number;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ value, onChange, ...rest }: InputProps) => {
  return (
    <input
      type="number"
      min={1}
      value={value}
      onChange={onChange}
      className={styles.input}
      {...rest}
    />
  );
};

export default Input;
