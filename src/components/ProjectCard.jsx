import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({ title, description, image, github, demo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (demo) {
      setIsModalOpen(true);
    } else if (github) {
      window.open(github, "_blank");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="cursor-pointer bg-white rounded-lg shadow-lg
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
            className="bg-white rounded-lg p-6 w-80 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4">Links do Projeto</h3>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-3 px-4 py-2 border border-black rounded hover:bg-gray-100 transition"
              >
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 px-4 py-2 border border-black rounded hover:bg-gray-100 transition"
              >
                Ver Demo
              </a>
            )}
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Fechar
            </button>
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
