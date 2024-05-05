import { ChangeEvent, FormEvent, useState } from "react";
import { ReimbursementRequest, Status } from "../../lib/types";
import { addReimbursements } from "../../lib/data";
import { useNavigate } from "react-router-dom";
import styles from "./reimbform.module.css";

export default function ReimburseForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState<ReimbursementRequest>({
    description: "",
    amount: 0,
    status: Status.PENDING,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleFormChange = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    setForm({
      ...form,
      [input.id]: input.value,
    });
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(form);
    const response = await addReimbursements(form);
    console.log(response);
    if (response.reimbId) {
      navigate("/reimbursements");
    } else {
      setErrorMessage("Error signing in, try again");
    }
  };
  return (
    <>
      <h3 className="error-message">{errorMessage}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={form.description}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            className={styles.amountInput}
            id="amount"
            type="number"
            value={form.amount}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit">Add Reimbursement</button>
      </form>
    </>
  );
}
