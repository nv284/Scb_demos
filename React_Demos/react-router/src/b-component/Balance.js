import React from 'react';

const Balance = () => {
  const balance = 10000; // static
  return (
    <div>
      <h2>Your Account Balance</h2>
      <p>₹ {balance}</p>
    </div>
  );
};

export default Balance;
