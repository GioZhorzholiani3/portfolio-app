import classes from "./Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiSass } from "react-icons/si";
import { SiCsswizardry } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BsFiletypeHtml } from "react-icons/bs";
import { SiMui } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiFoodpanda } from "react-icons/si";
import { BsBricks } from "react-icons/bs";

import { SiOracle } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { SiCsharp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Tech Stack</h2>

      <div className={`container ${classes.expContainer} `}>
        <div className={classes.expFrontEnd}>
          <h3>Front-End Development</h3>
          <div className={classes.expContent}>
            <article className={classes.expDetails}>
              <FaReact className={classes.expDetailsIcon} />
              <div>
                <h4>React</h4>
                <small className={`text-light`}>Advanced</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiTypescript className={classes.expDetailsIcon} />
              <div>
                <h4>TYPESCRIPT</h4>
                <small className={`text-light`}>Intermediate</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <BsFiletypeHtml className={classes.expDetailsIcon} />
              <div>
                <h4>HTML</h4>
                <small className={`text-light`}>Advanced</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiCsswizardry className={classes.expDetailsIcon} />
              <div>
                <h4>CSS/SASS</h4>
                <small className={`text-light`}>Intermediate</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiJavascript className={classes.expDetailsIcon} />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className={`text-light`}>Advanced</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiMui className={classes.expDetailsIcon} />
              <div>
                <h4>MUI</h4>
                <small className={`text-light`}>Intermediate</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <BsFillBootstrapFill className={classes.expDetailsIcon} />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className={`text-light`}>Intermediate</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiStyledcomponents className={classes.expDetailsIcon} />
              <div>
                <h4>STYLED-COMPONENTS</h4>
                <small className={`text-light`}>Intermediate</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiTailwindcss className={classes.expDetailsIcon} />
              <div>
                <h4>TAILWIND</h4>
                <small className={`text-light`}>Intermediate</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <BsBricks className={classes.expDetailsIcon} />
              <div>
                <h4>FORMIK / YUP</h4>
                <small className={`text-light`}>Intermediate</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiFoodpanda className={classes.expDetailsIcon} />
              <div>
                <h4>ZUSTAND</h4>
                <small className={`text-light`}>Intermediate</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiRedux className={classes.expDetailsIcon} />
              <div>
                <h4>REDUX</h4>
                <small className={`text-light`}>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className={classes.expBackEnd}>
          <h3>Back-End Development</h3>
          <div className={classes.expContentBackEnd}>
            <article className={classes.expDetails}>
              <SiPython className={classes.expDetailsIcon} />
              <div>
                <h4>Python</h4>
                <small className={`text-light`}>Intermediate</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiCsharp className={classes.expDetailsIcon} />
              <div>
                <h4>C#</h4>
                <small className={`text-light`}>Novice</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiCplusplus className={classes.expDetailsIcon} />
              <div>
                <h4>C++</h4>
                <small className={`text-light`}>Beginner</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiPhp className={classes.expDetailsIcon} />
              <div>
                <h4>PHP</h4>
                <small className={`text-light`}>Beginner</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <TbBrandLaravel className={classes.expDetailsIcon} />
              <div>
                <h4>LARAVEL</h4>
                <small className={`text-light`}>Beginner</small>
              </div>
            </article>

            <article className={classes.expDetails}>
              <SiOracle className={classes.expDetailsIcon} />
              <div>
                <h4>ORACLE</h4>
                <small className={`text-light`}>Novice</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
