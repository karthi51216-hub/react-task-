
import React, { useState } from "react";

function Dropdown({ id, activeId, setActiveId, title }) {
  const isOpen = activeId === id;

  return (
    <div style={{ marginBottom: "20px", position: "relative" }}>
      <button
        onClick={() => setActiveId(isOpen ? null : id)}
      >
        {title}
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: 0,
            width: "150px",
            border: "1px solid #ccc",
            background: "#fff",
          }}
        >
          <div style={itemStyle}>Option 1</div>
          <div style={itemStyle}>Option 2</div>
          <div style={itemStyle}>Option 3</div>
        </div>
      )}
    </div>
  );
}

export default function DropdownGroup() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <Dropdown
        id={1}
        title="Dropdown 1"
        activeId={activeId}
        setActiveId={setActiveId}
      />

      <Dropdown
        id={2}
        title="Dropdown 2"
        activeId={activeId}
        setActiveId={setActiveId}
      />

      <Dropdown
        id={3}
        title="Dropdown 3"
        activeId={activeId}
        setActiveId={setActiveId}
      />
    </div>
  );
}

const itemStyle = {
  padding: "10px",
  cursor: "pointer",
  borderBottom: "1px solid #eee",
};
