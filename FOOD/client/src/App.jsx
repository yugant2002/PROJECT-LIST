import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import BanerCard from "./components/BanerCard";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<BanerCard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
