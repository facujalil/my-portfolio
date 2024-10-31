import style from "./Main.module.css";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function Main() {
  return (
    <main className={style.main}>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
