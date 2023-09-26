import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    fetch('https://swapi.dev/api/films/').then(response => {
        return response.json();
      }).then(data => {
        const transformedMovies = data.results.map(movideData => {
          return {
            id: movideData.episode_id,
            title: movideData.title,
            releaseDate: movideData.release_date,
            openingText: movideData.opening_crawl
          }
        })
        setMovies(transformedMovies);
      })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
