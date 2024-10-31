import useLanguage from "./hooks/useLanguage";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const { language } = useLanguage();

  return (
    language && (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  );
}

export default App;
