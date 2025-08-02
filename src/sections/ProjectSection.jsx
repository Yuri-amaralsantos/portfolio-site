import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectsSection = () => {
  const [page, setPage] = useState(0);
  const projectsPerPage = 3;
  const maxProjects = projects.slice(0, 6);
  const totalPages = Math.ceil(maxProjects.length / projectsPerPage);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setPage((prev) => Math.min(prev + 1, totalPages - 1));

  const currentProjects = maxProjects.slice(
    page * projectsPerPage,
    (page + 1) * projectsPerPage
  );

  return (
    <section className="p-4 mx-4 relative">
      <h2 className="text-2xl font-bold mb-4 text-center">Projetos</h2>

      {/* Carrossel com largura reduzida */}
      <div className="relative max-w-5xl mx-auto">
        {/* Setas laterais afastadas dos cards */}
        {page > 0 && (
          <button
            onClick={handlePrev}
            className="absolute -left-24 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
            aria-label="Anterior"
          >
            <FaChevronLeft size={20} />
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            onClick={handleNext}
            className="absolute -right-24 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
            aria-label="Próximo"
          >
            <FaChevronRight size={20} />
          </button>
        )}

        {/* Cards centralizados */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {currentProjects.map((project, index) => (
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
      </div>

      {/* Botão Ver Mais */}
      <div className="mt-6 text-center">
        <Link
          to="/projects"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Ver mais projetos
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
