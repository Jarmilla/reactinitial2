import "./App.css";
import React, { useState } from "react";

function App() {
  function getClients() {
    fetch(`/api/clients?search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log("Error:", error));
  }

  const [search, setSearch] = useState("");
  const [isClickable, setIsClickable] = useState(false);

  function validation(str) {
    if (str.length >= 3) return setIsClickable(true);
    else setIsClickable(false);
  }
  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          validation(e.target.value);
        }}
      />
      <button onClick={() => getClients()} disabled={isClickable ? false : true}>
        Search
      </button>
    </div>
  );
}

export default App;
