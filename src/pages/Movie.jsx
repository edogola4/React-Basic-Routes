/*import { useEffect, useState } from "react";

function Movie() {
  return (
    <>
      <header>
        {/* What component should go here? *}
      </header>
      <main>
        {/* Movie info here! *}
      </main>
    </>
  );
};

export default Movie;
*/


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar"; 

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Simulate fetching the movie data.
    // In a real application, you'd fetch from an API using the id.
    if (id === "1") {
      const movieData = {
        id: 1,
        title: "Doctor Strange",
        time: "115",
        genres: ["Action", "Adventure", "Fantasy"],
      };
      setMovie(movieData);
    }
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
