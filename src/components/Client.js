import React from "react";
import Pet from "./Pet";

function Client({ client }) {
  return (
    <div>
      <div className="Client">
        <p>{client.name}</p>
        {client.pets.map((pet) => (
          <Pet key={pet.name} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default Client;
