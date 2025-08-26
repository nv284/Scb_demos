import React, { useState, useEffect } from 'react';
import customerData from '../data/customers.json'; // local static data

function CustomerList1() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Load data on mount
  useEffect(() => {
    // Check localStorage first
    const storedCustomers = localStorage.getItem('customers');
    if (storedCustomers) {
      setCustomers(JSON.parse(storedCustomers));
    } else {
      setCustomers(customerData);
      localStorage.setItem('customers', JSON.stringify(customerData)); // save initial data
    }
  }, []);

  // Add new customer
  const handleAddCustomer = () => {
    if (name.trim() === '' || phone.trim() === '') {
      alert('Both name and phone number are required!');
      return;
    }

    const newCustomer = {
      id: Date.now(), // simple unique ID
      name: name.trim(),
      phone: phone.trim()
    };

    const updatedCustomers = [...customers, newCustomer];
    setCustomers(updatedCustomers);
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));

    // Reset input fields
    setName('');
    setPhone('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Customer List</h2>

      {/* Input section */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={handleAddCustomer} style={{ padding: '8px 12px' }}>
          Add
        </button>
      </div>

      {/* Display list */}
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <strong>{customer.name}</strong> - 📞 {customer.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList1;
