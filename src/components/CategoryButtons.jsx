

import { useState } from "react";

export default function CategoryButtons() {
  const categories = ["All", "Fruit", "Veg", "Drinks"];
  const [active, setActive] = useState("All");

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Category Filter</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              cursor: "pointer",
              background: active === cat ? "#4CAF50" : "#fff",
              color: active === cat ? "#fff" : "#000",
              fontWeight: active === cat ? "bold" : "normal",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <p style={{ marginTop: "20px" }}>
        <strong>Active Category:</strong> {active}
      </p>
    </div>
  );
}
