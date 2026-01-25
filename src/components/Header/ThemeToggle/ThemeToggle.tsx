import { useTheme } from "../../../hooks/useTheme";
import Button from "../../Button/Button";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      title={theme === "light" ? "🌙" : "☀️"}
      onClick={toggleTheme}
      outlined
      className={styles.themeToggle}
    />
  );
};
