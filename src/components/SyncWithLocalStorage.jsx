
import { useState, useEffect } from "react";

export default function SyncWithLocalStorage() {
  const [name, setName] = useState("");

  // 🔹 1. Page load / reload → localStorage read
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  // 🔹 2. State change → localStorage update
  useEffect(() => {
    if (name !== "") {
      localStorage.setItem("username", name);
    }
  }, [name]);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Sync State with localStorage</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>
        <strong>Stored Value:</strong> {name || "Nothing stored"}
      </p>
    </div>
  );
}
