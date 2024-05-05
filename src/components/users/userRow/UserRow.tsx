import { deleteUser } from "../../../lib/data";
import { User } from "../../../lib/types";
import styles from "./userRow.module.css";

export default function UserRow(props) {
  const user: User = props.user;
  const onDelete = props.onDelete;
  const handleDelete = async () => {
    onDelete(user.id);
  };
  return (
    <div key={user.username} className={styles.container}>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <div>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
