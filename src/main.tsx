import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginMain from "./views/login";
import Home from "./views/home";
import Profile from "./views/profile";
import Settings from "./views/settings";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta por defecto */}
        <Route path="/" element={<LoginMain />} />
        <Route path="/Login" element={<LoginMain />} />
        {/* Rutas internas de Home */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Perfil" element={<Profile />} />
        <Route path="/Ajustes" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
