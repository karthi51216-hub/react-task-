
import { useState } from "react";

export default function FilterList() {
  const [search, setSearch] = useState("");

  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Filter List</h2>

      <input
        type="text"
        placeholder="Search item..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul style={{ marginTop: "20px" }}>
        {filteredItems.length === 0 ? (
          <p style={{ color: "gray" }}>No matching items</p>
        ) : (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        )}
      </ul>
    </div>
  );
}
