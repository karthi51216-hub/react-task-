

import { useState } from "react";

export default function ToggleHeader() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      {/* Toggle button */}
      <button onClick={() => setShowHeader(!showHeader)}>
        {showHeader ? "Hide Header" : "Show Header"}
      </button>

      {/* Header */}
      {showHeader && (
        <header
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#4CAF50",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          <h2>My Header</h2>
          <p>This header can be toggled on and off</p>
        </header>
      )}
    </div>
  );
}
