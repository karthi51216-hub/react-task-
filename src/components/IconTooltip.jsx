

export default function IconTooltip() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Tooltip on Icon Hover</h2>

      <div className="tooltip-wrapper">
        {/* Icon */}
        <span className="icon">ℹ️</span>

        {/* Tooltip */}
        <span className="tooltip-text">
          This is helpful tooltip text
        </span>
      </div>
    </div>
  );
}
