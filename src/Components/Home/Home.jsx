import React, { useState, useEffect } from "react";
import Search from "../Search";
import LastAdded from "../LastAdded";
import Navbar from "../Navbar";

const Home = () => {
  // const [movies, setMovies] = useState([]);

  // const [search, setSearch] = useState("");

  // const searchMovie = async (searchTerm) => {
  //   const url = `https://api.themoviedb.org/3/movie/550?api_key=92c4a0b42d6e367bfd6cff01f712c1ab&query=${searchTerm}&page=1&include_adult=false`;

  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   if (responseJson.results) {
  //     setMovies(responseJson.results);
  //   }
  // };

  // useEffect(() => {
  //   searchMovie(search);
  // }, [search]);

  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="search-container">
        {/* <Search search={search} setSearch={setSearch} /> */}
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
