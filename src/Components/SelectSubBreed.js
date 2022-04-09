import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';

export const SelectSubBreed = ({ breeds, selectedBreed, selectedSubBreed }) => {
    console.log('selectbreed', breeds, selectedBreed);

    const result = breeds.filter((breed) => breed.breed === selectedBreed);
    /*  result[0].subBreed; */
    console.log('result', result[0]?.subBreed);
    const subBreed = result.length > 0 ? result[0].subBreed : ["sin subrazas"];



    return (
        <div>
           <Form.Select onChange={(e) => selectedSubBreed(e.target.value)}>
                {subBreed.map((subBreed, i) => (
                    <option className="text-transform" value={subBreed} key={i}>{subBreed} </option>
                ))}
            </Form.Select> 


        </div>
    )
}
