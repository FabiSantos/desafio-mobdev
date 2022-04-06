
import React, {useState} from 'react'


const initialBreeds = [
    {
      id: 1,
      name: "Boxer",
    },
    {
      id: 2,
      name: "Husky",
    },
  ];

 const Select = () => {
     const [breeds, setBreeds] = useState(initialBreeds);
      
    /*   const Select = ({ updateDog }) => {
        const [breeds, setBreeds] = useState(initialBreeds);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          updateBreeds();
        }, []);
      
        const updateBreeds = () => {
          getBreeds()
              .then((newBreeds) => {
                  setBreeds(newBreeds);
              })
              .catch((error) => {
                console.log(error);
                setError("Error al cargar las razas");
              })
        } */
  return (
   <select>
       {breeds.map((breed) => (
              <option value={breed.id}>{breed.name}</option>
       ))}
 
    

   </select>
  )
}

export default Select;