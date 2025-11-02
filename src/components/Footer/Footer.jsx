import InstagramIcon from "../../assets/images/icons/instagram.svg?react";
import TwitterIcon from "../../assets/images/icons/twitter.svg?react";
import YoutubeIcon from "../../assets/images/icons/youtube.svg?react";
import Logo from "../Logo/Logo";
import { FooterColumn } from "./FooterColumn/FooterColumn";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-intro">
          <Logo />
          <h4>Takeaway & Delivery</h4>
          <p>for small - medium businesses.</p>
        </div>

        <div className="footer-columns">
          <FooterColumn
            columnName="Company"
            items={["Home", "Order", "FAQ", "Contact"]}
          />
          <FooterColumn
            columnName="Template"
            items={[
              "Style Guide",
              "Changelog",
              "Licence",
              "Webflow University",
            ]}
          />
          <FooterColumn columnName="Flowbase" items={["More Cloneables"]} />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <InstagramIcon className="social-link" alt="Instagram" />
          <TwitterIcon className="social-link" alt="Twitter" />
          <YoutubeIcon className="social-link" alt="YouTube" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
