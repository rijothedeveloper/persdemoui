import { useEffect, useState } from "react";
import { Reimbursement } from "../../lib/types";
import { getMyReimbursements } from "../../lib/data";

export default function UserDashboard() {
  const [reimbursements, setReimbursements] = useState<Reimbursement[]>();
  useEffect(() => {
    async function getReimbursements() {
      const reimbResponse = await getMyReimbursements();
      setReimbursements(reimbResponse);
      console.log(reimbResponse);
    }
    getReimbursements();
  }, []);
  // const reimbtags = reimbursements?.map((reimb) => (
  //   <div key={reimb.reimbId}>
  //     <h2>{reimb.amount}</h2>
  //     <p>{reimb.description}</p>
  //     <p>{reimb.status}</p>
  //   </div>
  // ));
  return <div>reimbtags</div>;
}
