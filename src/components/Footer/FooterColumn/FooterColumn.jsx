import "./FooterColumn.css";

export const FooterColumn = ({ columnName, items }) => {
  return (
    <div>
      <h5>{columnName}</h5>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
