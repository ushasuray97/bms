import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
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
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="navbar-icons">
          <Link to="/wishlist">
            <i className="fas fa-heart"></i>
          </Link>
          <div className="navbar-user">
            <i className="fas fa-user-circle"></i>
            <span>User</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
