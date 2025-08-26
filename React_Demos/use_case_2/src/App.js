import React ,{useState,useEffect} from 'react';
import './App.css';
import CustomerDetails from './components/customers/CustomerDetails';
import CustomerForm from './components/customers/CustomerForm';
import CustomerList from './components/customers/CustomerList';
import customerData from './components/data/customers.json';

function App() {
 const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    setCustomers(customerData);
  }, []);

  const handleAddCustomer = (newCustomer) => {
    const nextId = customers.length ? Math.max(...customers.map(c => c.id)) + 1 : 1;
    setCustomers([...customers, { id: nextId, ...newCustomer }]);
  };

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const containerStyle = {
    marginLeft: "100px",
    marginRight: "100px",
    fontFamily: "Arial, sans-serif"
  };

  const flexContainer = {
    display: "flex",
    marginTop: "30px"
  };

  return (
    <div style={containerStyle}>
      <CustomerList customers={customers} onSelect={handleSelectCustomer} />
      <div style={flexContainer}>
        <CustomerForm onAddCustomer={handleAddCustomer} />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
