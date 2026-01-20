import InstagramIcon from "../../assets/images/icons/instagram.svg?react";
import TwitterIcon from "../../assets/images/icons/twitter.svg?react";
import YoutubeIcon from "../../assets/images/icons/youtube.svg?react";
import Logo from "../Logo/Logo";
import { FooterColumn } from "./FooterColumn/FooterColumn";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerIntro}>
          <Logo />
          <h4>Takeaway & Delivery</h4>
          <p>for small - medium businesses.</p>
        </div>

        <div className={styles.footerColumns}>
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
            clickable
          />
          <FooterColumn columnName="Flowbase" items={["More Cloneables"]} />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.socialLinks}>
          <InstagramIcon className={styles.socialLink} aria-label="Instagram" />
          <TwitterIcon className={styles.socialLink} aria-label="Twitter" />
          <YoutubeIcon className={styles.socialLink} aria-label="YouTube" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
