
import './App.css';
import React,{useEffect , useState} from 'react';
//import { getCustomers,addCustomer,deleteCustomer } from './component/CustomerService';
import { addCustomer,deleteCustomer,getCustomers } from './component/CustomerServiceApi';


function App() {
  const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers().then(res => setCustomers(res.data));
    }, []);

    return (
        <div>
            <h1>Customer List</h1>
            <ul>
                {customers.map(c => (
                    <li key={c.id}>{c.name} - {c.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
