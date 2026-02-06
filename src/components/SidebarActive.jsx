

import { useState } from "react";

export default function SidebarActive() {
  const menus = ["Dashboard", "Users", "Settings", "Logout"];
  const [active, setActive] = useState("Dashboard");

  return (
    <div style={{ display: "flex", fontFamily: "Arial", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          background: "#222",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h3>Menu</h3>

        {menus.map((menu) => (
          <div
            key={menu}
            onClick={() => setActive(menu)}
            style={{
              padding: "10px 14px",
              marginBottom: "8px",
              cursor: "pointer",
              borderRadius: "6px",
              background: active === menu ? "#4CAF50" : "transparent",
              color: active === menu ? "#fff" : "#ccc",
              fontWeight: active === menu ? "bold" : "normal",
            }}
          >
            {menu}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "40px" }}>
        <h2>{active}</h2>
        <p>{active} page content here</p>
      </div>
    </div>
  );
}
