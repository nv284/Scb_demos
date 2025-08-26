import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);       // To store user data
  const [error, setError] = useState(null);     // To handle errors
  const [newName, setNewName] = useState('');   // Input for new user name

  useEffect(() => {
    // Fetch existing users on mount
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setError('Failed to fetch users');
        console.error(error);
      });
  }, []);

  const handleAddUser = () => {
    if (!newName) return; // Prevent empty submissions

    // POST new user data
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: newName,
    })
    .then(response => {
      // The API returns the new user (JSONPlaceholder fakes it)
      setUsers([...users, response.data]);   // Add new user to list
      setNewName('');                        // Clear input
    })
    .catch(error => {
      setError('Failed to add user');
      console.error(error);
    });
  };

  return (
    <div>
      <h1>User List</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>

      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default App;
