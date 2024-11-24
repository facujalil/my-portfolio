import { useContext } from "react";
import style from "./Skills.module.css";
import { LanguageContext } from "context/LanguageContext";
import html5Icon from "assets/img/html5-icon.svg";
import css3Icon from "assets/img/css3-icon.svg";
import tailwindCss from "assets/img/tailwind-css-icon.svg";
import javascriptIcon from "assets/img/javascript-icon.svg";
import typescriptIcon from "assets/img/typescript-icon.svg";
import reactIcon from "assets/img/react-icon.svg";
import reduxIcon from "assets/img/redux-icon.svg";
import nextjsIcon from "assets/img/nextjs-icon.svg";
import nodejsIcon from "assets/img/nodejs-icon.svg";
import expressjsIcon from "assets/img/expressjs-icon.svg";
import sqlIcon from "assets/img/sql-icon.svg";
import gitIcon from "assets/img/git-icon.svg";
import Section from "../common/Section/Section";
import SkillItem from "./SkillItem/SkillItem";

function Skills() {
  const { language } = useContext(LanguageContext);

  const skillList = [
    { image: html5Icon, name: "HTML" },
    {
      image: css3Icon,
      name: "CSS",
    },
    {
      image: tailwindCss,
      name: "Tailwind CSS",
    },
    {
      image: javascriptIcon,
      name: "JavaScript",
    },
    {
      image: typescriptIcon,
      name: "TypeScript",
    },
    {
      image: reactIcon,
      name: "React",
    },
    {
      image: reduxIcon,
      name: "Redux",
    },
    {
      image: nextjsIcon,
      name: "Next.js",
    },
    {
      image: nodejsIcon,
      name: "Node.js",
    },
    {
      image: expressjsIcon,
      name: "Express.js",
    },
    {
      image: sqlIcon,
      name: "SQL",
    },
    {
      image: gitIcon,
      name: "Git",
    },
  ];

  return (
    <Section
      title={language === "es" ? "Habilidades" : "Skills"}
      id="skills"
      className={style.skills}
    >
      <div className={style.skillList}>
        {skillList.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
}

export default Skills;
