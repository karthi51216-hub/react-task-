
import { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Add & Remove Items</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />

      <button onClick={addItem} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => removeItem(index)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
