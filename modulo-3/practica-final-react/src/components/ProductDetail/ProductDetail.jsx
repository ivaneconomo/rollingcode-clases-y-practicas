import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "bootstrap";
import CustomLoader from "../CustomLoader/CustomLoader";

const ProductDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false)

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
      { isLoading ? (
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={character.image}
                alt={character.name}
              />
            </Carousel.Item>
          </Carousel>
          <div>
            <h2>{character.name}</h2>
            <p>{character.species}</p>
            <Button>Comprar ${character.type}</Button>
          </div>
        </div>
      ) : (
        <CustomLoader />
        )
      };
    </>
  );
};

export default ProductDetail;
