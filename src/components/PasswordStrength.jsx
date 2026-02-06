
import { useState } from "react";

export default function PasswordStrength() {
  const [password, setPassword] = useState("");

  const getStrength = () => {
    if (password.length === 0) return "";
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  const strength = getStrength();

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "300px" }}>
      <h2>Password Strength</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%" }}
      />

      {strength && (
        <p
          style={{
            marginTop: "8px",
            fontWeight: "bold",
            color:
              strength === "Weak"
                ? "red"
                : strength === "Medium"
                ? "orange"
                : "green",
          }}
        >
          Strength: {strength}
        </p>
      )}
    </div>
  );
}
