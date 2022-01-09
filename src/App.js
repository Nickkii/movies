import "./App.css";
import React from "react";
import Home from "./Components/Home";
import Popular from "./Components/Popular";
import DetailsMovie from "./Components/DetailsMovie";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/popular" element={<Popular />} />
            <Route path="/movie/:id" element={<DetailsMovie />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
};

export default App;
