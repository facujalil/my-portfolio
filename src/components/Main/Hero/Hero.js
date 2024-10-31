import { useContext } from "react";
import style from "./Hero.module.css";
import { Context } from "context/Context";
import useWindowWidth from "hooks/useWindowWidth";
import Section from "../common/Section/Section";
import desktopAvatar from "assets/img/desktop-avatar.svg";
import mobileAvatar from "assets/img/mobile-avatar.svg";
import curriculumVitaePdf from "assets/Curriculum Vitae - Facundo Jalil.pdf";

function Hero() {
  const { language } = useContext(Context);

  const { windowWidth } = useWindowWidth();

  return (
    <Section id="hero" className={style.hero}>
      <div className={style.heroContent}>
        <div className={style.heroInfoContainer}>
          <h1>
            {language === "es" ? "Soy" : "I am"}{" "}
            <span className={style.name}>Facundo Jalil</span>,<br />
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
            <div className={style.heroImgContainer}>
              <img src={mobileAvatar} alt="Avatar" />
            </div>
          )}
          <p>
            {language === "es"
              ? "Tengo 23 años y vivo en Rosario, Argentina. Mi objetivo es formar parte de un equipo de trabajo en el que pueda consolidarme profesionalmente y contribuir a los logros organizacionales."
              : "I am 23 years old and I live in Rosario, Argentina. My goal is to be part of a work team in which I can consolidate myself professionally and contribute to organizational achievements."}
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
          <div className={style.heroImgContainer}>
            <img src={desktopAvatar} alt="Avatar" />
          </div>
        )}
      </div>
    </Section>
  );
}

export default Hero;
