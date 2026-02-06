

import { useState } from "react";

export default function PasswordToggle() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "300px" }}>
      <h2>Password Toggle</h2>

      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type={show ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ flex: 1 }}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          style={{ marginLeft: "8px" }}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
