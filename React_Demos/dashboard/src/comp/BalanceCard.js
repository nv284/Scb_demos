import React from "react";

function BalanceCard({ name, balance }) {
  return (
    <div className="card shadow-sm text-center mb-4">
      <div className="card-body">
        <h4 className="card-title">Hello, {name}</h4>
        <h2 className="text-primary">${balance.toFixed(2)}</h2>
        <p className="text-muted">Current Balance</p>
      </div>
    </div>
  );
}

export default BalanceCard;
