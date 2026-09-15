import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
import "./index.css";
import App from "./App.jsx";

defineCustomElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.31/assets",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
