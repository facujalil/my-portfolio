import React, { useContext } from "react";
import "../css/Footer.css";
import { Context } from "../context/Context";

function Footer() {
  const { language } = useContext(Context);

  return (
    <footer>
      <p>
        &copy; {language === "es" ? "Codificado por" : "Coded by"}{" "}
        <a href="https://github.com/facujalil" target="_blank" rel="noreferrer">
          Facundo Jalil
          <i className="fab fa-github-square" aria-hidden="true"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
