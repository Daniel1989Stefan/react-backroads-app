import { pageLinks } from "../data.js";
import PageLink from "./PageLink.js";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <PageLink key={link.id} link={link} itemClass={itemClass} />
          // <li key={link.id}>
          //   <a href={link.href} className={itemClass}>
          //     {link.text}
          //   </a>
          // </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
