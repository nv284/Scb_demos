import { useParams } from 'react-router-dom';

export default function UserPosts() {
  const { userId } = useParams();

  return (
    <div>
      <h3>Posts by User {userId}</h3>
      <ul>
        <li>Post 1 by User {userId}</li>
        <li>Post 2 by User {userId}</li>
      </ul>
    </div>
  );
}
