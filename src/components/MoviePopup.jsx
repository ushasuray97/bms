import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoviePopup.css';

function MoviePopup({ movie, onClose }) {
  const [showPopup, setShowPopup] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // initially, user is not logged in

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigate=useNavigate();
  const handleClose = () => {
    setShowPopup(false);
    onClose();
  };

  const handleBookTickets = () => {
    if (isLoggedIn) {
      // User is logged in, allow booking tickets
      // Insert your booking tickets logic here
      setIsLoggedIn(true);
      console.log('Book tickets for:', movie.title);
      navigate(`/booking/${movie.title}`);
    } else {
      // User is not logged in, redirect to login page
      console.log('User not logged in, redirect to login page');
      // Insert your redirect logic here
      navigate('/login');
    }
    // navigate('/booking');
  };

  return (
    <div className={`movie-popup ${showPopup ? 'show' : 'hide'}`}>
      <div className="movie-popup-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <img src={imageUrl} alt={movie.title} />
        <div className="movie-info">
          <h3 className='movie-popup__title'>{movie.title}</h3>
          <p className='movie-popup__description'>{movie.overview}</p>
          <div className="popup-actions">
            <button>Add to Wishlist</button>
            <button onClick={handleBookTickets}>Book Tickets</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePopup;
