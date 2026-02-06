

import { useState } from "react";

export default function RequiredValidationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // required field validation
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.age) newErrors.age = "Age is required";

    setErrors(newErrors);

    // if no errors
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully ✅");
      console.log(form);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "320px" }}>
      <h2>Required Field Validation</h2>

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
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
        )}

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        {errors.age && (
          <p style={{ color: "red", fontSize: "12px" }}>{errors.age}</p>
        )}

        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
