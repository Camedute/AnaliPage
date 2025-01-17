// src/components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";  // Ajusta la ruta según corresponda
import { Outlet } from "react-router-dom";  // Esto renderiza el contenido de las rutas

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />  {/* Aquí se renderizan las rutas internas */}
      </main>
    </div>
  );
};

export default Layout;
