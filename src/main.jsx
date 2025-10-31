// main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
// 1. 'BrowserRouter' အစား 'HashRouter' ကို import လုပ်ပါ
import { HashRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2. 'BrowserRouter' အစား 'HashRouter' ကို သုံးပါ */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
