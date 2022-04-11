import React, { useState, useEffect } from "react";
import { getBreeds, getDogImages } from "./api/getBreeds";
import Container from 'react-bootstrap/Container';
import { Form } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Icon from '@mdi/react';
import { mdiDog, mdiDogSide, mdiDogSideOff } from '@mdi/js';
import { Navbar } from "react-bootstrap";
import logo from '../src/img/patita_logo.png'

function App() {
  // breeds variables
  const [breed, setBreed] = useState("");
  const [breedsList, setBreedsList] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  // subBreeds variables
  const [subBreedList, setSubBreedList] = useState([]);
  // images variables
  const [imageList, setImageList] = useState([]);
  const [filteredImageList, setFilteredImageList] = useState([]);


  useEffect(() => {
    getDogs();
    handleSelectedBreed(selectedBreed);
  }, [selectedBreed]);

  //convertir obj en lista  ej.: [{...}, {...}]
  const breedsAsList = (dogs) => {
    return Object.keys(dogs).map((key) => {
      return { breed: key, subBreed: dogs[key] };
    })
  };

  // obtener razas desde la API y convertir en lista
  const getDogs = () => {
    getBreeds()
      .then((breeds) => {
        setBreedsList(breedsAsList(breeds));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // raza seleccionada por el usuario
  const handleSelectedBreed = (dog) => {
    if (dog) {
      setBreed(dog.breed);
      setSubBreedList(dog.subBreed);
      getImages(dog);
    }
  }

  // sub-raza seleccionada por el usuario
  const handleSelectedSubBreed = (subBreedName) => {
    const subBreed = `${breed}-${subBreedName}`;
    const filteredImgList = imageList.filter(
      (image) => image.indexOf(subBreed) === 30
    );
    setFilteredImageList(filteredImgList);
  }

  const getImages = (dog) => {
    getDogImages(dog.breed)
      .then((images) => {
        setImageList(images);
        setFilteredImageList(dog.subBreed.length === 0 ? images : []);

      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container-home">
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Dog API Project
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className="container-selects">
        {/* 🐶 */}
        <Icon className="select-icons" size={2} color="#222" path={mdiDog}/>
        <Form.Select onChange={(e) => setSelectedBreed(JSON.parse(e.target.value))}>
            <option value="null">Raza</option>
          {breedsList.map((breed, i) => (
            <option value={JSON.stringify(breed)} key={`breed${i}`}>{breed.breed} </option>
          ))}
        </Form.Select>
      </div>
      <div className="container-selects">
        {/* 🐕 */}
        <Icon className="select-icons" color={subBreedList.length === 0 ? 'grey' : ''} size={2} path={subBreedList.length === 0 ? mdiDogSideOff : mdiDogSide} />
        <Form.Select className="border" disabled={subBreedList.length === 0} onChange={(e) => handleSelectedSubBreed(e.target.value)}>
          <option value="null">Sub-Raza</option>
          {subBreedList.map((subBreed, i) => (
            <option value={subBreed} key={`subBreed${i}`}>{subBreed} </option>
          ))}
        </Form.Select>
      </div>
      <Container className="image-cards">
        <Row className="images-center">
          {filteredImageList.map((img, i) => (
            <Col className="images-center" key={`image${i}`}>
              <Card style={{ width: '18rem', border: "none" }}>
                <Card.Img variant="top" src={img} />
              </Card>
            </Col>

          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;