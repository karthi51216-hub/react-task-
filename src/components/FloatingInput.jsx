

import { useState } from "react";
import "./floating.css";

export default function FloatingInput() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: 360 }}>
      <h2>Floating Label Inputs</h2>

      <div className="field">
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder=" "   // important
        />
        <label htmlFor="name">Full Name</label>
      </div>

      <div className="field">
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder=" "   // important
        />
        <label htmlFor="email">Email</label>
      </div>
    </div>
  );
}
