
import { useState } from "react";

export default function TabsSwitch() {
  const [tab, setTab] = useState("Home");

  const content = {
    Home: "Welcome to Home page!",
    Profile: "This is your Profile page.",
    Settings: "Here you can change Settings.",
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: 500 }}>
      <h2>Tabs Switch Content</h2>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 10, marginBottom: 15 }}>
        {Object.keys(content).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "10px 14px",
              border: "1px solid #ccc",
              cursor: "pointer",
              background: tab === t ? "#222" : "#fff",
              color: tab === t ? "#fff" : "#000",
              borderRadius: 6,
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: 16,
          borderRadius: 8,
          minHeight: 70,
        }}
      >
        {content[tab]}
      </div>
    </div>
  );
}
