
import { useState } from "react";

export default function NoResultsList() {
  const data = ["Apple", "Banana", "Orange", "Grapes"];
  const [search, setSearch] = useState("");

  const results = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: 400 }}>
      <h2>Search List</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      />

      <div style={{ marginTop: "20px" }}>
        {results.length === 0 ? (
          <div
            style={{
              padding: "20px",
              textAlign: "center",
              color: "#777",
              border: "1px dashed #ccc",
              borderRadius: "8px",
            }}
          >
            🔍 No results found
          </div>
        ) : (
          <ul>
            {results.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
