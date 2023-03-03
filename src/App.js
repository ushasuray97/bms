import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import SeatBooking from './components/SeatBooking';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MoviePopup';
import NowPlaying from './components/MovieCard';
import LoginForm from './components/Login';
import Register from './components/Register';
import Confirm from './components/Confirm';
function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState("");
  return (
    <>
    <Router>
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/wishlist" element={<Wishlist isLoggedIn={isLoggedIn} />} />
          <Route path="/movie/:id" element={<MovieDetails isLoggedIn={isLoggedIn} />} />
          <Route path='/booking' element={<SeatBooking  selectedMovieTitle={selectedMovieTitle} isLoggedIn={isLoggedIn} />}/>
          <Route path='/login' element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/register' element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          {/* <Route path="/seatbooking/:id" element={<SeatBooking isLoggedIn={isLoggedIn} />} /> */}
          <Route path="/checkout" element={<Checkout isLoggedIn={isLoggedIn} />} />
          <Route path='/confirm' element={<Confirm/>}/>
        </Routes>
      
    </Router>
    </>
  );
}

export default App;
