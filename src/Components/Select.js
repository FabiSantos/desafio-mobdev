import React from "react";
import { Form } from "react-bootstrap";
import '../components/Select.css'

const Select = ({ breeds, selectedBreed }) => {
  return (
    <div>
      <Form.Select aria-label="Default select example" onChange={(e) => selectedBreed(e.target.value)}>
        {/* <option value={null}>Razas</option> */}
        {breeds.map((breed, i) => (
          <option className="text-transform" value={breed.breed} key={i}>{breed.breed} </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default Select;
