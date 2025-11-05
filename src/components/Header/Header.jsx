import Logo from "../Logo/Logo";
import Bucket from "../Bucket/Bucket";
import { Navigation } from "./Navigation/Navigation";
import "./Header.css";

const Header = ({ bucketCount }) => {
  return (
    <header className="header">
      <div className="navbar">
        <Logo />
        <div className="nav-links-wrapper">
          <Navigation items={["Home", "Menu", "Company", "Login"]} />
          <Bucket bucketCount={bucketCount} />
        </div>
      </div>
    </header>
  );
};

export default Header;
