import { useParams } from 'react-router-dom';
import customerData from '../data/customers.json';

const CustomerDetails = () => {
  const { id } = useParams();
  const customer = customerData.find(c => c.id === parseInt(id));

  if (!customer) return <p>Customer not found.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Customer Details</h2>
      <p><strong>ID:</strong> {customer.id}</p>
      <p><strong>First Name:</strong> {customer.firstName}</p>
      <p><strong>Last Name:</strong> {customer.lastName}</p>
      <p><strong>Email:</strong> {customer.email}</p>
    </div>
  );
};

export default CustomerDetails;
