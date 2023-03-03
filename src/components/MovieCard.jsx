import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import MoviePopup from './MoviePopup';

function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [rating, setRating] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchRating = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=b5b606b1331e238f6c4af0e720c36103&language=en-US`
      );
      const data = await res.json();
      setRating(data.vote_average);
    };
    fetchRating();
  }, [movie.id]);

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} onClick={() => setShowPopup(true)} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        {/* <span>{movie.original_language.toUpperCase()}</span>
        {rating && <span className="movie-rating">{rating}</span>} */}
      </div>
      {showPopup && <MoviePopup movie={movie} />}
    </div>
  );
}

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=b5b606b1331e238f6c4af0e720c36103&language=en-US&page=1`
      );
      const data = await res.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="now-playing">
      <h2>Now Playing</h2>
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default NowPlaying;
