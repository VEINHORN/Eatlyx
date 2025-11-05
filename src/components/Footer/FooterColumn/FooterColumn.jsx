import "./FooterColumn.css";

export const FooterColumn = ({ columnName, items, clickable }) => {
  return (
    <div className="footer-column">
      <h5>{columnName}</h5>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {clickable ? <a href="https://www.google.com/">{item}</a> : item}
          </li>
        ))}
      </ul>
    </div>
  );
};
