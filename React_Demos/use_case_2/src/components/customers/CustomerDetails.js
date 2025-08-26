import React from "react";

const CustomerDetails = ({ customer }) => {
  if (!customer) {
    return (
      <div style={{ flex: 1 }}>
        <h3>Customer Details</h3>
        <p>Select a customer to view details.</p>
      </div>
    );
  }

  return (
    <div style={{ flex: 1 }}>
      <h3>Customer Details</h3>
      <p><strong>ID:</strong> {customer.id}</p>
      <p><strong>First Name:</strong> {customer.firstName}</p>
      <p><strong>Last Name:</strong> {customer.lastName}</p>
      <p><strong>Email:</strong> {customer.email}</p>
    </div>
  );
};

export default CustomerDetails;
