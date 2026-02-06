

import { useState } from "react";

export default function HelperText() {
  const [password, setPassword] = useState("");

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "320px" }}>
      <h2>Helper Text Example</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Helper text while typing */}
      {password && (
        <p style={{ fontSize: "12px", color: "#555", marginTop: "6px" }}>
          Password should be at least 8 characters long
        </p>
      )}
    </div>
  );
}
