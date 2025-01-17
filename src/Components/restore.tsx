import React, { useState } from "react";
import "./Restore.css";

function Restore() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
      setSuccess("");
      return;
    }
    if (!email.includes("@")) {
      setError("Invalid email format.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("A password reset link has been sent to your email.");
  };

  return (
    <div className="restore-container">
      <h2>Restore Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="restore-form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p className="restore-error">{error}</p>}
        {success && <p className="restore-success">{success}</p>}
        <button type="submit" className="restore-button">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default Restore;
