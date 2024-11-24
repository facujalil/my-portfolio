import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    window.navigator.language.includes("es") ? "es" : "en"
  );

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
