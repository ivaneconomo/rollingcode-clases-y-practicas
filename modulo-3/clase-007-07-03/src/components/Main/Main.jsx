import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { endPoints, messages } from "../../utils/configs";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Main = () => {
  const [products, setProducts] = useState([]);
  const URL_BASE = process.env.REACT_APP_URL_BASE;
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(`${URL_BASE}${endPoints.products}`);
      setProducts(data);
    } catch (error) {
      alert(messages.failGetProducts);
      navigate("/");
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="text-center">Bienvenidos a Software Store</h1>
      <div className="container mt-4 vh-100">
        <div className="row justify-content-center">
          {products.length >= 1 ? (
            products.map((prod) => <Card key={prod.id} prod={prod} />)
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
