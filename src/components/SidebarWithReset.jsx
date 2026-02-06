
import { useState } from "react";

export default function SidebarWithReset() {
  // initial state values
  const initialOpen = true;
  const initialActive = "Home";

  const [open, setOpen] = useState(initialOpen);
  const [active, setActive] = useState(initialActive);

  const resetUI = () => {
    setOpen(initialOpen);
    setActive(initialActive);
  };

  const menu = ["Home", "About", "Services", "Contact"];

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      {/* Sidebar */}
      <div
        style={{
          width: open ? 220 : 0,
          overflow: "hidden",
          transition: "0.3s",
          background: "#222",
          color: "#fff",
          padding: open ? 16 : 0,
        }}
      >
        <h3 style={{ marginTop: 0 }}>Menu</h3>

        {menu.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            style={{
              padding: "10px 12px",
              cursor: "pointer",
              borderRadius: 6,
              background: active === item ? "#4CAF50" : "transparent",
              color: active === item ? "#fff" : "#ccc",
              marginBottom: 6,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: 20 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => setOpen(!open)}>
            {open ? "Close Sidebar" : "Open Sidebar"}
          </button>

          <button onClick={resetUI}>Reset UI</button>
        </div>

        <h2 style={{ marginTop: 20 }}>{active} Page</h2>
        <p>Sidebar toggle + menu select + reset working ✅</p>
      </div>
    </div>
  );
}
