
import { useState } from "react";

export default function HighlightCard() {
  const users = [
    { id: 1, name: "Karthi", email: "karthi@mail.com" },
    { id: 2, name: "Anu", email: "anu@mail.com" },
    { id: 3, name: "Ravi", email: "ravi@mail.com" },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId((prev) => (prev === id ? null : id)); // toggle select
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Highlight Selected Card</h2>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {users.map((user) => {
          const isSelected = selectedId === user.id;

          return (
            <div
              key={user.id}
              onClick={() => handleSelect(user.id)}
              style={{
                width: "220px",
                padding: "16px",
                borderRadius: "10px",
                cursor: "pointer",
                border: isSelected ? "2px solid #4CAF50" : "1px solid #ccc",
                background: isSelected ? "#eaffea" : "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                transition: "0.2s",
              }}
            >
              <h3 style={{ marginTop: 0 }}>{user.name}</h3>
              <p style={{ margin: 0 }}>{user.email}</p>
              {isSelected && (
                <p style={{ marginTop: "10px", color: "#2e7d32", fontWeight: "bold" }}>
                  Selected ✅
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
