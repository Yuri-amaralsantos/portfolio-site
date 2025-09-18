import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectsSection = () => {
  const maxProjects = projects.slice(0, 6);
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(0);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(maxProjects.length / projectsPerPage);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setPage((prev) => Math.min(prev + 1, totalPages - 1));

  const displayedProjects = isMobile
    ? maxProjects
    : maxProjects.slice(page * projectsPerPage, (page + 1) * projectsPerPage);

  return (
    <section className="py-6 px-3 md:px-6 relative text-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">Projetos</h2>

      <div className="relative max-w-5xl mx-auto">
        {!isMobile && page > 0 && (
          <button
            onClick={handlePrev}
            className="absolute -left-24 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full shadow hover:bg-white hover:text-black"
            aria-label="Anterior"
          >
            <FaChevronLeft size={20} />
          </button>
        )}
        {!isMobile && page < totalPages - 1 && (
          <button
            onClick={handleNext}
            className="absolute -right-24 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full shadow hover:bg-white hover:text-black"
            aria-label="Próximo"
          >
            <FaChevronRight size={20} />
          </button>
        )}

        <div className="grid px-12 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {displayedProjects.map((project, index) => (
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

      <div className="mt-6 text-center">
        <Link
          to="/projects"
          className="inline-block px-6 py-2 font-bold rounded border hover:border-white hover:bg-black hover:text-white bg-white text-black transition"
        >
          Ver mais projetos
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
