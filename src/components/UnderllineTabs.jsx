

import { useState } from "react";

export default function UnderlineTabs() {
  const tabs = ["Home", "Profile", "Settings"];
  const [active, setActive] = useState("Home");

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: 500 }}>
      <h2>Underline Active Tab</h2>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 20, borderBottom: "2px solid #eee" }}>
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: "10px 0",
              cursor: "pointer",
              position: "relative",
              color: active === tab ? "#222" : "#777",
              fontWeight: active === tab ? "bold" : "normal",
            }}
          >
            {tab}

            {/* underline */}
            {active === tab && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -2,
                  height: 3,
                  background: "#4CAF50",
                  borderRadius: 2,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "16px 0" }}>
        {active === "Home" && <p>Home content here</p>}
        {active === "Profile" && <p>Profile content here</p>}
        {active === "Settings" && <p>Settings content here</p>}
      </div>
    </div>
  );
}
