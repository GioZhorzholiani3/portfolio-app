import classes from "./Header.module.css";
import CTA from "./CTA";
import Me from "../../assets/avatar4.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className={`${classes.headerContainer} container `}>
        <h5>Hello I`m</h5>
        <h1>Giorgi Zhorzholiani</h1>
        <h5 className={`text-light`}>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={`${classes.me}`}>
          <img src={Me} alt="Giorgi Zhorzholiani" />
        </div>
        <a href="#contact" className={`${classes.scrollDown}`}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
