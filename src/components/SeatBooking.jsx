import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import firebase from "../firebase";
// import {db} from '../firebase';
import './SeatBooking.css';
const SeatBooking = () => {
  // const { movieTitle } = useParams();
  // const [bookedSeats, setBookedSeats] = useState([]);
  // const [availableSeats, setAvailableSeats] = useState([]);
  // const [selectedSeats, setSelectedSeats] = useState([]);

  // useEffect(() => {
  //   const fetchSeats = async () => {
  //     // const db = firebase.firestore();
  //     const movieRef = db.collection("movies").doc(movieId);
  //     const movie = await movieRef.get();
  //     if (!movie.exists) {
  //       console.log("Movie not found!");
  //       return;
  //     }
  //     const data = movie.data();
  //     const booked = data.bookedSeats || [];
  //     const available = data.availableSeats || [];
  //     setBookedSeats(booked);
  //     setAvailableSeats(available);
  //   };
  //   fetchSeats();
  // }, [movieId]);

  //   const handleSeatSelect = (seat) => {
  //   const index = selectedSeats.indexOf(seat);
  //   if (index === -1) {
  //     setSelectedSeats([...selectedSeats, seat]);
  //   } else {
  //     setSelectedSeats([
  //       ...selectedSeats.slice(0, index),
  //       ...selectedSeats.slice(index + 1),
  //     ]);
  //   }
  // };

  const navigate=useNavigate();
  const [selectedSeat,setSelectedSeat]=useState([]);
  const handleSeatBook = () => {
    // TODO: Implement the booking of selected seats
    console.log("Selected seats: ", selectedSeat);
    navigate('/confirm');
  };

  // const[selectedSeat,setSelectedSeat]=useState([]);

  const [color,setColor]=useState('');
  const handleClick=(e)=>{
    setSelectedSeat(prevState=>[...prevState,e]);
    // setColor('green');
  }
  return (
    <div className="seat-booking">
      <div className="seat-map">
        <h3>Screen This Way</h3>
        <div className="seats">
          <div className="row">
            <div id="1" style={{backgroundColor:{color}}} onClick={(e)=>{handleClick(e.target.id)}}>1</div>
            <div id="2" style={{backgroundColor:{color}}} onClick={(e)=>{handleClick(e.target.id)}}>2</div>
            <div id="3" style={{backgroundColor:{color}}} onClick={(e)=>{handleClick(e.target.id)}}>3</div>
            <div id="4" onClick={(e)=>{handleClick(e.target.id)}}>4</div>
            <div id="5" onClick={(e)=>{handleClick(e.target.id)}}>5</div>
            <div id="6" onClick={(e)=>{handleClick(e.target.id)}}>6</div>
            <div id="7" onClick={(e)=>{handleClick(e.target.id)}}>7</div>
            <div id="8" onClick={(e)=>{handleClick(e.target.id)}}>8</div>
            <div id="9" onClick={(e)=>{handleClick(e.target.id)}}>9</div>
            <div id="10" onClick={(e)=>{handleClick(e.target.id)}}>10</div>
          </div>
          <div className="row">
            <div id="11" onClick={(e)=>{handleClick(e.target.id)}}>11</div>
            <div id="12" onClick={(e)=>{handleClick(e.target.id)}}>12</div>
            <div id="13" onClick={(e)=>{handleClick(e.target.id)}}>13</div>
            <div id="14" onClick={(e)=>{handleClick(e.target.id)}}>14</div>
            <div id="15" onClick={(e)=>{handleClick(e.target.id)}}>15</div>
            <div id="16" onClick={(e)=>{handleClick(e.target.id)}}>16</div>
            <div id="17" onClick={(e)=>{handleClick(e.target.id)}}>17</div>
            <div id="18" onClick={(e)=>{handleClick(e.target.id)}}>18</div>
            <div id="19" onClick={(e)=>{handleClick(e.target.id)}}>19</div>
            <div id="20" onClick={(e)=>{handleClick(e.target.id)}}>20</div>
          </div>
          <div className="row">
            <div id="21" onClick={(e)=>{handleClick(e.target.id)}}>21</div>
            <div id="22" onClick={(e)=>{handleClick(e.target.id)}}>22</div>
            <div id="23" onClick={(e)=>{handleClick(e.target.id)}}>23</div>
            <div id="24" onClick={(e)=>{handleClick(e.target.id)}}>24</div>
            <div id="25" onClick={(e)=>{handleClick(e.target.id)}}>25</div>
            <div id="26" onClick={(e)=>{handleClick(e.target.id)}}>26</div>
            <div id="27" onClick={(e)=>{handleClick(e.target.id)}}>27</div>
            <div id="28" onClick={(e)=>{handleClick(e.target.id)}}>28</div>
            <div id="29" onClick={(e)=>{handleClick(e.target.id)}}>29</div>
            <div id="30" onClick={(e)=>{handleClick(e.target.id)}}>30</div>
          </div>
        </div>
      </div>
      {/* <div>Movie name:{movieTitle}</div> */}
      {/* <div>Color is:{color}</div> */}
      <div className="selSeats">Selected seats are:{selectedSeat.map( e =>
          <div>{ e }</div>
        )}
      </div>
      <div className="seat-info">
        {/* <h3>Seat Information</h3>
        <p>
          <span className="seat available"></span> Available Seat
          <span className="seat selected"></span> Selected Seat
          <span className="seat booked"></span> Booked Seat
        </p> */}
        <button className="book-button" onClick={handleSeatBook}>
          Book Tickets
        </button>
      </div>
    </div>
  );
};

export default SeatBooking;
