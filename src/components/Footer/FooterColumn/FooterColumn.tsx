import styles from "./FooterColumn.module.css";

type FooterColumnProps = {
  columnName: string;
  items: string[];
  clickable?: boolean;
};

export const FooterColumn = ({
  columnName,
  items,
  clickable,
}: FooterColumnProps) => {
  return (
    <div className={styles.footerColumn}>
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
