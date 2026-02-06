
import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    if (activeTab === "Home") return <p>This is Home content</p>;
    if (activeTab === "Profile") return <p>This is Profile content</p>;
    if (activeTab === "Settings") return <p>This is Settings content</p>;
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      {/* Tabs */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {["Home", "Profile", "Settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px 16px",
              cursor: "pointer",
              borderBottom:
                activeTab === tab ? "3px solid #4CAF50" : "3px solid transparent",
              background: "none",
              border: "none",
              fontWeight: activeTab === tab ? "bold" : "normal",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          minHeight: "80px",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}
