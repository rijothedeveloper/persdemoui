import { useEffect, useState } from "react";
import { deleteUser } from "../../../lib/data";
import { User } from "../../../lib/types";
import UserRow from "../userRow/UserRow";
import styles from "./userlist.module.css";

export default function UsersList(props) {
  const defaultUsers = props.users;
  const [users, setUsers] = useState<User[]>(defaultUsers);
  useEffect(() => {
    setUsers(defaultUsers);
  }, [defaultUsers]);
  const onDeleteUser = async (id: number) => {
    const deletedId = await deleteUser(id);
    console.log(deletedId);
    if (deletedId) {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    }
  };
  const usertags = users.map((user) => (
    <div>
      <UserRow user={user} onDelete={onDeleteUser} />
    </div>
  ));
  return (
    <div className={styles.container}>
      <div className={styles.headContainer}>
        <h2>User Name</h2>
        <h2>First Name</h2>
        <h2>Last Name</h2>
        <h2>Email</h2>
        <h2>Role</h2>
        <h2></h2>
      </div>
      {usertags}
    </div>
  );
}
