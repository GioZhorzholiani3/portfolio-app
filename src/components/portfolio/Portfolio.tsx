import classes from "./Portfolio.module.css";
import projectData from "./ProjectData";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className={`container ${classes.portfolioContainer}`}>
        {projectData.map((project) => (
          <article className={classes.portfolioItem} key={project.id}>
            <div className={classes.portfolioItemImg}>
              <img src={project.imgSrc} alt="" />
            </div>
            <h3>{project.title}</h3>
            <div className={classes.CTA}>
              <a href={project.githubLink} className="btn" target="_blank">
                Github
              </a>
              <a
                href={project.liveDemoLink}
                className="btn btn-primary"
                target="_blank"
              >
                Live
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
