import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Offers from "./pages/Offers";
const App = () => {
  return (
    <>
      <BrowserRouter>
      
       <Header />
        <Home/>
        <Offers/>
      </BrowserRouter>
       
      
    </>
  );
};

export default App;
