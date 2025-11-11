import styles from "./Navigation.module.css";

export const Navigation = ({ items }) => {
  return (
    <nav>
      <ul className={styles.navLinks}>
        {items.map((item) => (
          <li key={item} className={item == "Menu" ? styles.active : ""}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
