import React, { useState } from "react";
import "./Restore.css";

function Restore() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("El email es requerido.");
      setSuccess("");
      return;
    }

    if (!email.includes("@")) {
      setError("El formato del email es erroneo.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Se ha enviado un enlace para restablecer la contraseña a su email.");
  };

  return (
    <div className="restore-container">
      <h2>Restablece tu contraseña</h2>
      <p className="restore-subtitle">Ingresa tu email para recibir el link de restablecimiento</p>
      <form onSubmit={handleSubmit}>
        <div className="restore-form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="restore-input"
          />
        </div>
        {error && <p className="restore-error">{error}</p>}
        {success && <p className="restore-success">{success}</p>}
        <button type="submit" className="restore-button">
          Enviar link de restablecimiento
        </button>
      </form>
    </div>
  );
}

export default Restore;
