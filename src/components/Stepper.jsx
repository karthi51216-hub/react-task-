

import { useState } from "react";

export default function Stepper() {
  const steps = ["Login", "Address", "Payment", "Confirmation"];
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Step Progress</h2>

      <div style={{ display: "flex", gap: "16px" }}>
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={step}
              style={{
                padding: "10px 14px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                background: isCompleted
                  ? "#d4edda"   // completed
                  : isActive
                  ? "#cce5ff"   // current
                  : "#f8f9fa",  // pending
                color: isCompleted ? "#155724" : "#000",
                fontWeight: isCompleted || isActive ? "bold" : "normal",
              }}
            >
              {step}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentStep((s) => Math.max(s - 1, 0))}
          disabled={currentStep === 0}
        >
          Previous
        </button>

        <button
          onClick={() =>
            setCurrentStep((s) => Math.min(s + 1, steps.length))
          }
          style={{ marginLeft: "10px" }}
          disabled={currentStep === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
