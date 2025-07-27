import { Link } from "react-router-dom"; // Importa o Link
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

const ProjectsSection = () => {
  return (
    <section>
      <h2>Projetos</h2>
      <div id="projetos">
        {projects.slice(0, 6).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            demo={project.demo}
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
