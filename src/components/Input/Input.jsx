import styles from "./Input.module.css";

const Input = ({ value, onChange, ...rest }) => {
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

