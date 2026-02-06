
import { useState } from "react";

export default function DeleteCard() {
  const [users, setUsers] = useState([
    { id: 1, name: "Karthi", email: "karthi@mail.com", age: 22 },
    { id: 2, name: "Anu", email: "anu@mail.com", age: 21 },
    { id: 3, name: "Ravi", email: "ravi@mail.com", age: 23 },
  ]);

  const deleteCard = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>User Cards</h2>

      {users.length === 0 && (
        <p style={{ color: "gray" }}>No cards available</p>
      )}

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "8px",
              width: "200px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>

            <button
              onClick={() => deleteCard(user.id)}
              style={{
                marginTop: "10px",
                background: "red",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
