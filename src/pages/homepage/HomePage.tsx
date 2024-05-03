import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./homepage.styles.css";
export default function HomePage() {
  return (
    <div className="layout">
      <div className="navbar-container">
        <Navbar />{" "}
      </div>
      <div className="navbar-content">
        <Outlet />
      </div>
    </div>
  );
}
