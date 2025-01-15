import { Link } from "react-router-dom";
import "./Formulario.css";
import { useState } from "react";

interface FormularioProps {
  setuser: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Formulario({ setuser }: FormularioProps) {
  const [nombre, setnombre] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const [error, seterror] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nombre === "" || contraseña === "") {
      seterror(true);
      return;
    }

    seterror(false);
    setuser([nombre]);
  };

  return (
    <section>
      <h1>Login</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setnombre(e.target.value)}
          placeholder="Nombre de usuario"
        />
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setcontraseña(e.target.value)}
          placeholder="Contraseña"
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}

      <p>
        ¿No tienes una cuenta? <Link to="/Registro">Regístrate aquí</Link>
      </p>
    </section>
  );
}

export default Formulario;
