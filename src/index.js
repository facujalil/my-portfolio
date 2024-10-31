import ReactDOM from "react-dom/client";
import "index.css";
import Provider from "context/Provider";
import App from "App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
  </Provider>
);
