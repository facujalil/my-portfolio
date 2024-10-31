import style from "./ProjectCard.module.css";
import Technology from "./Technology/Technology";

function ProjectCard({ project }) {
  return (
    <div className={style.projectCard}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <div className={style.technologies}>
        {project.technologies.map((technology, index) => {
          let separator = "";
          if (index < project.technologies.length - 2) {
            separator = ", ";
          } else if (index === project.technologies.length - 2) {
            separator = " & ";
          }

          return (
            <Technology
              key={index}
              technology={technology}
              separator={separator}
            />
          );
        })}
      </div>
      <div className={style.projectLinks}>
        <a
          className={style.projectLink}
          href={project.demoLink}
          target="_blank"
          rel="noreferrer"
        >
          <i className="material-symbols-outlined">visibility</i>
          Demo
        </a>
        <a
          className={style.projectLink}
          href={project.repoLink}
          target="_blank"
          rel="noreferrer"
        >
          <i className="material-symbols-outlined">code</i>
          Repo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
