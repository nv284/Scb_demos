import React, { useState } from 'react';

const Cards = () => {
  const [type, setType] = useState('credit');

  const requestCard = (e) => {
    e.preventDefault();
    alert(`${type} card requested successfully!`);
  };

  return (
    <form onSubmit={requestCard}>
      <h2>Request Card</h2>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
        <option value="forex">Forex Card</option>
      </select>
      <button type="submit">Request</button>
    </form>
  );
};

export default Cards;
