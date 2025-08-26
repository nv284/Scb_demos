import React from "react";

function AccountBalance({ balance }) {
  return (
    <div style={styles.card}>
      <h2>Account Balance</h2>
      <p style={styles.balance}>${balance.toLocaleString()}</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    marginBottom: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  balance: {
    fontSize: "2em",
    color: "#2e7d32",
    marginTop: "10px",
  },
};

export default AccountBalance;
