import React from "react";

function Pet({ pet }) {
  return (
    <div className="Pet">
      {pet.name} - Vaccinated:
      <button>{pet.isVaccinated}h </button>
    </div>
  );
}

export default Pet;
