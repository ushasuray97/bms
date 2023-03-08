import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import SeatBooking from './components/SeatBooking';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import './App.css';
import MovieDetails from './components/MoviePopup';
import NowPlaying from './components/MovieCard';
import LoginForm from './components/Login';
import Register from './components/Register';
import Confirm from './components/Confirm';
import UserProfile from './components/UserProfile';
import MoviePopup from './components/MoviePopup';
function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState("");
  const [user,setUser]=useState(null);
  const [favorites,setFavorites]=useState([]);
  return (
    <>
    <Router>
    <Navbar isLoggedIn={isLoggedIn} user={user} favorites={favorites} />

        
        <Routes>
          <Route exact path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path="/wishlist" element={<Wishlist isLoggedIn={isLoggedIn} />} />
          <Route path="/movie/:id" element={<NowPlaying isLoggedIn={isLoggedIn} setSelectedMovieTitle={setSelectedMovieTitle} />} />
          <Route path='/booking' element={<SeatBooking count={50}  selectedMovieTitle={selectedMovieTitle} isLoggedIn={isLoggedIn} />}/>
          <Route path='/login' element={<LoginForm setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>} />
          <Route path='/register' element={<Register setIsLoggedIn={setIsLoggedIn} movieName={selectedMovieTitle}/>} />
          <Route path="/booking/:title" element={<SeatBooking count={50} isLoggedIn={isLoggedIn} />} />
          <Route path="/checkout" element={<Checkout isLoggedIn={isLoggedIn} ticketPrice={250}/>} />
          <Route path="/userProfile" element={<UserProfile isLoggedIn={isLoggedIn} />} />
          <Route path='/confirm' element={<Confirm/>}/>
        </Routes>
      
    </Router>
    </>
  );
}

export default App;
