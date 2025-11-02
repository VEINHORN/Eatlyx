import "./Navigation.css";

export const Navigation = ({ items }) => {
  return (
    <nav>
      <ul className="nav-links">
        {items.map((item) => (
          <li key={item} className={item == "Home" ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
