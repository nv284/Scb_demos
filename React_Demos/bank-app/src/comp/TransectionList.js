import React from "react";

function TransactionList({ transactions }) {
  return (
    <div style={styles.card}>
      <h3>Recent Transactions</h3>
      <ul style={styles.list}>
        {transactions.map((txn) => (
          <li key={txn.id} style={styles.item}>
            <span>{txn.type}</span>
            <span
              style={{
                color: txn.type === "Withdrawal" ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              ${txn.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    borderBottom: "1px solid #eee",
    paddingBottom: "5px",
  },
};

export default TransactionList;
