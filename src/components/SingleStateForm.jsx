
import { useState } from "react";

export default function SingleStateForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  // one handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Single State Form</h2>

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

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <br /><br />

      <p><strong>Stored Values:</strong></p>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
