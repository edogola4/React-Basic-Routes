// src/pages/Movie.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // For testing purposes, when id is "1", we simulate a fetch.
    if (id === "1") {
      const movieData = {
        id: 1,
        title: "Doctor Strange",
        time: "115",
        genres: ["Action", "Adventure", "Fantasy"],
      };
      setMovie(movieData);
    }
    // You might want to handle other ids in a real app.
  }, [id]);

  if (!movie) return null;

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
