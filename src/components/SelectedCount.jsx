
import { useState } from "react";

export default function SelectedCount() {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
  const [selected, setSelected] = useState([]);

  const toggleSelect = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Multi Select List</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item} style={{ marginBottom: "8px" }}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => toggleSelect(item)}
              />
              <span style={{ marginLeft: "8px" }}>{item}</span>
            </label>
          </li>
        ))}
      </ul>

      {/* Selected count */}
      <p style={{ marginTop: "15px" }}>
        <strong>Selected Items Count:</strong> {selected.length}
      </p>
    </div>
  );
}
