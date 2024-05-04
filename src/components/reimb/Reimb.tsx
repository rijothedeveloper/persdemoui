import styles from "./reimb.module.css";

export default function Reimb({ reimb }) {
  return (
    <div key={reimb.reimbId} className={styles.container}>
      <p>{reimb.description}</p>
      <p>{reimb.amount}</p>
      <p>{reimb.status}</p>
      <button>Edit</button>
    </div>
  );
}
