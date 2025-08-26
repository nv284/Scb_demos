import React, { useState } from "react";

function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [duration, setDuration] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const n = parseInt(duration);
    const annualRate = parseFloat(rate);

    if (isNaN(P) || isNaN(n) || isNaN(annualRate) || P <= 0 || n <= 0 || annualRate <= 0) {
      alert("Enter valid positive numbers for all fields.");
      return;
    }

    const r = annualRate / 12 / 100;
    const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

    setResult(futureValue.toFixed(2));
  };

  return (
    <div className="card shadow-sm p-4 mt-4">
      <h4 className="mb-3">📈 SIP Calculator</h4>
      <div className="row g-2">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Monthly Investment (₹)"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Duration (months)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Annual Interest Rate (%)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-success" onClick={calculateSIP}>
          Calculate SIP
        </button>
      </div>

      {result && (
        <div className="alert alert-info mt-4 text-center">
          🎯 Estimated Future Value: <strong>₹{result}</strong>
        </div>
      )}
    </div>
  );
}

export default SipCalculator;
