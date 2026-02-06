

import { useState, useEffect } from "react";

export default function DisableSubmitForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [isValid, setIsValid] = useState(false);

  // check form validity whenever input changes
  useEffect(() => {
    if (
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      form.email.includes("@")
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully ✅");
    console.log(form);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "300px" }}>
      <h2>Disable Submit Until Valid</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>

      <p style={{ marginTop: "10px", fontSize: "12px", color: isValid ? "green" : "red" }}>
        {isValid ? "Form is valid ✅" : "Fill all fields correctly"}
      </p>
    </div>
  );
}
