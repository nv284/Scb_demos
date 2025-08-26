import axios from 'axios';

const API_URL = 'http://localhost:8080/api/customers';

const auth = {
    username: 'admin',
    password: 'admin123'
};

export const getCustomers = () => {
    return axios.get(API_URL, { auth });
};

export const addCustomer = (customer) => {
    return axios.post(API_URL, customer, { auth });
};

export const deleteCustomer = (id) => {
    return axios.delete(`${API_URL}/${id}`, { auth });
};
