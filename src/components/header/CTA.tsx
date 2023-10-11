import Resume from "../../assets/Resume/GiorgiZhorzholianiCV.pdf";
import classes from "./Header.module.css";
const CTA = () => {
  return (
    <div className={classes.cta}>
      <a href={Resume} download className={`btn`}>
        Download CV
      </a>
      <a href="#contact" className={`btn btn-primary`}>
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
