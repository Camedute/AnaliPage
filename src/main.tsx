import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./Login";
import Registro from "./Components/Registro";
import Home from "./Components/Home";
import Perfil from "./Components/Paginas/Perfil";
import Ajustes from "./Components/Paginas/Ajustes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta por defecto */}
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        {/* Rutas internas de Home */}
        <Route path="/Home/*" element={<Home user={[]} setuser={() => {}} />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Ajustes" element={<Ajustes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
