import useNavController from "./NavController";
import classes from "./Nav.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

const Nav = () => {
  const { activeNav, handleNavClick } = useNavController();

  return (
    <nav>
      <a
        href="#"
        onClick={() => handleNavClick("#")}
        className={activeNav === "#" ? classes.active : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleNavClick("#about")}
        className={activeNav === "#about" ? classes.active : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleNavClick("#experience")}
        className={activeNav === "#experience" ? classes.active : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleNavClick("#portfolio")}
        className={activeNav === "#portfolio" ? classes.active : ""}
      >
        <AiOutlineCode />
      </a>
      <a
        href="#contact"
        onClick={() => handleNavClick("#contact")}
        className={activeNav === "#contact" ? classes.active : ""}
      >
        <AiFillPhone />
      </a>
    </nav>
  );
};

export default Nav;
