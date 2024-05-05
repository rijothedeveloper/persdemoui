import { useEffect, useState } from "react";
import UsersList from "../../components/users/usersList/UsersList";
import { getAllUsers } from "../../lib/data";
import { User } from "../../lib/types";

export default function UsersBoard() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    async function getUsers() {
      const users = await getAllUsers();
      setUsers(users);
    }
    getUsers();
  }, []);
  return (
    <div>
      <UsersList users={users} />
    </div>
  );
}
