

import { useState } from "react";

export default function Submenu() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggle = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: 300 }}>
      <h2>Menu with Submenu</h2>

      {/* Parent 1 */}
      <div
        onClick={() => toggle("products")}
        style={parentStyle}
      >
        Products {openMenu === "products" ? "▲" : "▼"}
      </div>

      {openMenu === "products" && (
        <div style={submenuBox}>
          <div style={childStyle}>Mobiles</div>
          <div style={childStyle}>Laptops</div>
          <div style={childStyle}>Accessories</div>
        </div>
      )}

      {/* Parent 2 */}
      <div
        onClick={() => toggle("services")}
        style={parentStyle}
      >
        Services {openMenu === "services" ? "▲" : "▼"}
      </div>

      {openMenu === "services" && (
        <div style={submenuBox}>
          <div style={childStyle}>Web Design</div>
          <div style={childStyle}>Development</div>
          <div style={childStyle}>SEO</div>
        </div>
      )}
    </div>
  );
}

const parentStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const submenuBox = {
  border: "1px solid #eee",
  borderTop: "none",
  padding: "8px 0",
  marginLeft: "10px",
};

const childStyle = {
  padding: "8px 12px",
  cursor: "pointer",
};
