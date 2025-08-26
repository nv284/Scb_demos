import React, { useState } from "react";
import BalanceCard from "./BalanceCard";
import TransactionForm from "./TransactionForm";

function Dashboard() {
  const [balance, setBalance] = useState(1000); // initial balance
  const userName = "John Doe";

  const handleTransaction = (type, amount) => {
    if (type === "deposit") {
      setBalance(balance + amount);
    } else if (type === "withdraw") {
      if (balance >= amount) {
        setBalance(balance - amount);
      } else {
        alert("❌ Insufficient funds");
      }
    }
  };

  return (
    <div className="col-md-8 mx-auto">
      <BalanceCard name={userName} balance={balance} />
      <TransactionForm onTransaction={handleTransaction} />
    </div>
  );
}

export default Dashboard;
