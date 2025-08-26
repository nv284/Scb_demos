import React, { useState } from 'react';

const Loan = () => {
  const [amount, setAmount] = useState('');

  const applyLoan = (e) => {
    e.preventDefault();
    alert(`Loan of ₹${amount} applied successfully!`);
  };

  return (
    <form onSubmit={applyLoan}>
      <h2>Apply for Loan</h2>
      <input type="number" placeholder="Loan Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <button type="submit">Apply</button>
    </form>
  );
};

export default Loan;
