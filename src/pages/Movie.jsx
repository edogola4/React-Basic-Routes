// src/pages/Movie.jsx
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  
  // Synchronously assign movie data when id is "1"
  const movie =
    id === "1"
      ? {
          id: 1,
          title: "Doctor Strange",
          time: "115",
          genres: ["Action", "Adventure", "Fantasy"],
        }
      : null;

  if (!movie) {
    return (
      <>
        <NavBar />
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </>
  );
}

export default Movie;
