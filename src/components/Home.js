import React, { useContext } from "react";
import "../css/Home.css";
import { Context } from "../context/Context";
import useWindowWidth from "../hooks/useWindowWidth";
import desktopAvatar from "../assets/img/desktop-avatar.svg";
import mobileAvatar from "../assets/img/mobile-avatar.svg";
import curriculumVitaePdf from "../assets/Curriculum Vitae - Facundo Jalil.pdf";

function Home() {
  const { language } = useContext(Context);

  const { windowWidth } = useWindowWidth();

  return (
    <section id="home">
      <div className="home-content">
        <div className="home-text-container">
          <h1>
            {language === "es" ? "Soy" : "I'm"}{" "}
            <span className="name">Facundo Jalil</span>,<br />
            {language === "es" ? (
              <>
                desarrollador <span>Full Stack</span>
              </>
            ) : (
              <>
                a <span>Full Stack</span> Developer
              </>
            )}
          </h1>
          {windowWidth <= 700 && (
            <div className="home-img-container">
              <img src={mobileAvatar} alt="Avatar" />
            </div>
          )}
          <p>
            {language === "es"
              ? "Tengo 23 años y vivo en Rosario, Argentina. Mi objetivo es formar parte de un equipo de trabajo en donde pueda consolidarme profesionalmente y contribuir en los logros organizacionales."
              : "I'm 23 years old and I live in Rosario, Argentina. My goal is to be part of a work team where I can consolidate myself professionally and contribute to organizational achievements."}
          </p>
          <a
            href={curriculumVitaePdf}
            download="Curriculum Vitae - Facundo Jalil"
          >
            <i className="material-symbols-outlined">download</i>
            {language === "es" ? "Descargar" : "Download"} CV
          </a>
        </div>
        {windowWidth > 700 && (
          <div className="home-img-container">
            <img src={desktopAvatar} alt="Avatar" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
