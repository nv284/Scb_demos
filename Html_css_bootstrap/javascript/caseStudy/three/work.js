// Wait for the form to be submitted
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

  // Simple email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear previous message
  message.textContent = "";

  // Validation checks
  if (name === "") {
    message.textContent = "Please enter your name.";
    return;
  }

  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email .";
    return;
  }

  // If all checks pass
  message.style.color = "green";
  message.textContent = "Form submitted successfully!";
});
