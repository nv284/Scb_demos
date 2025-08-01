document.getElementById("customerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const account = document.getElementById("account").value;

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const contactError = document.getElementById("contactError");
  const accountError = document.getElementById("accountError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  contactError.textContent = "";
  accountError.textContent = "";

  let isValid = true;

  // Name validation (alphabets only)
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameError.textContent = "Please enter only alphabets.";
    isValid = false;
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Contact number validation
  if (!/^[7-9][0-9]{9}$/.test(contact)) {
    contactError.textContent = "Enter valid 10-digit contact starting with 7-9.";
    isValid = false;
  }

  // Account type validation
  if (account === "") {
    accountError.textContent = "Please select an account type.";
    isValid = false;
  }

  // If all inputs are valid
  if (isValid) {
    const customer = { name, email, contact, account };

    // Add to table
    const table = document.getElementById("customerTableBody");
    const row = table.insertRow();
    row.insertCell(0).textContent = customer.name;
    row.insertCell(1).textContent = customer.email;
    row.insertCell(2).textContent = customer.contact;
    row.insertCell(3).textContent = customer.account;

    // Reset form
    document.getElementById("customerForm").reset();
  }
});
