import "./App.css";
import React, { useState } from "react";
import Client from "./components/Client";

function App() {
  const [search, setSearch] = useState("");
  const [isClickable, setIsClickable] = useState(false);

  function validation(str) {
    if (str.length >= 3) return setIsClickable(true);
    else setIsClickable(false);
  }

  const [clients, setClients] = useState(null);

  function getClients() {
    fetch(`api/clients?search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setClients(data);
        console.log(data);
      })
      .catch((error) => console.log("Error:", error));
  }

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>
      <div>
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
      <div>{clients && clients.map((client) => <Client key={client.name} client={client} />)}</div>
    </div>
  );
}

export default App;
