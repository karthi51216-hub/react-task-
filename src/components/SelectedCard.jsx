

import { useState } from "react";

export default function SelectCard() {
  const cards = [
    { id: 1, title: "Card One" },
    { id: 2, title: "Card Two" },
    { id: 3, title: "Card Three" },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id); // toggle
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Select a Card</h2>

      <div style={{ display: "flex", gap: "16px" }}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            style={{
              width: "160px",
              padding: "16px",
              cursor: "pointer",
              borderRadius: "8px",
              border:
                selectedId === card.id
                  ? "2px solid #4CAF50"
                  : "1px solid #ccc",
              background:
                selectedId === card.id ? "#eaffea" : "#fff",
            }}
          >
            <h4>{card.title}</h4>
            {selectedId === card.id && (
              <p style={{ color: "#2e7d32", fontWeight: "bold" }}>
                Selected ✅
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
