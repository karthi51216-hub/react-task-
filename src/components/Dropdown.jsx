import React, { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative", width: "200px", fontFamily: "Arial" }}>
      {/* Button */}
      <button onClick={() => setOpen(!open)}>
        Menu
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: 0,
            width: "100%",
            border: "1px solid #ccc",
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
