import { useState } from "react";
import styles from "./reimb.module.css";
import { updateReimbStatus } from "../../../lib/data";

export default function Reimb({ reimb, role }) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(reimb.status);
  const updateStatus = async () => {
    await updateReimbStatus(reimb.reimbId, status);
  };
  const handleEditClick = () => {
    if (editMode) {
      updateStatus();
      reimb.status = status;
    }
    setEditMode(!editMode);
  };
  return (
    <div key={reimb.reimbId} className={styles.container}>
      {role === "MANAGER" && <p>{reimb.user.username}</p>}
      {role === "MANAGER" && (
        <p>{reimb.user.firstName + " " + reimb.user.lastName}</p>
      )}
      <p>{reimb.description}</p>
      <p>{reimb.amount}</p>
      {editMode ? (
        <select
          name="status"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="PENDING">Pending</option>
          <option value="APPROVED">Approved</option>
          <option value="DENIED">Denied</option>
        </select>
      ) : (
        <p>{reimb.status}</p>
      )}

      <button onClick={handleEditClick}>{editMode ? "Save" : "Edit"}</button>
    </div>
  );
}
