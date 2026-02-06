

import { useState, useEffect } from "react";

export default function LocalStorageExample() {
  const [name, setName] = useState("");

  // page load aagumbodhu localStorage read pannum
  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  // input change → localStorage save
  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    localStorage.setItem("username", value);
  };

  // clear localStorage
  const clearData = () => {
    localStorage.removeItem("username");
    setName("");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>localStorage Example</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      />

      <p>
        <strong>Stored Name:</strong> {name || "Nothing stored"}
      </p>

      <button onClick={clearData}>Clear</button>
    </div>
  );
}
