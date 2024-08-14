import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LayoutDefault } from "./layout/LayoutDefault";
import "./assets/styles/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LayoutDefault />
  </StrictMode>,
);
