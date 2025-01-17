import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./home.css";

export function Home() {
  const [redirect, setRedirect] = useState(false);

  const closeSession = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/Login" />;
  }

  return (
    <div className="home-container">
      <h1>Bienvenido a AnaliPage</h1>
      <img
        src="ruta/a/tu/imagen.jpg"
        alt="Bienvenido a AnaliPage"
        className="welcome-image"
      />
      <p className="welcome-text">
        Explora nuestras características y disfruta de una experiencia única.
      </p>
      <button onClick={closeSession} aria-label="Cerrar sesión">
        Cerrar Sesión
      </button>
      <footer className="footer">
        <p>© 2025 AnaliPage. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
