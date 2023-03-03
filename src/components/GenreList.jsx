import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GenreList.css';
function GenreList() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch genres from API
    axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: 'b5b606b1331e238f6c4af0e720c36103',
        language: 'en-US',
      },
    })
    .then(response => {
      setGenres(response.data.genres);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    // Fetch movies from API based on selected genre
    if (selectedGenre) {
      axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: 'YOUR_API_KEY',
          language: 'en-US',
          sort_by: 'popularity.desc',
          with_genres: selectedGenre.id,
        },
      })
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }, [selectedGenre]);

  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div>
      <h2>Genres</h2>
      <ul>
        {genres.map(genre => (
          <li key={genre.id} onClick={() => handleGenreSelect(genre)}>
            {genre.name}
          </li>
        ))}
      </ul>
      <h2>Movies</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <div className="movie-card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span>Language: {movie.original_language.toUpperCase()}</span>
              <span className="movie-rating">Rating: {movie.vote_average}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default GenreList;