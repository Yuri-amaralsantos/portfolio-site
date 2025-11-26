import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-[500px] bg-[#0a0c0f] overflow-hidden border border-black flex items-center justify-center">
      <div
        className="absolute top-0 right-0 w-full h-full bg-cover opacity-60 bg-center pointer-events-none z-0"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="relative z-10 text-white flex flex-col justify-center md:text-left pl-2 max-w-5xl">
        <h2 className="text-5xl font-bold text-center">
          Desenvolvedor Fullstack
        </h2>
        <p className="text-xl text-center leading-snug">
          Transformando o código em soluções que elevam a experiência do
          usuário.
        </p>
        <div className="flex justify-center mt-12 flex gap-4">
          <a
            href="mailto:yuri.a.santos12@gmail.com"
            className="inline-block rounded bg-white text-[#222236] px-4 py-2 font-bold border border-white transition duration-300 hover:bg-[#222236] hover:text-white"
          >
            Entre em contato
          </a>
          <Link
            to="/projects"
            className="inline-block px-6 py-2 font-bold rounded border hover:border-white hover:bg-[#222236] hover:text-white bg-white text-[#222236] transition"
          >
            Ver mais projetos
          </Link>
          <a
            href="curriculoti.pdf"
            download
            className="block rounded px-4 py-2 bg-white border hover:border-white hover:bg-[#222236] hover:text-white text-black font-bold"
          >
            Currículo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
