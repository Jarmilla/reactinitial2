import React, { useState } from "react";

function Pet({ pet }) {
  const [isVaccinated, setIsVaccinated] = useState(pet.isVaccinated);
  const [isLoading, setLoading] = useState(false);

  function vaccinate() {
    console.log(pet.name, isVaccinated);

    setLoading(true);
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
    setLoading(false);
  }
  return (
    <div className="Pet">
      {pet.name} - Vaccinated:
      <button onClick={vaccinate}>{isLoading ? "..." : isVaccinated ? "true" : "false"}</button>
    </div>
  );
}

export default Pet;
