
import { useState, useEffect } from "react";

export default function RetrieveLocalStorage() {
  const [name, setName] = useState("");

  // reload / first render time read pannum
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    localStorage.setItem("username", value);
  };

  const clearData = () => {
    localStorage.removeItem("username");
    setName("");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Retrieve from localStorage</h2>

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
