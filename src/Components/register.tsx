import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Register.css"; // Importar el nuevo estilo

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Todos los datos son requeridos.");
      return;
    }

    if (!email.includes("@")) {
      setError("El formato de Email es erroneo.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener mas de 6 caracteres.");
      return;
    }

    setError("");
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/Home" />;
  }

  return (
    <div className="register-container">
      <h2>Crea tu cuenta</h2>
      <p className="register-subtitle">¡Ingresa a nuestros servicios!</p>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
        </div>
        <div className="register-form-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
        </div>
        <div className="register-form-group">
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="register-input"
          />
        </div>
        {error && <p className="register-error">{error}</p>}
        <button type="submit" className="register-button">
          Registrate
        </button>
      </form>
    </div>
  );
}

export default Register;
