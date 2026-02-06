
import React, { useState } from "react";

export default function Tooltip() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "80px", fontFamily: "Arial" }}>
      <span
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{ cursor: "pointer", position: "relative" }}
      >
        Hover me

        {show && (
          <span
            style={{
              position: "absolute",
              bottom: "120%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#333",
              color: "#fff",
              padding: "6px 10px",
              borderRadius: "4px",
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            This is a tooltip
          </span>
        )}
      </span>
    </div>
  );
}
