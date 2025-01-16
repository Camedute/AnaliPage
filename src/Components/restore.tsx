import React, { useState } from "react";

function Restore() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validación básica
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

    // Reset error and simulate restore success
    setError("");
    setSuccess("A password reset link has been sent to your email.");
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h2>Restore Password</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#ffc107",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default Restore;