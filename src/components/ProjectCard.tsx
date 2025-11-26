import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  github: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  github,
  demo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer bg-black border border-gray-500 rounded-lg w-full max-w-sm mx-auto flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
      >
        {image && (
          <img
            src={image}
            alt={`${title} image`}
            className="w-full h-40 object-contain rounded-t-lg mb-4"
          />
        )}
        <div className="p-2">
          <hr className="mb-4 border-gray-500" />
          <h3 className="text-lg text-white mb-2">{title}</h3>
        </div>
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
              className="absolute top-0 right-3 text-3xl hover:text-gray-400"
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
