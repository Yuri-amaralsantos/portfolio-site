import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router";
import "./tailwind.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento root não encontrado");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
