import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => console.warn(err));
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={product.img}
            alt={product.title}
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <h2>{product.title}</h2>
        <p>{product.desc}</p>
        <Button>Comprar ${product.price}</Button>
      </div>
    </>
  );
};

export default ProductDetail;
