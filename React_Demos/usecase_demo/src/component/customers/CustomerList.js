import React, { useState, useEffect } from 'react';
import customerData from '../data/customers.json'; // importing local JSON

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  // Load data on component mount
  useEffect(() => {
    // Simulate fetching from a file (already imported)
    setCustomers(customerData);
  }, []); // [] means run this effect only onece 

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <strong>{customer.name}</strong>   {customer.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
