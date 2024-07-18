import { Context } from "./Context";
import useLanguage from "../hooks/useLanguage";

function Provider({ children }) {
  const { language, setLanguage } = useLanguage();

  const value = {
    language,
    setLanguage,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
