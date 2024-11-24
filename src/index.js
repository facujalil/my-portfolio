import ReactDOM from "react-dom/client";
import "index.css";
import LanguageProvider from "context/LanguageContext";
import App from "App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
