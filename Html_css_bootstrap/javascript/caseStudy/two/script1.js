// Users (you can expand this into an array or database)
const users = [
  {
    username: "john",
    password: "1234",
    account: {
      balance: 0,
      transactions: []
    }
  },
  {
    username: "alice",
    password: "abcd",
    account: {
      balance: 500,
      transactions: []
    }
  }
];

let currentUser = null; // will store the logged-in user object

// Format date-time string
function getFormattedDate() {
  return new Date().toLocaleString();
}

// Login function
function login() {
  const uname = document.getElementById("username").value.trim();
  const pwd = document.getElementById("password").value.trim();
  const error = document.getElementById("loginError");

  const user = users.find(u => u.username === uname && u.password === pwd);

  if (user) {
    currentUser = user;
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("userDisplay").textContent = currentUser.username;
    updateUI();
  } else {
    error.textContent = "❌ Invalid username or password.";
  }
}