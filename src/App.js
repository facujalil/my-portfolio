import { useContext } from "react";
import { LanguageContext } from "context/LanguageContext";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";

function App() {
  const { language } = useContext(LanguageContext);

  return language ? (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  ) : null;
}

export default App;
