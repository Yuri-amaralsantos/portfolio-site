import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({ title, description, image, github, demo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="cursor-pointer bg-white rounded shadow-lg
                   p-4 w-full max-w-sm mx-auto
                   flex flex-col items-center text-center
                   transition-transform duration-300
                   hover:scale-105"
      >
        {image && (
          <img
            src={image}
            alt={`${title} image`}
            className="w-full h-40 object-cover rounded border border-black mb-4"
          />
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-justify min-h-[100px]">
          {description}
        </p>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-[#34d399] rounded p-6 w-80 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-0 right-3 text-3xl text-black hover:text-white"
              aria-label="Fechar modal"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-4 text-black">
              Links do Projeto
            </h3>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-3 px-4 py-2 bg-white rounded border border-white hover:bg-black hover:text-white"
              >
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 px-4 py-2 bg-white rounded border border-white hover:bg-black hover:text-white"
              >
                Ver Demo
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string,
};

export default ProjectCard;
