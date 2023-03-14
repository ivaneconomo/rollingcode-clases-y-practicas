import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Image from "react-bootstrap/Image";
import CustomLoader from "../CustomLoader/CustomLoader";
import ListGroup from "react-bootstrap/ListGroup";

const ProductDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setCharacter(data);
        setIsLoading(true);
      })
      .catch((err) => console.warn(err));
  };

  return (
    <>
      {isLoading ? (
        <div className="d-flex align-items-center vh-100">
          <div className="container d-flex justify-content-evenly">
            <Image
              fluid={true}
              rounded={true}
              src={character.image}
              alt={character.name}
            ></Image>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <h1 className="text-light text-center">{character.name}</h1>
              <ListGroup variant="flush">
                <ListGroup.Item>Especie: {character.species}</ListGroup.Item>
                {character.type && (
                  <ListGroup.Item>Tipo: {character.type}</ListGroup.Item>
                )}
                <ListGroup.Item>Genero: {character.gender}</ListGroup.Item>
                <ListGroup.Item>Origen: {character.origin.name}</ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      ) : (
        <CustomLoader />
      )}
      ;
    </>
  );
};

export default ProductDetail;
