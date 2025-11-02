import LogoImage from "../../assets/images/logos/logo.svg?react";
import "./Logo.css";

const Logo = () => {
  return (
    <a href="#" className="logo">
      <LogoImage alt="Logo" className="logo-img" />
    </a>
  );
};

export default Logo;
