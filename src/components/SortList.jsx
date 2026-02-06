
import { useState } from "react";

export default function SortList() {
  const [items, setItems] = useState([
    "Banana",
    "Apple",
    "Orange",
    "Grapes",
    "Mango",
  ]);

  const sortAZ = () => {
    const sorted = [...items].sort(); // A → Z
    setItems(sorted);
  };

  const sortZA = () => {
    const sorted = [...items].sort().reverse(); // Z → A
    setItems(sorted);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Sort List</h2>

      <button onClick={sortAZ}>Sort A → Z</button>
      <button onClick={sortZA} style={{ marginLeft: "10px" }}>
        Sort Z → A
      </button>

      <ul style={{ marginTop: "20px" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
