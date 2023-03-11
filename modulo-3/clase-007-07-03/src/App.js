import React from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";

import Home from "./pages/Home";
import ProdDetail from "./pages/ProdDetail";
import Error404 from "./pages/Error404";



function App() {
  const isLog = true;
  
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/prod/:id" element={isLog ? <ProdDetail /> : <Error404 />} />
          <Route path="*" element={ <Home /> } />
          <Route path="*" element={ <Home /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
