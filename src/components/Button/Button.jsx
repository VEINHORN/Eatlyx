import "./Button.css";

const Button = ({ title, onClick, outlined }) => {
  return (
    <button
      className={outlined ? "btn btn-outlined" : "btn btn-regular"}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
