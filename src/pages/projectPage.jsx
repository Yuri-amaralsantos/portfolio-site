import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

const Project = () => {
  return (
    <main className="pt-4 px-1 md:px-24">
      <div
        className="grid gap-8
                      grid-cols-1
                      sm:grid-cols-2
                      lg:grid-cols-3
                      justify-center"
      >
        {projects.map((project, index) => (
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
    </main>
  );
};

export default Project;
