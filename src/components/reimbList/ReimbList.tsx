import Reimb from "../reimb/Reimb";
import styles from "./reimbList.module.css";

export default function ReimbList({ reimbursements }) {
  const reimbtags = reimbursements?.map((reimb) => (
    <div>
      <Reimb reimb={reimb} />
    </div>
  ));
  return (
    <div className={styles.container}>
      <div className={styles.headContainer}>
        <h2>Description</h2>
        <h2>Amount</h2>
        <h2>Status</h2>
      </div>
      <div>{reimbtags}</div>
    </div>
  );
}
