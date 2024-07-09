import type { UserListProps } from './types';
import { useUserList } from './use-user-list';

export const UserList = ({ loadUserList }: UserListProps) => {
  const { users } = useUserList({ loadUserList });

  return (
    <>
      <h2>User List</h2>
      {users.length === 0 && <p>No users found</p>}
      {users.length > 0 &&
        users.map((user) => (
          <ul key={user.id}>
            <li>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          </ul>
        ))}
    </>
  );
};
