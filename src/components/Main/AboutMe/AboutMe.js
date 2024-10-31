import { useContext } from "react";
import style from "./AboutMe.module.css";
import { Context } from "../../../context/Context";
import Section from "../common/Section/Section";

function AboutMe() {
  const { language } = useContext(Context);

  return (
    <Section
      title={language === "es" ? "Sobre Mí" : "About Me"}
      id="about-me"
      className={style.aboutMe}
    >
      <div className={style.aboutMeContent}>
        <p>
          {language === "es"
            ? "Desde que tengo uso de razón, me apasiona el mundo de la tecnología, lo que me llevó a obtener mi título como Técnico Superior en Programación en 2022."
            : "For as long as I can remember, I have been passionate about the world of technology, which led me to obtain my degree as a Higher Technician in Programming in 2022."}
        </p>
        <p>
          {language === "es"
            ? "Comprometido, dedicado y en constante evolución, me desempeño como desarrollador Full Stack en el ecosistema de JavaScript, donde combino mis conocimientos en Frontend y Backend para crear soluciones completas y eficientes."
            : "Committed, dedicated and constantly evolving, I perform as a Full Stack developer in the JavaScript ecosystem, where I combine my knowledge in Frontend and Backend to create complete and efficient solutions."}
        </p>
        <p>
          {language === "es"
            ? "Actualmente, estoy en búsqueda activa de una oportunidad laboral, con muchas ganas de aplicar todo lo aprendido y seguir creciendo."
            : "Currently, I am actively seeking a job opportunity, eager to apply everything I have learned and continue growing."}
        </p>
      </div>
    </Section>
  );
}

export default AboutMe;
