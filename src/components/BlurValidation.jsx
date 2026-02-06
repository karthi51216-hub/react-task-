

import { useState } from "react";

export default function BlurValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);

    if (!email) {
      setError("Email is required");
    } else if (!email.includes("@")) {
      setError("Invalid email");
    } else {
      setError("");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "300px" }}>
      <h2>Blur Validation</h2>

      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
      />

      {/* Show error ONLY after blur */}
      {touched && error && (
        <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
      )}
    </div>
  );
}
