import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Cards = ({ dogImages }) => {
console.log('dogImages',dogImages);

  return (
    <div>

      hola
  {/*    {dogImages.length > 0 ? dogImages.map((image,i)=>(

  <Card style={{ width: '18rem' }}>     
  <Card.Img variant="top" src={image} key={i}  />
</Card> 
     )) : ""
    }  */}
    
    </div>

  )
}

export default Cards;