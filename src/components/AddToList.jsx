
import React, { useState } from "react";

export default function AddToList() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim() === "") return; // empty avoid
    setItems([...items, text]);
    setText(""); // clear input
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Add Items</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter item"
      />

      <button onClick={addItem} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
