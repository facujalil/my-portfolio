import { useEffect, useState } from "react";

function useLanguage() {
  const [language, setLanguage] = useState("");

  const navigatorLanguage = window.navigator.language;

  useEffect(() => {
    setLanguage(navigatorLanguage.includes("es") ? "es" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return { language, setLanguage };
}

export default useLanguage;
