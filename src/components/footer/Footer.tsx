import classes from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="" className={classes.footerLogo}>
        GIORGI
      </a>
      <ul className={classes.footerLinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={classes.socials}>
        <a
          href="https://www.facebook.com/profile.php?id=100009651918102"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/gio_zhorzholiani_03/">
          <AiFillInstagram />
        </a>
      </div>

      <div className={classes.copyright}>
        <small>© Giorgi Zhorzholiani. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
