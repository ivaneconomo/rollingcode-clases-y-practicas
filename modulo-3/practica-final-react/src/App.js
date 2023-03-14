import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";


function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/prod/:id" element={<Product />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
