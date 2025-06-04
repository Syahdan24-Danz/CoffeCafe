import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import MenuPage from "./assets/pages/menu.jsx";
import Main from "./assets/pages/main.jsx";

import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Menu-Bento" element={<MenuPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
