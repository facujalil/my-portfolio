import { useContext } from "react";
import style from "./Projects.module.css";
import { Context } from "../../../context/Context";
import twitterXCloneProject from "../../../assets/img/twitter-x-clone-project.jpg";
import foodverseProject from "../../../assets/img/foodverse-project.jpg";
import weatherAppProject from "../../../assets/img/weather-app-project.jpg";
import movieSearchProject from "../../../assets/img/movie-search-project.jpg";
import quizGameProject from "../../../assets/img/quiz-game-project.jpg";
import puertoFunesPropiedadesProject from "../../../assets/img/puerto-funes-propiedades-project.jpg";
import Section from "../common/Section/Section";
import ProjectCard from "./ProjectCard/ProjectCard";

function Projects() {
  const { language } = useContext(Context);

  const projectList = [
    {
      image: twitterXCloneProject,
      title: "Twitter X Clone",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Multer",
        "PostgreSQL",
        "Cloudinary",
        "bcrypt",
        "JWT",
      ],
      demoLink: "https://twitter-x-clone-fj.vercel.app",
      repoLink: "https://github.com/facujalil/twitter-x-clone",
    },
    {
      image: foodverseProject,
      title: "Foodverse",
      technologies: ["Next.js", "TypeScript", "CSS Modules", "Forkify API"],
      demoLink: "https://foodverse-fj.vercel.app",
      repoLink: "https://github.com/facujalil/foodverse",
    },
    {
      image: weatherAppProject,
      title: "Weather App",
      technologies: [
        "Next.js",
        "TypeScript",
        "CSS Modules",
        "Open Weather Map API",
      ],
      demoLink: "https://weather-app-fj.vercel.app",
      repoLink: "https://github.com/facujalil/weather-app",
    },
    {
      image: movieSearchProject,
      title: "Movie Search",
      technologies: ["React", "CSS Modules", "The Movie DB API"],
      demoLink: "https://movie-search-fj.vercel.app",
      repoLink: "https://github.com/facujalil/movie-search",
    },
    {
      image: quizGameProject,
      title: "Quiz Game",
      technologies: ["React", "CSS"],
      demoLink: "https://quiz-game-fj.vercel.app",
      repoLink: "https://github.com/facujalil/quiz-game",
    },
    {
      image: puertoFunesPropiedadesProject,
      title: "Puerto Funes Propiedades",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://puerto-funes-propiedades.vercel.app",
      repoLink: "https://github.com/facujalil/puerto-funes-propiedades",
    },
  ];

  return (
    <Section
      title={language === "es" ? "Proyectos" : "Projects"}
      id="projects"
      className={style.projects}
    >
      <div className={style.projectList}>
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
