import React, { useState, useEffect } from "react";
import getBreeds from "./api/getBreeds";
import Select from "./components/Select";
import Cards from "./components/Cards";
import getDogImages from "./api/getDogImages";
import Nav from "./components/Nav";
import { SelectSubBreed } from "./components/SelectSubBreed";


function App() {
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [subBreed, setSubBreed] = useState("");
  const [dogImages, setDogImages] = useState([]);
 

  useEffect(() => {
    updateBreeds();
    selectedBreed("");
  }, []);

  const updateBreeds = () => {
    
    getBreeds()
      .then((newBreeds) => {
        const newBreedsList  =  Object.keys(newBreeds).map((key) => {
          return { breed: key,subBreed:newBreeds[key] }
        })
        console.log('pruebaaa', newBreedsList);
        setBreeds(newBreedsList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectedBreed = (breed)  =>{
    console.log('chegou a breed', breed);
    
    if(breed !== undefined && breed !== ""){
      getBreedsImages(breed);
    }
    setBreed(breed);
   
  }

  const selectedSubBreed = (subBreed)  =>{
    console.log('chegou a subBreed',subBreed );
    setSubBreed(subBreed);
  }


  const getBreedsImages = () => {
    
    getDogImages(breed)
      .then((dogImages) => {
      console.log('images',dogImages);
       
        setDogImages(dogImages || []);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div>
    {/*   <Nav /> */}
    <div className="app">
    <Select breeds={breeds} selectedBreed={selectedBreed} />
    <SelectSubBreed  breeds={breeds} selectedBreed={breed} selectedSubBreed={selectedSubBreed}/>
     
      <Cards dogImages={dogImages}/>
    </div>
    </div>
  );
}

export default App;
