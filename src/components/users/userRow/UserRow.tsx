import { User } from "../../../lib/types";
import styles from "./userRow.module.css";

export default function UserRow(props) {
  const user: User = props.user;

  return (
    <div key={user.username} className={styles.container}>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <button>Edit</button>
    </div>
  );
}
