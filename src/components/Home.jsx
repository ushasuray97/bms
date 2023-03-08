import React, { useEffect, useState } from 'react';
import './Home.css';
import GenreList from './GenreList';
import NowPlaying from './MovieCard';

function HomePage({ isLoggedIn }) {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [favorites, setFavorites] = useState([]);

  function handleAddToFavorites(movie) {
    setFavorites([...favorites, movie]);
  }

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

  useEffect(() => {
    if (selectedGenre) {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b5b606b1331e238f6c4af0e720c36103&with_genres=${selectedGenre.id}`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }
  }, [selectedGenre]);

  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
  }
  

  return (
    <div className='flex-container'>
      {(
        <>
          <div className='genres'>
            <h2>Genres</h2>
            <GenreList genres={genres} handleGenreSelect={handleGenreSelect} />
          </div>
          <div className='movies'>
  {movies.map(movie => (
    <NowPlaying 
      key={movie.id} 
      movie={movie} 
      isLoggedIn={isLoggedIn} 
      selectedGenre={selectedGenre} 
      favorites={favorites} 
      onAddToFavorites={handleAddToFavorites} 
    />
  ))}
</div>

        </>
      )}
    </div>
  );
}

export default HomePage;
