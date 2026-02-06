

import { useMemo, useState } from "react";

export default function ListSearchFilter() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Veg" },
    { id: 3, name: "Banana", category: "Fruit" },
  ]);

  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addItem = () => {
    if (!text.trim()) return;
    setItems((prev) => [
      ...prev,
      { id: Date.now(), name: text.trim(), category: "Fruit" }, // default category
    ]);
    setText("");
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" ? true : item.category === category;
      return matchSearch && matchCategory;
    });
  }, [items, search, category]);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: 420 }}>
      <h2>List + Search + Filter</h2>

      {/* Add */}
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add item name..."
          style={{ flex: 1 }}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {/* Search + Filter */}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          style={{ flex: 1 }}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Fruit</option>
          <option>Veg</option>
        </select>
      </div>

      {/* List */}
      <div style={{ marginTop: 16 }}>
        {filteredItems.length === 0 ? (
          <p style={{ color: "gray" }}>No items found</p>
        ) : (
          <ul>
            {filteredItems.map((item) => (
              <li key={item.id}>
                {item.name} <span style={{ color: "gray" }}>({item.category})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
