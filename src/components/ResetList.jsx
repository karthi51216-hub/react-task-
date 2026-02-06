
import { useState } from "react";

export default function ResetList() {
  const originalItems = [
    "Banana",
    "Apple",
    "Orange",
    "Grapes",
    "Mango",
  ];

  const [items, setItems] = useState(originalItems);

  const sortAZ = () => {
    setItems([...items].sort());
  };

  const sortZA = () => {
    setItems([...items].sort().reverse());
  };

  const resetList = () => {
    setItems(originalItems); // reset to original
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Reset List Example</h2>

      <button onClick={sortAZ}>Sort A → Z</button>
      <button onClick={sortZA} style={{ marginLeft: "8px" }}>
        Sort Z → A
      </button>
      <button onClick={resetList} style={{ marginLeft: "8px" }}>
        Reset
      </button>

      <ul style={{ marginTop: "20px" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
