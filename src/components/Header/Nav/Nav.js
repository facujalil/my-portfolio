import { useContext } from "react";
import style from "./Nav.module.css";
import { Context } from "context/Context";
import useWindowWidth from "hooks/useWindowWidth";

function Nav({ openMobileMenu, setOpenMobileMenu }) {
  const { language } = useContext(Context);

  const { windowWidth } = useWindowWidth();

  const handleClick = () => {
    if (openMobileMenu) {
      setOpenMobileMenu(false);
    }
  };

  return (
    <nav
      className={style.nav}
      style={{
        display: windowWidth <= 700 && !openMobileMenu ? "none" : "flex",
      }}
    >
      <ul>
        <li>
          <a href="#about-me" onClick={handleClick}>
            {language === "es" ? "Sobre Mí" : "About Me"}
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleClick}>
            {language === "es" ? "Habilidades" : "Skills"}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleClick}>
            {language === "es" ? "Proyectos" : "Projects"}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleClick}>
            {language === "es" ? "Contacto" : "Contact"}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
