import React, { useState, useEffect } from "react";
import Select from "./components/Select";
import Cards from "./components/Cards";
import getDog from "./api/getDog";
/* import Nav from "./components/Nav"; */

const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: "",
  },
};
function App() {
  const [dog, setDog] = useState(initialDog);

  useEffect(() => {
    updateDog(0);
  }, []);

  const updateDog = (breedId) => {
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <Select updateDog={updateDog} />
      <Cards dog={dog} updateDog={updateDog} />
    </div>
  );
}

export default App;
