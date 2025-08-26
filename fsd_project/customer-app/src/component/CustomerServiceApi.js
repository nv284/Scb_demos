import axios from 'axios';

// Base URL for customer-related API calls
const API_URL = 'http://localhost:8080/api/customers';

// Basic Auth credentials (adjust if dynamic login is implemented)
const auth = {
    username: 'admin',
    password: 'admin123'
};

/**
 * Get list of all customers
 * Accessible to users with role: USER or ADMIN
 */
export const getCustomers = () => {
    return axios.get(API_URL, { auth });
};

/**
 * Add a new customer
 * Accessible only to users with role: ADMIN
 * @param {Object} customer - Customer object (e.g., { name: 'John', email: 'john@example.com' })
 */
export const addCustomer = (customer) => {
    return axios.post(API_URL, customer, { auth });
};

/**
 * Delete a customer by ID
 * Accessible only to users with role: ADMIN
 * @param {number} id - Customer ID to delete
 */
export const deleteCustomer = (id) => {
    return axios.delete(`${API_URL}/${id}`, { auth });
};
