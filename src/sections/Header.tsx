import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="relative w-full  mt-36 mb-12 overflow-hidden flex items-center justify-center">
      <div className="relative z-10  flex flex-col gap-6 justify-center md:text-left pl-2 max-w-5xl">
        <h2 className="text-5xl font-semibold text-white text-center">
          YURI AMARAL SANTOS
        </h2>
        <p className="text-lg max-w-md mx-auto mb-8 text-center text-slate-300 leading-snug">
          Transformando o código em soluções que elevam a experiência do
          usuário.
        </p>
        <div className="flex justify-center flex gap-4">
          <button>
            <Link
              to="/projects"
              className="inline-block px-6 py-2 font-bold rounded-lg border border-sky-500 bg-sky-500  text-white transition"
            >
              Ver mais projetos
            </Link>
          </button>
          <button>
            <a
              href="curriculoti.pdf"
              download
              className="block rounded-lg px-4 py-2 border border-sky-500 text-white font-bold"
            >
              Currículo
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
