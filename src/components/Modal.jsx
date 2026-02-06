
import React from "react";

export default function Modal({ onClose }) {
  return (
    <div
      onClick={onClose}   // outside click
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Modal content */}
      <div
        onClick={(e) => e.stopPropagation()} // stop closing when inside click
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "6px",
          minWidth: "300px",
        }}
      >
        <h3>Modal Title</h3>
        <p>Click Outside</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
