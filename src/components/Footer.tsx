import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative text-white mt-12">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center pointer-events-none z-0"
        style={{ backgroundImage: "url('/background1.jpg')" }}
      />

      <div className="container mx-auto px-12 py-10 flex flex-col items-center gap-6 relative z-10">
        <a href="#" className="text-3xl font-bold hover:text-blue-300">
          Yuri A. Santos
        </a>
        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end space-x-6 text-gray-300">
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
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4 text-gray-300 text-sm relative z-10">
        &copy; 2025 Yuri Amaral Santos. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
