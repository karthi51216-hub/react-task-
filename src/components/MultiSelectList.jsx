

import { useState } from "react";

export default function MultiSelectList() {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
  const [selected, setSelected] = useState([]);

  const toggleSelect = (item) => {
    if (selected.includes(item)) {
      // unselect
      setSelected(selected.filter((i) => i !== item));
    } else {
      // select
      setSelected([...selected, item]);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Multi Select List</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item} style={{ marginBottom: "8px" }}>
            <label style={{ cursor: "pointer" }}>
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

      <p>
        <strong>Selected:</strong>{" "}
        {selected.length === 0 ? "None" : selected.join(", ")}
      </p>
    </div>
  );
}
