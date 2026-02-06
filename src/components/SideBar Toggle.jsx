

import React, { useState } from "react";

export default function SidebarToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      {/* Sidebar */}
      <div
        style={{
          width: open ? "220px" : "0px",
          overflow: "hidden",
          transition: "0.3s",
          background: "#222",
          color: "#fff",
          padding: open ? "16px" : "0px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Menu</h3>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: "20px" }}>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close Sidebar" : "Open Sidebar"}
        </button>

        <h2 style={{ marginTop: "20px" }}>Content Area</h2>
        <p>Button click .</p>
      </div>
    </div>
  );
}
