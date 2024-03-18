import React from "react";
import "../css/ProjectCard.css";

function ProjectCard({ image, name, technologies, demoLink, repoLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={name} />
      <h6>{name}</h6>
      <p>{technologies}</p>
      <div className="project-links-container">
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <i className="material-symbols-outlined">visibility</i>
          Demo
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <i className="material-symbols-outlined">code</i>
          Repo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
