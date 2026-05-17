// import { socialLinks } from "../data.js";
import PageLinks from "./PageLinks.js";
import SocialLink from "./SocialLink.js";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}

      <SocialLink parentClass="footer-icons" itemClass="footer-icon" />

      {/* <ul className="footer-icons">
        {socialLinks.map((social) => {
          const { id, href, icon } = social;
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul> */}
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
