import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Home.css";
import { useTheme } from "../Components/ThemeContext"; // Para el tema oscuro

export function Home() {
  const [redirect, setRedirect] = useState(false);
  const { darkMode } = useTheme(); // Obtener el estado del modo oscuro

  const closeSession = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/Login" />;
  }

  return (
    <div className={`home-container ${darkMode ? "dark-mode" : ""}`}>
      <div className={`card ${darkMode ? "dark-mode" : ""}`}>
        <div className="header">
          <h1 className={`home-title ${darkMode ? "dark-mode" : ""}`}>Bienvenido a AnaliPage</h1>
        </div>

        <div className="content">
          <p className={`welcome-text ${darkMode ? "dark-mode" : ""}`}>
            Explora nuestras características y disfruta de una experiencia única.
          </p>

          <button
            onClick={closeSession}
            className={`logout-button ${darkMode ? "dark-mode" : ""}`}
            aria-label="Cerrar sesión"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="footer">
          <p className={`footer-text ${darkMode ? "dark-mode" : ""}`}>© 2025 AnaliPage. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
