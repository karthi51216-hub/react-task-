
import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200); // 200px after show
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Scroll down...</h2>

      {/* Dummy content */}
      <div style={{ height: "1500px", border: "1px dashed #ccc", marginTop: 20 }}>
        <p style={{ padding: 10 }}>Long page content...</p>
      </div>

      {show && (
        <button
          onClick={goTop}
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: "#222",
            color: "#fff",
          }}
        >
          Back to Top
        </button>
      )}
    </div>
  );
}
