import { useContext, useEffect, useState } from "react";
import style from "./Dropdown.module.css";
import { LanguageContext } from "context/LanguageContext";
import spainFlag from "assets/img/spain-flag.png";
import ukFlag from "assets/img/uk-flag.png";

function Dropdown() {
  const { language, setLanguage } = useContext(LanguageContext);

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setExpanded(false);
    };
    if (expanded) {
      window.addEventListener("click", handleClickOutside);

      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [expanded]);

  return (
    <div
      className={style.dropdown}
      onClick={(e) => {
        e.stopPropagation();
        setExpanded(!expanded);
      }}
    >
      <div className={style.selectedLanguage}>
        <img
          src={language === "es" ? spainFlag : ukFlag}
          alt={language === "es" ? "Español" : "English"}
        />
        <i className={`fa-solid fa-angle-${expanded ? "up" : "down"}`}></i>
      </div>
      {expanded ? (
        <div
          className={style.languageOption}
          onClick={() => {
            setLanguage(language === "es" ? "en" : "es");
            setExpanded(false);
          }}
        >
          <img
            src={language === "es" ? ukFlag : spainFlag}
            alt={language === "es" ? "Inglés" : "Spanish"}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
