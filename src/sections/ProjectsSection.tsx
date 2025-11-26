import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Project } from "../types/IProject";
import React from "react";

const ProjectsSection: React.FC = () => {
  const maxProjects: Project[] = (projects as Project[]).slice(0, 6);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

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
    <section className="py-6 px-3 md:px-6 relative text-white z-20">
      <h2 className="text-4xl font-semibold mb-10 text-center">Projetos</h2>

      <div className="relative max-w-5xl mx-auto">
        {!isMobile && page > 0 && (
          <button
            onClick={handlePrev}
            className="absolute -left-24 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow
            text-[#222236]  border border-[#222236] hover:border-white hover:bg-[#222236] hover:text-white"
            aria-label="Anterior"
          >
            <FaChevronLeft size={20} />
          </button>
        )}
        {!isMobile && page < totalPages - 1 && (
          <button
            onClick={handleNext}
            className="absolute -right-24 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow
             text-[#222236]  border border-[#222236] hover:border-white hover:bg-[#222236] hover:text-white"
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
          className="inline-block px-6 py-2 font-bold rounded border hover:border-white hover:bg-[#222236] hover:text-white bg-white text-[#222236] transition"
        >
          Ver mais projetos
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
