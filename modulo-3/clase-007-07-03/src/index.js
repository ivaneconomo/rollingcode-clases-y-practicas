import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const Test = () => {
  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/obtener-saludo");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createData = async () => {
    const userData = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8080/obtener-saludo",
        userData
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getDataById = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/obtener-saludo-por-id/:id");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          getData();
        }}
      >
        GET
      </button>
      <button
        onClick={() => {
          createData();
        }}
      >
        POST
      </button>
      <button
        onClick={() => {
          getDataById();
        }}
      >
        POST
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Test />
    </BrowserRouter>
  </React.StrictMode>
);
