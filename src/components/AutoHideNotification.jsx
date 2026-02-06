
import { useEffect, useState } from "react";

export default function AutoHideNotification() {
  const [show, setShow] = useState(false);

  const showNotification = () => {
    setShow(true);
  };

  // auto hide after 3 seconds
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <button onClick={showNotification}>Show Notification</button>

      {show && (
        <div
          style={{
            marginTop: "20px",
            padding: "12px 16px",
            background: "#4CAF50",
            color: "#fff",
            borderRadius: "6px",
            width: "fit-content",
          }}
        >
          ✅ Action completed successfully!
        </div>
      )}
    </div>
  );
}
