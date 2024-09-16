import React, { useContext } from "react";
import "../css/Projects.css";
import { Context } from "../context/Context";
import twitterXCloneProject from "../assets/img/twitter-x-clone-project.jpg";
import foodverseProject from "../assets/img/foodverse-project.jpg";
import weatherAppProject from "../assets/img/weather-app-project.jpg";
import movieSearchProject from "../assets/img/movie-search-project.jpg";
import toDoListProject from "../assets/img/to-do-list-project.jpg";
import puertoFunesPropiedadesProject from "../assets/img/puerto-funes-propiedades-project.jpg";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { language } = useContext(Context);

  const projectList = [
    {
      image: twitterXCloneProject,
      name: "Twitter X Clone",
      technologies:
        "React, TypeScript, Tailwind CSS, Node.js, Express.js & PostgreSQL",
      demoLink: "https://twitter-x-clone-fj.vercel.app",
      repoLink: "https://github.com/facujalil/twitter-x-clone",
    },
    {
      image: foodverseProject,
      name: "Foodverse",
      technologies: "Next.js, TypeScript, Redux, CSS & The Meal DB API",
      demoLink: "https://foodverse-fj.vercel.app",
      repoLink: "https://github.com/facujalil/foodverse",
    },
    {
      image: weatherAppProject,
      name: "Weather App",
      technologies: "Next.js, TypeScript, CSS & Open Weather Map API",
      demoLink: "https://weather-app-fj.vercel.app",
      repoLink: "https://github.com/facujalil/weather-app",
    },
    {
      image: movieSearchProject,
      name: "Movie Search",
      technologies: "React, CSS & The Movie DB API",
      demoLink: "https://movie-search-fj.vercel.app",
      repoLink: "https://github.com/facujalil/movie-search",
    },
    {
      image: toDoListProject,
      name: "To Do List",
      technologies: "React & CSS",
      demoLink: "https://to-do-list-fj.vercel.app",
      repoLink: "https://github.com/facujalil/to-do-list",
    },
    {
      image: puertoFunesPropiedadesProject,
      name: "Puerto Funes Propiedades",
      technologies: "HTML, CSS & JavaScript",
      demoLink: "https://puerto-funes-propiedades.vercel.app",
      repoLink: "https://github.com/facujalil/puerto-funes-propiedades",
    },
  ];

  return (
    <section id="projects">
      <h4>{language === "es" ? "Proyectos" : "Projects"}</h4>
      <div className="project-list">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            technologies={project.technologies}
            demoLink={project.demoLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
