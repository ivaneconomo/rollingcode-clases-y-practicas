import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "../CustomCard/CustomCard";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3001/products")
      .then(({ data }) => {
        setProducts(data);
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
        {products.map((prod) => (
          <CustomCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Main;
