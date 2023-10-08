import classes from "./About.module.css";
import Me from "../../assets/avatar2.jpg";
import { FaAward } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={`container ${classes.aboutContainer}`}>
        <div className={classes.aboutMe}>
          <div className={classes.aboutMeImg}>
            <img src={Me} alt="about image" />
          </div>
        </div>
        <div className={classes.aboutContent}>
          <div className={classes.aboutCards}>
            <article className={classes.aboutCard}>
              <FaAward />
              <h5>Experience</h5>
              <small>2 Years self Learning</small>
            </article>

            <article className={classes.aboutCard}>
              <FaUniversity />
              <h5>Education</h5>
              <small>Bachelor Degree (IT)</small>
            </article>

            <article className={classes.aboutCard}>
              <FaFolderOpen />
              <h5>Projects</h5>
              <small>18+ Personal Project</small>
            </article>
          </div>
          <p>
            I am a self-taught web developer with a passion for learning and
            creating. I have been coding for 2 years now and have been working
            on many projects. I am a quick learner and I am always looking to
            improve my skills and knowledge. Also i have bachelor degree in
            Information Technology. I am a hard worker and I am always looking
            for opportunities to learn and grow. I am currently looking for a
            position as a web developer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let`s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
