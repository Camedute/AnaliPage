// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Components/ThemeContext"; // Importa el ThemeProvider
import Layout from "./Components/Navegacion/Layout";
import LoginMain from "./views/login";
import Home from "./views/home";
import Profile from "./views/profile";
import Settings from "./views/settings";
import OldAnalisis from "./views/oldAnalisis";
// src/main.tsx
import "./globlal.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider> {/* Envuelve toda la aplicación con el ThemeProvider */}
      <BrowserRouter>
        <Routes>
          {/* Usamos el Layout para envolver todas las rutas */}
          <Route path="/Login" element={<LoginMain />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginMain />} /> {/* Ruta principal para Login */}
            <Route path="/Home" element={<Home />} />
            <Route path="/Perfil" element={<Profile />} />
            <Route path="/Ajustes" element={<Settings />} />
            <Route path="/oldAnalisis" element={<OldAnalisis />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
