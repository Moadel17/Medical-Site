import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { WindowWidth } from "./Context/windowWidth.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <WindowWidth>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </WindowWidth>,
);
