
import React, { useState } from "react";

export default function MultiAccordion() {
  const data = [
    { title: "Section 1", content: "This is section 1 content." },
    { title: "Section 2", content: "This is section 2 content." },
    { title: "Section 3", content: "This is section 3 content." },
  ];

  const [openIds, setOpenIds] = useState([]); // multiple open

  const toggle = (index) => {
    setOpenIds((prev) =>
      prev.includes(index) ? prev.filter((id) => id !== index) : [...prev, index]
    );
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Multi Open Accordion</h2>

      {data.map((item, index) => {
        const isOpen = openIds.includes(index);

        return (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              marginBottom: 10,
              borderRadius: 6,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => toggle(index)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "12px 14px",
                border: "none",
                cursor: "pointer",
                background: isOpen ? "#f2f2f2" : "#fff",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {item.title} {isOpen ? "▲" : "▼"}
            </button>

            {isOpen && (
              <div style={{ padding: "12px 14px", background: "#fff" }}>
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
