import { useContext, useEffect, useState } from "react";
import { Reimbursement } from "../../lib/types";
import { getAllReimbursements, getMyReimbursements } from "../../lib/data";
import ReimbList from "../../components/reimbList/ReimbList";
import { UserContext } from "../../contexts/UserProvider";

export default function UserDashboard() {
  const [reimbursements, setReimbursements] = useState<Reimbursement[]>();
  const { role } = useContext(UserContext);
  useEffect(() => {
    async function getReimbursements() {
      let reimbResponse;
      if (role === "MANAGER") {
        reimbResponse = await getAllReimbursements();
      } else {
        reimbResponse = await getMyReimbursements();
      }
      setReimbursements(reimbResponse);
      console.log(reimbResponse);
    }
    getReimbursements();
  }, []);
  return <ReimbList reimbursements={reimbursements} />;
}
