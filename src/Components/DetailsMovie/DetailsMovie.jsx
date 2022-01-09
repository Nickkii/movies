import LoadingPage from "../LoadingPage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

const DetailsMovie = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=92c4a0b42d6e367bfd6cff01f712c1ab&language=ru/`
      );
      const data = await response.json();
      setDetails(data);
    };
    getCharacter();
  }, [id]);

  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>

      {details ? (
        <>
          <div className="DetailsMovieContent">
            <div className="DetailsMovieMain">
              <img
                src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
                alt={`Постер к фильму ${details.title}`}
              />
              <div className="DetailsMovieText">
                <h1>{details.title}</h1>
                <h2>{details.release_date.slice(0, 4)}</h2>
              </div>
            </div>
            <div className="DetailsMovieDecr">
              <p>Рейтинг: {details.vote_average}</p>
              <p>Дата выхода: {details.release_date}</p>

              <p>Краткое описание: {details.overview}</p>

              <p>{details.media_type}</p>
            </div>

            <a href="/" class="button">
              Вернуться на главную
            </a>
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default DetailsMovie;
