

export default function Popup({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h3>Popup Title</h3>
        <p>Cancel button click pannina popup close aagum.</p>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  );
}
