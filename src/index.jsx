import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "views/Home/Home.jsx";
import "assets/styles/style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // 👈️ deprecated starting React 18
  <StrictMode>
    <Home />
  </StrictMode>
);
