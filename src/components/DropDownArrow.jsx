

import { useState } from "react";

export default function DropdownArrow() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", width: "200px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "6px",
        }}
      >
        <span>Select Option</span>

        {/* Arrow icon */}
        <span
          style={{
            transition: "0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▼
        </span>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div
          style={{
            border: "1px solid #ccc",
            borderTop: "none",
            padding: "10px",
          }}
        >
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
      )}
    </div>
  );
}
