// src/pages/Home.jsx
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Sample movie data with at least three movies.
    const moviesData = [
      { id: 1, title: "Doctor Strange" },
      { id: 2, title: "Inception" },
      { id: 3, title: "The Matrix" },
    ];
    setMovies(moviesData);
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
