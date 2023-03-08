import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar({ isLoggedIn, user,favorites }) {
  console.log(isLoggedIn);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BookMyShow
        </Link>
        <div className="navbar-search">
          <input type="text" placeholder="Search movies" />
          <button>Search</button>
        </div>
        <div className="navbar-icons">
          <Link to="/wishlist">
            <FavoriteIcon />
            {/* <span>{favorites.length}</span> */}
          </Link>
          <div className="navbar-user">
            <AccountCircleIcon />
            <span>
              {isLoggedIn && user ? (
                <Link to="/userProfile">{user.displayName}</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
