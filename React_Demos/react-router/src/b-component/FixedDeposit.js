import React, { useState } from 'react';

const FixedDeposit = () => {
  const [amount, setAmount] = useState('');
  const [deposits, setDeposits] = useState([]);

  const openFD = (e) => {
    e.preventDefault();
    setDeposits([...deposits, { id: Date.now(), amount }]);
    setAmount('');
  };

  return (
    <div>
      <h2>Fixed Deposits</h2>
      <form onSubmit={openFD}>
        <input type="number" placeholder="FD Amount" value={amount} onChange={e => setAmount(e.target.value)} />
        <button type="submit">Open FD</button>
      </form>
      <ul>
        {deposits.map((fd) => (
          <li key={fd.id}>FD of ₹{fd.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default FixedDeposit;
