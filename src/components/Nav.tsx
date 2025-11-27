import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

interface PageLink {
  path: string;
  label: string;
}

const Nav: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const { pathname } = useLocation(); // 👈 ROTA ATUAL

  const pageLinks: PageLink[] = [
    { path: "/", label: "Inicio" },
    { path: "/about", label: "Sobre" },
    { path: "/projects", label: "Projetos" },
    { path: "/games", label: "Jogos" },
  ];

  return (
    <header className="top-0 left-0 w-full z-50">
      <div className="bg-gray-900">
        <div className="w-full mx-auto flex justify-between items-center px-4 py-3">
          <button
            onClick={toggleMenu}
            className="block md:hidden text-3xl text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      <nav className="bg-[#141414] w-full mt-2 mb-12 px-6">
        <div className="w-full hidden md:flex items-center gap-3">
          <div className="w-full flex gap-2">
            {pageLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`
                  flex-1 text-center px-4 py-3 font-semibold transition hover:bg-gray-300
                  ${
                    pathname === path
                      ? "text-sky-400 border-b-2 border-sky-400"
                      : "text-white border-b-2 border-transparent"
                  }
                `}
              >
                {label}
              </Link>
            ))}
          </div>

          <a
            href="curriculoti.pdf"
            download
            className="flex-1 text-center px-10 py-3 font-semibold text-white rounded-lg border border-sky-500 bg-sky-500 transition"
          >
            Currículo
          </a>
        </div>

        {menuVisible && (
          <div className="md:hidden bg-gray-900 text-white px-4 pb-4 space-y-2 shadow-inner">
            {pageLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="block px-4 py-2 font-semibold hover:bg-white hover:text-black rounded-md transition"
                onClick={() => setMenuVisible(false)}
              >
                {label}
              </Link>
            ))}

            <a
              href="curriculoti.pdf"
              download
              className="block rounded px-4 py-2 bg-white text-black font-semibold"
              onClick={() => setMenuVisible(false)}
            >
              Currículo
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
