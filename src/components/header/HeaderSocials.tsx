import classes from "./Header.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const LinkedIn = "https://www.linkedin.com/in/giorgi-zhorzholiani-a9017b219/";
const GitHub = "https://github.com/GioZhorzholiani3";
const UpWork = "https://www.upwork.com/freelancers/~0138478bb5e64f0f1e";

const HeaderSocials = () => {
  return (
    <div className={`${classes.headerSocials}`}>
      <a href={LinkedIn} target="_blank">
        <BsLinkedin />
      </a>
      <a href={GitHub} target="_blank">
        <FaGithub />
      </a>
      <a href={UpWork} target="_blank">
        <SiUpwork />
      </a>
    </div>
  );
};

export default HeaderSocials;
