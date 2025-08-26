import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import customerData from '../data/customers.json';

const CustomerForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    if (isEdit) {
      const customer = customerData.find(c => c.id === parseInt(id));
      if (customer) {
        setForm({
          firstName: customer.firstName,
          lastName: customer.lastName,
          email: customer.email
        });
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      alert("Customer updated successfully!");
    } else {
      alert("Customer created successfully!");
    }
    navigate('/customers');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{isEdit ? 'Edit Customer' : 'Create Customer'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label><br />
          <input name="firstName" value={form.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name</label><br />
          <input name="lastName" value={form.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label><br />
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
          {isEdit ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
