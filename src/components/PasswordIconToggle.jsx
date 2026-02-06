

import { useState } from "react";

export default function PasswordIconToggle() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "320px" }}>
      <h2>Password Icon Toggle</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "6px 10px",
        }}
      >
        <input
          type={show ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
          }}
        />

        {/* Icon */}
        <span
          onClick={() => setShow(!show)}
          style={{
            cursor: "pointer",
            fontSize: "18px",
            marginLeft: "8px",
          }}
          title={show ? "Hide password" : "Show password"}
        >
          {show ? "🙈" : "👁"}
        </span>
      </div>
    </div>
  );
}
