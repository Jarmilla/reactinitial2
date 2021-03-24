import React, { useState } from "react";

function Pet({ pet }) {
  const [isVaccinated, setIsVaccinated] = useState(pet.isVaccinated);
  function vaccinate() {
    console.log(pet.name, isVaccinated);
    setIsVaccinated(!isVaccinated);
    fetch("api/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: pet.name, isVaccinated: isVaccinated }),
    })
      .then((resp) => resp.json().then((data) => console.log(data)))
      .catch((err) => console.log(err));
  }
  return (
    <div className="Pet">
      {pet.name} - Vaccinated:
      <button onClick={vaccinate}> {isVaccinated ? "true" : "false"}</button>
    </div>
  );
}

export default Pet;
