import { useState } from "react";
import styles from "./reimb.module.css";
import { updateReimbDescription, updateReimbStatus } from "../../../lib/data";

export default function Reimb({ reimb, role }) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(reimb.status);
  const [description, setDescription] = useState(reimb.description);
  const updateStatus = async () => {
    await updateReimbStatus(reimb.reimbId, status);
  };
  const updateDescription = async () => {
    await updateReimbDescription(reimb.reimbId, description);
  };
  const handleEditClick = () => {
    if (editMode && role === "MANAGER") {
      updateStatus();
      reimb.status = status;
    }
    if (editMode && role === "USER") {
      updateDescription();
      reimb.description = description;
    }
    setEditMode(!editMode);
  };
  const handleDescEdit = (e) => {
    setDescription(e.target.value);
    // reimb.description = e.target.value;
  };
  return (
    <div key={reimb.reimbId} className={styles.container}>
      {role === "MANAGER" && <p>{reimb.user.username}</p>}
      {role === "MANAGER" && (
        <p>{reimb.user.firstName + " " + reimb.user.lastName}</p>
      )}
      {editMode && role === "USER" ? (
        <p>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescEdit}
          />
        </p>
      ) : (
        <p>{reimb.description}</p>
      )}
      <p>{reimb.description}</p>
      <p>{reimb.amount}</p>
      {editMode && role === "MANAGER" ? (
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
