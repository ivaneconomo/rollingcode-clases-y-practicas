import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "../CustomCard/CustomCard";

const Main = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(({ data }) => {
        setCharacters(data.results);
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  return (
    <div className='container'>
      <h1 className='text-center text-light mt-5'>
        Bienvenido a Rick and Morty WEB
      </h1>
      <div className='row my-5 justify-content-center'>
        {characters.map((character) => (
          <CustomCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Main;
