

import { useState } from "react";

export default function InlineErrorForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // clear error while typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully ✅");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "300px" }}>
      <h2>Inline Error Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>
        )}

        {/* Email */}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ marginTop: "10px" }}
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
        )}

        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
