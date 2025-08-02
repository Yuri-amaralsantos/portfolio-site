import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const pageLinks = [{ path: "/projects", label: "Projetos" }];

  const renderLinks = (isMobile = false) => (
    <>
      {pageLinks.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`block px-4 py-2 hover:text-blue-500 ${
            !isMobile ? "inline-block mr-6" : "mb-2"
          }`}
          onClick={() => isMobile && setMenuVisible(false)}
        >
          {label}
        </Link>
      ))}
      <a
        href={`${location.pathname}#footer`}
        className={`block px-4 py-2 hover:text-blue-500 ${
          !isMobile ? "inline-block mr-6" : "mb-2"
        }`}
        onClick={() => isMobile && setMenuVisible(false)}
      >
        Contato
      </a>
    </>
  );

  return (
    <header className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold">
          Yuri Amaral Santos
        </Link>

        <nav className="hidden md:flex items-center">
          {renderLinks()}
          <a
            href="curriculoti.pdf"
            download
            className="inline-block bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 font-semibold"
          >
            Currículo
          </a>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-3xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {menuVisible && (
        <div className="md:hidden bg-gray-800 text-white px-4 pb-4 space-y-2 shadow-inner">
          <Link
            to="/"
            className="block px-4 py-2 hover:text-blue-400"
            onClick={() => setMenuVisible(false)}
          >
            Home
          </Link>
          {renderLinks(true)}
          <a
            href="curriculoti.pdf"
            download
            className="block px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-200 font-semibold"
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
