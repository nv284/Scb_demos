import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Customers from './components/pages/Customers';
import CustomerDetails from './components/customers/CustomerDetails';
import CustomerForm from './components/customers/CustomerForm';

function App() {

    return (
    <div>
      <nav style={{ background: '#2c3e50', padding: '10px', color: 'white' }}>
        <h2 style={{ display: 'inline', marginRight: '30px' }}>TopGuns Bank</h2>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        <Link to="/customers" style={{ margin: '0 10px', color: 'white' }}>Customers</Link>
        <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/new" element={<CustomerForm />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
        <Route path="/customers/:id/edit" element={<CustomerForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};


export default App;
