

import { useState } from "react";

export default function StepIndicator() {
  const steps = ["Login", "Address", "Payment", "Done"];
  const [current, setCurrent] = useState(1); // 0-based

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: 600 }}>
      <h2>Step Indicator</h2>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {steps.map((label, i) => {
          const completed = i < current;
          const active = i === current;

          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* circle */}
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: completed ? "2px solid #2e7d32" : "2px solid #ccc",
                  background: completed ? "#d4edda" : active ? "#cce5ff" : "#fff",
                  fontWeight: "bold",
                }}
              >
                {completed ? "✓" : i + 1}
              </div>

              {/* label */}
              <div style={{ fontWeight: active ? "bold" : "normal" }}>{label}</div>

              {/* line */}
              {i !== steps.length - 1 && (
                <div
                  style={{
                    width: 40,
                    height: 3,
                    background: completed ? "#2e7d32" : "#ccc",
                    borderRadius: 10,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setCurrent((c) => Math.max(c - 1, 0))} disabled={current === 0}>
          Prev
        </button>
        <button
          onClick={() => setCurrent((c) => Math.min(c + 1, steps.length - 1))}
          style={{ marginLeft: 10 }}
          disabled={current === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
