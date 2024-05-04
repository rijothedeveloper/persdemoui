import { useContext, useEffect } from "react";
import { signOut } from "../../lib/util";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider";

export default function Logout() {
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    signOut();
    setToken("");
    navigate("/");
  }, []);
  return <div>Logout</div>;
}
