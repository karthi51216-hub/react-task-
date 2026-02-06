
export default function HoverCard() {
  const cards = [
    { id: 1, title: "Card One" },
    { id: 2, title: "Card Two" },
    { id: 3, title: "Card Three" },
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Hover Highlight Cards</h2>

      <div style={{ display: "flex", gap: "16px" }}>
        {cards.map((card) => (
          <div
            key={card.id}
            className="hover-card"
            style={{
              width: "160px",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              transition: "0.2s",
              cursor: "pointer",
            }}
          >
            <h4>{card.title}</h4>
            <p>Hover me</p>
          </div>
        ))}
      </div>
    </div>
  );
}
