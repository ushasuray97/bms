import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = ({ movieTitle, ticketPrice }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const convenienceFeeRate = 0.0175; // 1.75%
  const convenienceFee = (ticketCount * ticketPrice * convenienceFeeRate).toFixed(2);
  const subtotal = (ticketCount * ticketPrice + Number(convenienceFee)).toFixed(2);

  const handleTicketCountChange = (e) => {
    const count = e.target.value;
    if (count >= 1) {
      setTicketCount(count);
    }
  };

  return (
    <div className="checkout-page">
      <div className="summary-section">
        <h2>Summary</h2>
        <p>{movieTitle}</p>
        <p>Ticket price: ${ticketPrice}</p>
        <label htmlFor="ticket-count">Number of tickets:</label>
        <input
          type="number"
          id="ticket-count"
          min="1"
          value={ticketCount}
          onChange={handleTicketCountChange}
        />
        <p>Convenience fee: ${convenienceFee}</p>
        <h3>Subtotal: ${subtotal}</h3>
      </div>
      <div className="payment-section">
        <h2>Payment</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select id="paymentMethod" required>
              <option value="">Select payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">Paypal</option>
            </select>
          </div>
        </form>
        <Link to="/confirmation">
          <button>Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
