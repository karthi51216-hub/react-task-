

import { useEffect } from "react";

export default function OverlayModal({ onClose }) {
  // 🔒 disable background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      {/* modal content */}
      <div
        onClick={(e) => e.stopPropagation()} // stop background click
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
        }}
      >
        <h3>Overlay Active</h3>
        <p>Background interaction disabled 🚫</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
