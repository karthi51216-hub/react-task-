
import { useState } from "react";

export default function EmptyListMessage() {
  const [items, setItems] = useState([]);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>My List</h2>

      {items.length === 0 ? (
        <p style={{ color: "gray" }}>No items available</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <button
        onClick={() => setItems(["Sample Item"])}
        style={{ marginTop: "10px" }}
      >
        Add Item
      </button>
    </div>
  );
}
