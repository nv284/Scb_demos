import { useParams, Link, Outlet } from 'react-router-dom';

export default function UserDetails() {
  const { userId } = useParams();

  return (
    <div>
      <h2>User Details for ID: {userId}</h2>
      <Link to="posts">View Posts</Link>

      {/* Nested route renders here */}
      <Outlet />
    </div>
  );
}
