import React, { useState, useEffect } from "react";
import Moment from "react-moment";

const LastAdded = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=92c4a0b42d6e367bfd6cff01f712c1ab&language=ru&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <>
      {movies &&
        movies.map((movie) => (
          <div
            className="movie-container col-md-3 justify-content-center"
            key={movie.id}
          >
            <div>
              <a href={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                />
              </a>
            </div>

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
        ))}
    </>
  );
};

export default LastAdded;
