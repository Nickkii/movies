const Search = () => {
  return <></>;
};

// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import CardMovie from "../CardMovie";

// const Search = () => {
//   const [movies, setMovies] = useState([]);
//   const getMovies = () => {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/movie/550?api_key=92c4a0b42d6e367bfd6cff01f712c1ab"
//       )
//       .then((response) => {
//         setMovies(response.data);
//       });
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);

//   const [value, setValue] = useState("");

//   const filteredMovies = movies.filter((movie) => {
//     return movie.name.toLowerCase().includes(value.toLowerCase());
//   });

//   return (
//     <>
//       <nav className="navbar">
//         <div className="container-fluid searchInput">
//           <form className="d-flex input-group-lg">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Найти..."
//               aria-label="Search"
//               onChange={(event) => setValue(event.target.value)}
//             ></input>
//             <button className="btn btn-outline-success" type="submit">
//               Найти
//             </button>
//           </form>
//         </div>
//       </nav>
//       <div className="searchMoviesList">
//         {filteredMovies.map((movie, index) => {
//           return (
//             <>
//               <CardMovie movie={movie} key={index} />
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// const Search = (props) => {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="container-fluid searchInput">
//           <form className="d-flex input-group-lg">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Найти..."
//               aria-label="Search"
//               value={props.value}
//               // onChange={(event) => props.setSearch(event.target.value)}
//               onChange={(event) => console.log(event.target.value)}
//             ></input>
//             <button className="btn btn-outline-success" type="submit">
//               Найти
//             </button>
//           </form>
//         </div>
//       </nav>
//     </>
//   );
// };

export default Search;
