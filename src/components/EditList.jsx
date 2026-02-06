
import { useState } from "react";

export default function EditList() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(items[index]);
  };

  const saveEdit = () => {
    const updated = [...items];
    updated[editIndex] = editText;
    setItems(updated);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Edit List Item</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {editIndex === index ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit} style={{ marginLeft: "5px" }}>
                  Save
                </button>
              </>
            ) : (
              <>
                {item}
                <button
                  onClick={() => startEdit(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
