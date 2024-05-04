import { useEffect, useState } from "react";
import { Reimbursement } from "../../lib/types";
import { getMyReimbursements } from "../../lib/data";
import ReimbList from "../../components/reimbList/ReimbList";

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
  return <ReimbList reimbursements={reimbursements} />;
}
