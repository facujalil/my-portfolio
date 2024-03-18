import React, { useContext } from "react";
import "./App.css";
import { Context } from "./context/Context";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const { language } = useContext(Context);

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
