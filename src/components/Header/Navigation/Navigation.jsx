import "./Navigation.css";

export const Navigation = ({ items }) => {
  return (
    <nav>
      <ul className="nav-links">
        {items.map((item) => (
          <li key={item} className={item == "Menu" ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
