import { useState } from 'react';
import axios from 'axios';

export default function PaymentForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/payments', { phoneNumber, amount });
      console.log('Payment initiated:', response.data);
      // Handle the payment initiation response as needed
    } catch (error) {
      console.error('Error initiating payment:', error);
      // Handle the error
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <button type="submit">Pay</button>
    </form>
  );
}
