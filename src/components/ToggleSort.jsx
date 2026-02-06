
import { useState } from "react";

export default function ToggleSort() {
  const [items, setItems] = useState([
    "Banana",
    "Apple",
    "Orange",
    "Grapes",
    "Mango",
  ]);
  const [asc, setAsc] = useState(true);

  const toggleSort = () => {
    const sorted = [...items].sort((a, b) =>
      asc ? a.localeCompare(b) : b.localeCompare(a)
    );
    setItems(sorted);
    setAsc(!asc);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Toggle Sort</h2>

      <button onClick={toggleSort}>
        {asc ? "Sort Z → A" : "Sort A → Z"}
      </button>

      <ul style={{ marginTop: "20px" }}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
