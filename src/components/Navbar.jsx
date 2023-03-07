import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BookMyShow
        </Link>
        <div className="navbar-search">
          <input type="text" placeholder="Search movies" />
          <button>
            Search
          </button>
        </div>
        <div className="navbar-icons">
          <Link to="/wishlist">
            <FavoriteIcon/>
          </Link>
          <div className="navbar-user">
            <Link to="/userProfile">
            <AccountCircleIcon/>
            <span>User</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
