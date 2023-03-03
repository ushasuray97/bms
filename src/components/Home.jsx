import React, { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";
import './Home.css';
function HomePage() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b5b606b1331e238f6c4af0e720c36103')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=b5b606b1331e238f6c4af0e720c36103')
      .then(response => response.json())
      .then(data => setGenres(data.genres))
      .catch(error => console.log(error));
  }, []);
  return (
    <div className='flex-container'>
          {!isLoggedIn && (
            <>
              <div className='genres'>
              <h2>Genres</h2>
              <ul>
                {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              </div>
              <div className='movies'>
                {movies.map(movie => (
                  <MovieCard key={movie.id} movie={movie} isLoggedIn={isLoggedIn} />
                ))}
              </div>
            </>
          )}
        </div>
  );
}

export default HomePage;
