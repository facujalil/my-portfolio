import React, { useContext } from "react";
import "../css/Nav.css";
import { Context } from "../context/Context";
import useWindowWidth from "../hooks/useWindowWidth";

function Nav({ openMobileMenu, setOpenMobileMenu }) {
  const { language } = useContext(Context);

  const { windowWidth } = useWindowWidth();

  return (
    <nav
      style={
        windowWidth <= 700 && !openMobileMenu
          ? { display: "none" }
          : { display: "flex" }
      }
    >
      <ul>
        <li>
          <a
            href="#about-me"
            onClick={() => (openMobileMenu ? setOpenMobileMenu(false) : null)}
          >
            {language === "es" ? "Sobre Mí" : "About Me"}
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={() => (openMobileMenu ? setOpenMobileMenu(false) : null)}
          >
            {language === "es" ? "Habilidades" : "Skills"}
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => (openMobileMenu ? setOpenMobileMenu(false) : null)}
          >
            {language === "es" ? "Proyectos" : "Projects"}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => (openMobileMenu ? setOpenMobileMenu(false) : null)}
          >
            {language === "es" ? "Contacto" : "Contact"}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
