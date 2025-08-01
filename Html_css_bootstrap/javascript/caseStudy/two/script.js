// Bank account object
const account = {
  owner: "John Doe",
  balance: 0,
  transactions: [] // array to store transaction history
};

// Format date-time string
function getFormattedDate() {
  return new Date().toLocaleString();
}

// Deposit money
function deposit() {
  const amount = Number(document.getElementById("amount").value);
  if (amount <= 0 || isNaN(amount)) {
    alert("Please enter a valid deposit amount.");
    return;
  }

  account.balance += amount;

  // Create transaction object
  const transaction = {
    type: "Deposit",
    amount: amount,
    time: getFormattedDate()
  };

  account.transactions.push(transaction);
  updateUI();
}

// Withdraw money
function withdraw() {
  const amount = Number(document.getElementById("amount").value);
  if (amount <= 0 || isNaN(amount)) {
    alert("Please enter a valid withdrawal amount.");
    return;
  }

  if (amount > account.balance) {
    alert("Insufficient balance.");
    return;
  }

  account.balance -= amount;

  const transaction = {
    type: "Withdrawal",
    amount: amount,
    time: getFormattedDate()
  };

  account.transactions.push(transaction);
  updateUI();
}

// Update balance and transaction list in UI
function updateUI() {
  document.getElementById("balance").textContent = account.balance.toFixed(2);

  const list = document.getElementById("transactionList");
  list.innerHTML = "";

  // Loop through transaction array (uses array, object, and string)
  account.transactions.forEach((txn, index) => {
    const message = `${index + 1}. ${txn.type} of $${txn.amount.toFixed(2)} on ${txn.time}`;
    const li = document.createElement("li");
    li.textContent = message;
    list.appendChild(li);
  });

  // Clear input
  document.getElementById("amount").value = "";
}
