import { ChangeEvent, useEffect, useState } from "react";
import Reimb from "../reimb/Reimb";
import styles from "./reimbList.module.css";

export default function ReimbList({ reimbursements }) {
  const [selectedStatus, setSelectedStatus] = useState("PENDING");
  const filteredReimbursements = reimbursements?.filter(
    (reimb) => reimb.status === selectedStatus || selectedStatus === "all"
  );
  const reimbtags = filteredReimbursements?.map((reimb) => (
    <div>
      <Reimb reimb={reimb} />
    </div>
  ));
  const handleStateChange = (event: ChangeEvent) => {
    const select = event.target as HTMLInputElement;
    setSelectedStatus(select.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.headContainer}>
        <h2>Description</h2>
        <h2>Amount</h2>
        <div className={styles.statusContainer}>
          <h2>Status</h2>
          <select
            name="status"
            id="status"
            value={selectedStatus}
            onChange={handleStateChange}
          >
            <option value="all">All</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="DENIED">Denied</option>
          </select>
        </div>
        <h2></h2>
      </div>
      <div>{reimbtags}</div>
    </div>
  );
}
