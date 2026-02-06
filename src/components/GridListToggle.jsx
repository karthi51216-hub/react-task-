
import React, { useState } from "react";

export default function GridListToggle() {
  const [view, setView] = useState("grid");

  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      {/* Toggle buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setView("grid")}>Grid</button>
        <button onClick={() => setView("list")} style={{ marginLeft: "10px" }}>
          List
        </button>
      </div>

      {/* Items */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            view === "grid" ? "repeat(3, 1fr)" : "1fr",
          gap: "10px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              textAlign: "center",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
