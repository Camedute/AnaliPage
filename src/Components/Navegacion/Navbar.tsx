import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css"; // Importar los iconos de Font Awesome
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link className="navbar-brand" to="/Home" aria-label="Ir a la página de inicio">
          <i className="fa fa-home"></i> Analipage
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/Home" aria-label="Ir a la página principal">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/Perfil" aria-label="Ir a tu perfil">
              <i className="fa fa-user"></i> Perfil
            </Link>
          </li>
          <li>
            <Link to="/Ajustes" aria-label="Ir a los ajustes">
              <i className="fa fa-cogs"></i> Ajustes
            </Link>
          </li>
          <li>
            <Link to="/oldAnalisis" aria-label="Ver análisis anteriores">
              <i className="fa fa-chart-line"></i> Análisis anteriores
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
