// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Navegacion/Layout"; // Importa el Layout
import LoginMain from "./views/login";
import Home from "./views/home";
import Profile from "./views/profile";
import Settings from "./views/settings";
import OldAnalisis from "./views/oldAnalisis";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Usamos el Layout para envolver todas las rutas */}
        
        <Route path="/Login" element={<LoginMain />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginMain />} />  {/* Ruta principal para Login */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Perfil" element={<Profile />} />
          <Route path="/Ajustes" element={<Settings />} />
          <Route path="/oldAnalisis" element={<OldAnalisis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
