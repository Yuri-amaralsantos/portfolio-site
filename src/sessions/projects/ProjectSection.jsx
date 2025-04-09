import React from "react";
import { Link } from "react-router-dom"; // Importa o Link
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./ProjectSection.css";
import projects from "../../data/projects.json";

const ProjectsSection = () => {
  return (
    <section>
      <h2>Projetos</h2>
      <div id="projetos">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

      {/* Botão Ver Mais */}
      <div className="ver-mais-wrapper">
        <Link to="/projects" className="ver-mais-btn">
          Ver mais projetos
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
