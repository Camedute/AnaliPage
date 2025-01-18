import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css"; // Importar el nuevo estilo

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!email || !password) {
      setError("Ambos datos son requeridos.");
      return;
    }

    if (!email.includes("@")) {
      setError("El formato del Email es erroneo.");
      return;
    }

    // Reset error and simulate login success
    setError("");
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/Home" />;
  }

  return (
    <div className="login-container">
      <h2>¡Bienvenido!</h2>
      <p className="login-subtitle">Por favor ingresa tu cuenta</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="login-form-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
