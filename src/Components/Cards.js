import React from 'react';


const Cards = ({ dog, updateDog }) => {
  console.log(dog);
  return (
    <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
      <img src={dog.image}
        alt='dog'></img>
      <p>{dog.breed.name}</p>
    </div>
  )
}

export default Cards;