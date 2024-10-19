import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./components/Router/Router";
import { Header } from "./components/Header/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header />
    <Router />
  </React.StrictMode>
);
