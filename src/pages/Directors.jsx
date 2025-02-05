/*import { useEffect, useState } from "react";

function Directors() {
  return (
    <>
      <header>
        {/* What component should go here? *}
      </header>
      <main>
        {/* Director info here! *}
      </main>
    </>
  );
};

export default Directors;
*/


import NavBar from "./NavBar"; // Adjust the import path as needed

// The directors data as specified in your test.
const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

function Directors() {
  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;
