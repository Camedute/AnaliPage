import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    if (!email.includes("@")) {
      setError("Invalid email format.");
      return;
    }
    setError("");
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/Home" />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
