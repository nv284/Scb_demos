import React, { useState } from "react";

const CustomerForm = ({ onAddCustomer }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) return;
    onAddCustomer({ firstName, lastName, email });
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div style={{ flex: 1, marginRight: "20px" }}>
      <h3>Add Customer</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label><br />
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name</label><br />
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email</label><br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
