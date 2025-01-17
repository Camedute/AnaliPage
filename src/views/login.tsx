import React, { useState } from "react";
import Login from "../Components/login";
import Register from "../Components/register";
import Restore from "../Components/restore";
import './loginMain.css';

function LoginMain() {
  const [value, setValue] = useState(0);

  const renderComponent = () => {
    switch (value) {
      case 0:
        return <Login />;
      case 1:
        return <Register />;
      case 2:
        return <Restore />;
      default:
        return <Login />;
    }
  };

  return (
    <div className="main-container">
      {/* Contenedor del contenido dinámico */}
      <div className="content-container">
        {renderComponent()}
      </div>

      {/* Enlaces de navegación */}
      <div className="link-container">
        {value !== 0 && (
          <p>
            ¿Tienes usuario?{" "}
            <a href="#" onClick={() => setValue(0)}>
              Inicia sesión
            </a>
          </p>
        )}
        {value !== 1 && (
          <p>
            ¿No tienes usuario?{" "}
            <a href="#" onClick={() => setValue(1)}>
              Regístrate
            </a>
          </p>
        )}
        {value !== 2 && (
          <p>
            ¿Se te olvidó tu contraseña?{" "}
            <a href="#" onClick={() => setValue(2)}>
              Recuperar contraseña
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginMain;
