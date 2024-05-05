import styles from "./reimb.module.css";

export default function Reimb({ reimb, role }) {
  return (
    <div key={reimb.reimbId} className={styles.container}>
      {role === "MANAGER" && <p>{reimb.user.username}</p>}
      {role === "MANAGER" && (
        <p>{reimb.user.firstName + " " + reimb.user.lastName}</p>
      )}
      <p>{reimb.description}</p>
      <p>{reimb.amount}</p>
      <p>{reimb.status}</p>
      <button>Edit</button>
    </div>
  );
}
