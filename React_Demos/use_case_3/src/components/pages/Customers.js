import React from "react";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import customerData from '../data/customers.json';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
     const navigate = useNavigate();

  useEffect(() => {
    setCustomers(customerData);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/customers/new">Create new customer</Link>
      <h2>Customers List</h2>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr style={{ backgroundColor: '#dfe9f3' }}>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.email}</td>
              <td>
                <Link to={`/customers/${c.id}`}>Show</Link>{" "}
                <Link to={`/customers/${c.id}/edit`}>Edit</Link>{" "}
                <button onClick={() => handleDelete(c.id)} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
