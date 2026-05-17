import { socialLinks } from "../data.js";

const SocialLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              className={itemClass}
              rel="noreferrer noopener"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLink;

{
  /* <ul className="footer-icons">
  {" "}
  //1
  {socialLinks.map((social) => {
    const { id, href, icon } = social;
    return (
      <li key={id}>
        <a href={href} target="_blank" className="footer-icon">
          {" "}
          //2
          <i className={icon}></i>
        </a>
      </li>
    );
  })}
</ul>; */
}
