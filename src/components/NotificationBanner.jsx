

import { useState } from "react";

export default function NotificationBanner() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Notification Banner</h2>

      {/* Controls */}
      <button onClick={() => setShow(true)}>Show Banner</button>
      <button
        onClick={() => setShow(false)}
        style={{ marginLeft: "10px" }}
      >
        Hide Banner
      </button>

      {/* Banner */}
      {show && (
        <div
          style={{
            marginTop: "20px",
            padding: "12px 16px",
            background: "#2196F3",
            color: "#fff",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "400px",
          }}
        >
          <span>🔔 This is a notification banner</span>
          <button
            onClick={() => setShow(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
