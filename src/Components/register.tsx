import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (!email.includes("@")) {
      setError("Invalid email format.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
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
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="register-form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register-form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="register-error">{error}</p>}
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
