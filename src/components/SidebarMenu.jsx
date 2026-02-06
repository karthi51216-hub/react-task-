
import React, { useState } from "react";

export default function SidebarMenu() {
  const [active, setActive] = useState("Home");

  const menu = ["Home", "About", "Services", "Contact"];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      {/* Sidebar */}
      <div style={{ width: "220px", background: "#222", color: "#fff" }}>
        <h3 style={{ padding: "15px", margin: 0 }}>Menu</h3>

        {menu.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            style={{
              padding: "12px 15px",
              cursor: "pointer",
              background: active === item ? "#4CAF50" : "transparent",
              color: active === item ? "#fff" : "#ccc",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>{active} Page</h2>
        <p>{active} menu click pannina highlight aagum.</p>
      </div>
    </div>
  );
}
