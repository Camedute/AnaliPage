import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link className="navbar-brand" to="/Home">
          Analipage
        </Link>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/Ajustes">Ajustes</Link>
          </li>
          <li>
            <Link to="/oldAnalisis">Análisis anteriores</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
