import { Link } from 'react-router-dom';

const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' }
];

export default function Users() {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
