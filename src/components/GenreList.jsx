import React from 'react';
import './GenreList.css';

function GenreList({ genres, handleGenreSelect }) {
  return (
    <ul>
      {genres.map(genre => (
        <li key={genre.id} onClick={() => handleGenreSelect(genre)}>
          {genre.name}
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
