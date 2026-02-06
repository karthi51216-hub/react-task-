

import { useState } from "react";

export default function DisableAfterSubmit() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // disable inputs
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "300px" }}>
      <h2>Disable Inputs After Submit</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          disabled={submitted}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          disabled={submitted}
        />
        <br /><br />

        <button type="submit" disabled={submitted}>
          {submitted ? "Submitted" : "Submit"}
        </button>
      </form>

      {submitted && (
        <p style={{ marginTop: "10px", color: "green" }}>
          Form submitted successfully ✅
        </p>
      )}
    </div>
  );
}
