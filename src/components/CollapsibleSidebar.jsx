


import { useState } from "react";

export default function CollapsibleSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      {/* Sidebar */}
      <div
        style={{
          width: open ? "220px" : "0",
          overflow: "hidden",
          transition: "0.3s",
          background: "#222",
          color: "#fff",
          padding: open ? "20px" : "0",
        }}
      >
        <h3>Sidebar</h3>
        <p>Home</p>
        <p>Profile</p>
        <p>Settings</p>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close Sidebar" : "Open Sidebar"}
        </button>

        <h2>Main Content</h2>
        <p>Sidebar can be toggled using the button.</p>
      </div>
    </div>
  );
}
