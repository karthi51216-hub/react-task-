

import { useState } from "react";

export default function LoadingSpinner() {
  const [loading, setLoading] = useState(false);

  const handleAction = () => {
    setLoading(true);

    // fake async action (API call)
    setTimeout(() => {
      setLoading(false);
      alert("Action completed ✅");
    }, 2000);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Loading Spinner Example</h2>

      <button onClick={handleAction} disabled={loading}>
        {loading ? "Loading..." : "Start Action"}
      </button>

      {/* Spinner */}
      {loading && (
        <div style={{ marginTop: "20px" }}>
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}
