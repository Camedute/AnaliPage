import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Components/Navegacion/Navbar";

export function Home() {
  const [redirect, setRedirect] = useState(false);

  const closeSession = () => {
    setRedirect(true); // Cambia el estado para activar la redirección
  };

  if (redirect) {
    return <Navigate to="/Login" />; // Cambia la ruta según corresponda
  }

  return (
    <div>
      <Navbar />
      <h1>Bienvenido a AnaliPage</h1>
      <button onClick={closeSession}>Cerrar Sesión</button>
    </div>
  );
}

export default Home;
