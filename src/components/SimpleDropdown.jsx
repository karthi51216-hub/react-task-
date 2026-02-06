

import { useState } from "react";

export default function SimpleDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", width: "220px" }}>
      {/* Dropdown button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Menu {open ? "▲" : "▼"}
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          style={{
            border: "1px solid #ccc",
            marginTop: "5px",
            borderRadius: "6px",
            background: "#fff",
          }}
        >
          <div style={itemStyle}>Profile</div>
          <div style={itemStyle}>Settings</div>
          <div style={itemStyle}>Logout</div>
        </div>
      )}
    </div>
  );
}

const itemStyle = {
  padding: "10px",
  cursor: "pointer",
  borderBottom: "1px solid #eee",
};
