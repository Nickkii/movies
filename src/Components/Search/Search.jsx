import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "react-moment";

const Search = () => {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=92c4a0b42d6e367bfd6cff01f712c1ab&query=${query}&page=1&include_adult=false`;

    try {
      const resultMovie = await fetch(url);
      const data = await resultMovie.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="d-flex input-group-lg" onSubmit={searchMovie}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Найти..."
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="btn btn-outline-success" type="submit">
          Найти
        </button>
      </form>
      <div className="card-list">
        {movies.map((movie) => (
          <>
            <div className="searchCard" key={movie.id}>
              <a href={`/movie/${movie.id}`}>
                <img
                  className="searchCardImg"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                />
              </a>
              <div className="movie-info">
                <a href={`/movie/${movie.id}`}>
                  <h4 className="movieName">{movie.title}</h4>
                </a>
                <p className="movieRating">
                  <span>Рейтинг: {movie.vote_average}</span>
                </p>
                <p className="movieReleaseDate">
                  <span>Дата выхода:</span>{" "}
                  <Moment format="YYYY">{movie.release_date}</Moment>{" "}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Search;
