import React, { useState, useEffect } from "react";
import { successAlert, errorAlert } from "../../utils/customAlert";
import { messages } from "../../utils/configs";
import { endPoints } from "../../utils/configs";
import axios from "axios";

const Register = () => {
  const URL_BASE = process.env.REACT_APP_URL_BASE;
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const validationFields = {
    user: /^[a-zA-Z0-9_-]{4,16}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validationFields.name.test(userData.name)) {
      errorAlert(messages.successLogTitle, messages.successLog, () => {
        console.log("test");
      });
      return;
    }
    if (!validationFields.email.test(userData.email)) {
      errorAlert(messages.successLogTitle, messages.successLog, () => {
        console.log("test");
      });
      return;
    }
    if (!validationFields.password.test(userData.password)) {
      errorAlert(messages.successLogTitle, messages.successLog, () => {
        console.log("test");
      });
      return;
    }
    if (!userData.password === userData.passwordCheck) {
      errorAlert(messages.successLogTitle, messages.successLog, () => {
        console.log("test");
      });
      return;
    }
    
    
    try {
      const resp = await axios.post(`${URL_BASE}${endPoints.register}`, userData);
      successAlert(messages.successLogTitle, messages.successLog, () => {
        console.log("test");
      });
    } catch (error) {
      errorAlert(messages.successLogTitle, messages.successLog, () => {
        console.log("test");
      });
    }
  };

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container vh-100 justify-content-center d-flex flex-column">
      <div className="row justify-content-center">
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={handleChange}
              />
              <label
                htmlFor="exampleInputPassword2"
                className="form-label mt-1"
              >
                Repetir contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                name="passwordCheck"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
