import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const CheckoutPage = ({ movieName, ticketPrice, onCheckoutSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  console.log(ticketPrice);
  const convenienceFee = (numTickets * ticketPrice) * 0.0175;
  const subtotal = numTickets * (ticketPrice || 0) + convenienceFee;

  const navigate=useNavigate();
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNumTicketsChange = (event) => {
    setNumTickets(event.target.value);
  };

  const handleCheckoutSubmit = (event) => {
    event.preventDefault();
    // onCheckoutSubmit({
    //   firstName,
    //   lastName,
    //   email,
    //   numTickets,
    //   subtotal,
    // });
    alert("Your seats are Booked");
    navigate('/');
  };

  return (
    <div className="checkout-page">
      <div className="summary-section">
        <h2>Order Summary</h2>
        <p>Movie: {movieName}</p>
        <p>Ticket Price: ${ticketPrice.toFixed(2)}</p>
        <label>
          Number of Tickets:
          <input type="number" value={numTickets} min="1" onChange={handleNumTicketsChange} />
        </label>
        <p>Convenience Fee: ${convenienceFee.toFixed(2)}</p>
        <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
      </div>
      <div className="payment-section">
        <h2>Payment Information</h2>
        <form onSubmit={handleCheckoutSubmit}>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} required />
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
          <label>
            Payment Method:
            <select>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bitcoin">Bitcoin</option>
            </select>
          </label>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
