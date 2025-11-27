import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative mb-6 text-white mt-12">
      <hr className="mb-4 border-sky-500" />
      <div
        className="
        flex flex-col items-center text-center
        md:flex-row md:px-16 md:justify-between md:items-center md:text-left
      "
      >
        <div className="flex justify-center space-x-6 text-gray-300 mb-4 md:mb-0 md:order-2">
          <a
            href="mailto:yuri.a.santos12@gmail.com"
            className="hover:text-blue-300"
          >
            <IoMdMail size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/yuri-amaral-santos-17264a25b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Yuri-amaralsantos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://wa.me/21986026955"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>

        <p className="md:order-1">
          &copy; 2025 Yuri Amaral Santos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
