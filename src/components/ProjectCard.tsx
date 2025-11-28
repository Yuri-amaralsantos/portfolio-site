import { useState } from "react";
import { Project } from "../types/IProject";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  github,
  demo,
  tags,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer py-3 px-3 bg-slate-800 border border-sky-500 rounded-xl w-full max-w-md mx-auto 
  grid grid-rows-[auto_1fr_auto] grid-cols-1 h-80 gap-3 hover:scale-105 transition-transform duration-300"
      >
        <h3 className="font-bold text-left text-white">{title}</h3>

        <div className="flex items-center justify-center">
          {image && (
            <img
              src={image}
              alt={`${title} image`}
              className="max-h-40 object-contain"
            />
          )}
        </div>

        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-1 justify-center items-center">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-semibold p-1 bg-sky-700 rounded text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-right text-white">Sem marcadores</p>
        )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#222236] border border-gray-500 rounded p-6 w-80 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-0 right-3 text-3xl text-white hover:text-gray-400"
              aria-label="Fechar modal"
            >
              &times;
            </button>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white">Descrição</h3>
              <p className="text-white text-justify min-h-[100px]">
                {description}
              </p>

              <h3 className="text-lg font-semibold text-white">
                Links do Projeto
              </h3>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-white rounded border border-white text-[#222236] hover:bg-[#222236] hover:text-white"
                >
                  GitHub
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-white rounded border border-white text-[#222236] hover:bg-[#222236] hover:text-white"
                >
                  Ver Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
