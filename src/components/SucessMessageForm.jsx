

import { useState } from "react";

export default function SuccessMessageForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true); // show success message
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "300px" }}>
      <h2>Form Submit</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Success message */}
      {success && (
        <p style={{ marginTop: "15px", color: "green", fontWeight: "bold" }}>
          ✔ Form submitted successfully!
        </p>
      )}
    </div>
  );
}
