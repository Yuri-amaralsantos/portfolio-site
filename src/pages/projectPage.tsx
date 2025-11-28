import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import type { Project } from "../types/IProject";
import React from "react";

const Project: React.FC = () => {
  return (
    <main className="pt-4 px-1 md:px-24">
      <div className="grid px-14 gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {(projects as Project[]).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
};

export default Project;
