import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../assets/escudo.svg";

function NavBar() {
  const btnLink = "mr-5 inline-block hover:text-white cursor-pointer";
  const activeLink = "block inline-block py-1 text-white mr-5";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className=" text-gray-400 body-font flex-shrink-0">
        <div
          className={`fixed w-full top-0 transition-all duration-300 flex px-4 z-50 items-center justify-between ${
            scrolled ? "bg-black/90 py-2" : "bg-black/70 py-4"
          }`}
        >
          <a className="flex title-font font-medium items-center cursor-pointer text-white">
            <img src={logo} alt="Logo" className="h-8 w-auto" />

            <span className="ml-3 text-3xl font-semibold">Velez Sarsfield</span>
          </a>

          {/* Botón hamburguesa (solo en móviles) */}
          <button
            className="md:hidden md:ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div
            className={` md:ml-auto flex flex-wrap items-center text-base justify-center md:flex md:items-center ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <nav className="">
              <NavLink
                className={({ isActive }) => (isActive ? activeLink : btnLink)}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? activeLink : btnLink)}
                to="/estadisticas"
              >
                Estadisticas
              </NavLink>
            </nav>
          </div>

          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
    </>
  );
}

export default NavBar;
