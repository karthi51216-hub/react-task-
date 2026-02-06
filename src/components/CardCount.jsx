
import { useState } from "react";

export default function CardCount() {
  const [cards, setCards] = useState([
    { id: 1, title: "Card One" },
    { id: 2, title: "Card Two" },
    { id: 3, title: "Card Three" },
  ]);

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Cards</h2>

      {/* Total count */}
      <p>
        <strong>Total Cards:</strong> {cards.length}
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              width: "160px",
              borderRadius: "8px",
            }}
          >
            <h4>{card.title}</h4>
            <button onClick={() => removeCard(card.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
