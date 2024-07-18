import React from "react";
import "../css/Main.css";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Main() {
  return (
    <main>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
