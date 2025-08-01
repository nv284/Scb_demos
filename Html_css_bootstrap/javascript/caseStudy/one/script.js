function calculateInterest() {
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);
  const n = Number(document.getElementById("frequency").value); // compound frequency

  const output = document.getElementById("output");

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
    output.innerHTML = " Please enter valid positive numbers.";
    return;
  }

  // Simple Interest formula: SI = (P × R × T) / 100
  const simpleInterest = (principal * rate * time) / 100;

  // Compound Interest formula: A = P(1 + R/(100n))^(nT)
  const compoundAmount = principal * Math.pow((1 + (rate / (100 * n))), n * time);
  const compoundInterest = compoundAmount - principal;

  output.innerHTML = `
    <h3>Results:</h3>
     <strong>Simple Interest:</strong> $${simpleInterest.toFixed(2)}<br>
     <strong>Compound Interest:</strong> $${compoundInterest.toFixed(2)}<br>
     <strong>Total Amount (Compound):</strong> $${compoundAmount.toFixed(2)}
  `;
}
