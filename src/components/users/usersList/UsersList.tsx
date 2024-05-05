import { User } from "../../../lib/types";
import UserRow from "../userRow/UserRow";
import styles from "./userlist.module.css";

export default function UsersList(props) {
  const users: User[] = props.users;
  const usertags = users?.map((user) => (
    <div>
      <UserRow user={user} />
    </div>
  ));
  return (
    <div className={styles.container}>
      <div className={styles.headContainer}>
        <h2>First Name</h2>
        <h2>Last Name</h2>
        <h2>User Name</h2>
        <h2>Email</h2>
        <h2>Role</h2>
        <h2></h2>
      </div>
      {usertags}
    </div>
  );
}
