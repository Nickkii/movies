import React from "react";
import Moment from "react-moment";

const ListMovie = (props) => {
  return (
    <>
      {props.movies &&
        props.movies.map((movie) => (
          <div className="movie-container" key={movie.id}>
            <div className="image-container d-flex justify-content-center">
              <a href={`/movie/${movie.id}`} alt="link-to-site">
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt="movie"
                />
              </a>
            </div>

            <div className="movie-info">
              <center>
                <a href={`/movie/${movie.id}`} alt="link-to-site">
                  <p className="movie-title font-weight-bold">{movie.title}</p>
                </a>
              </center>
              <p>
                <span className="movie-date font-weight-bold">
                  Release Date:
                </span>{" "}
                <Moment format="MMMM D, YYYY">{movie.release_date}</Moment>
              </p>
              <p>
                <span className="movie-overview font-weight-bold">
                  Overview:
                </span>{" "}
                {movie.overview}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default ListMovie;
