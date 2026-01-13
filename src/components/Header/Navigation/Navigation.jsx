import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

export const Navigation = ({ items }) => {
  return (
    <nav>
      <ul className={styles.navLinks}>
        {items.map(({ label, path, onClick }) => (
          <li key={label}>
            {path ? (
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={onClick}
              >
                {label}
              </NavLink>
            ) : (
              <span className={styles.navLink}>{label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
