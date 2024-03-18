import React, { useContext } from "react";
import "../css/AboutMe.css";
import { Context } from "../context/Context";

function AboutMe() {
  const { language } = useContext(Context);

  return (
    <section id="about-me">
      <h4>{language === "es" ? "Sobre Mí" : "About Me"}</h4>
      <p>
        {language === "es"
          ? "Desde pequeño me apasiona el mundo de la tecnología y el diseño digital. En 2022, me recibí como Técnico Superior en Programación."
          : "Since I was little I've been passionate about the world of technology and digital design. In 2022, I graduated as a Higher Technician in Programming."}
        <br />
        <br />
        {language === "es"
          ? "Siempre mantengo el foco en ampliar mis conocimientos, es por eso que a la par de la carrera y hasta el día de hoy me preparo como desarrollador Full Stack creando aplicaciones y sitios web responsivos, interactivos y de código limpio."
          : "I always keep the focus on expanding my knowledge, that is why along with my career and to this day I prepare myself as a Full Stack developer creating responsive, interactive and clean code applications and websites."}
        <br />
        <br />
        {language === "es"
          ? "Actualmente, me encuentro en la búsqueda activa de una oportunidad laboral, con muchas ganas de aportar todo lo aprendido y seguir creciendo."
          : "Currently, I'm actively searching for a job opportunity, eager to provide everything I've learned and continue growing."}
      </p>
    </section>
  );
}

export default AboutMe;
