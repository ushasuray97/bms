import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SeatBooking.css';

const SeatBookingPage = ({ isLoggedIn, count, movieName, onBookingSubmit }) => {
const [seats, setSeats] = useState(Array.from({length: count}, (_, index) => ({
id: index + 1,
status: 'available',
})));

const navigate=useNavigate();
const handleSeatClick = (seatId) => {
const updatedSeats = seats.map((seat) => {
if (seat.id === seatId) {
return {
...seat,
status: seat.status === 'available' ? 'selected' : 'available',
};
}
return seat;
});
setSeats(updatedSeats);
};

const handleBookingSubmit = () => {
const selectedSeats = seats.filter((seat) => seat.status === 'selected');
if (selectedSeats.length > 0) {
// onBookingSubmit(selectedSeats);
navigate('/checkout');
}
console.log('booked');
};

return (
  <>
<div className="seat-booking-page">
<h1>Seat Booking Page - {movieName}</h1>
<div className="seat-map">
{seats.map((seat) => (
<div key={seat.id} className={`seat ${seat.status}`} onClick={() => handleSeatClick(seat.id)}>
{seat.id}
</div>

))}
</div>
<button onClick={handleBookingSubmit}>Submit</button>
</div>
</>
);

};

export default SeatBookingPage;