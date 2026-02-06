
import { useState } from "react";

export default function FormWithCard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(form); // store submitted data
    setForm({ name: "", email: "", age: "" }); // clear form
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "400px" }}>
      <h2>User Form</h2>

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

        <input
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Card layout */}
      {submittedData && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>User Details</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}
