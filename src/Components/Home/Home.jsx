import React from "react";
import Search from "../Search";
import LastAdded from "../LastAdded";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="search-container">
        <Search />
      </div>

      <div className="container-fluid movie-app">
        <div className="title-one">
          <h1 className="now-playing">Последние добавленные</h1>
        </div>

        <div className="row align-items-center justify-content-center">
          <LastAdded />
        </div>
      </div>
    </>
  );
};

export default Home;
