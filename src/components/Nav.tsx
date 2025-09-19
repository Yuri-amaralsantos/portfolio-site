import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

interface PageLink {
  path: string;
  label: string;
}

const Nav: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const pageLinks: PageLink[] = [
    { path: "/", label: "Inicio" },
    { path: "/projects", label: "Projetos" },
  ];

  const renderLinks = (isMobile = false) => (
    <>
      {pageLinks.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`block px-4 py-2 font-semibold hover:underline ${
            !isMobile ? "inline-block mr-6" : "mb-2"
          }`}
          onClick={() => isMobile && setMenuVisible(false)}
        >
          {label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="bg-[#222236] text-white shadow-md fixed w-full z-50">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold hover:underline">
          Yuri A. Santos
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center">
          {renderLinks()}
          <a
            href="#footer"
            className="inline-block px-4 py-2 font-semibold hover:underline mr-6"
          >
            Contato
          </a>
          <a
            href="curriculoti.pdf"
            download
            className="inline-block rounded bg-white text-black px-4 py-2 border border-white hover:bg-black hover:text-white font-semibold"
          >
            Currículo
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none text-3xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {menuVisible && (
        <div className="md:hidden bg-black text-white px-4 pb-4 space-y-2 shadow-inner max-h-screen overflow-y-auto">
          {renderLinks(true)}
          <a
            href="#footer"
            className="block px-4 py-2 hover:text-blue-400"
            onClick={() => setMenuVisible(false)}
          >
            Contato
          </a>
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
    </header>
  );
};

export default Nav;
