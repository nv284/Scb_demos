import './App.css';
import AccountBalance from './comp/AccountBalance';
import TransactionList from './comp/TransectionList';
import { useState } from 'react';


function App() {
 const [balance, setBalance] = useState(25000);

  const transactions = [
    { id: 1, type: "Deposit", amount: 4000 },
    { id: 2, type: "Withdrawal", amount: 500 },
    { id: 3, type: "Deposit", amount: 200 },
  ];

  return (
    
   <div style={styles.container}>
    
    <h1 style={styles.title}> Bank Dashboard</h1>
      <AccountBalance balance={balance} />
      <TransactionList transactions={transactions} />
    </div>
  );
}


const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "50px auto",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
};

export default App;
