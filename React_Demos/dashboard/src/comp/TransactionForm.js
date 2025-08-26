import React, { useState } from "react";

function TransactionForm({ onTransaction }) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("deposit");

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseFloat(amount);
    if (isNaN(num) || num <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    onTransaction(type, num);
    setAmount(""); // reset input
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-2">
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default TransactionForm;
