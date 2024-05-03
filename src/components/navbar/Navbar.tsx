import { Link } from "react-router-dom";
import { isSignedIn } from "../../lib/util";
import "./navbar.styles.css";

export default function Navbar() {
  const notSignLinksArr = ["Signin", "Signup"];
  const notSignLinks = notSignLinksArr.map((link) => (
    <li key={link}>
      <Link to={`/${link.toLowerCase()}`}>{link}</Link>
    </li>
  ));
  const signLinksArr = ["Logout"];
  const signLinks = signLinksArr.map((link) => (
    <li key={link}>
      <Link to={`/${link.toLowerCase()}`}>{link}</Link>
    </li>
  ));
  return (
    <div className="navbar">
      <h1> Logo </h1>
      <ul>{isSignedIn() ? signLinks : notSignLinks}</ul>
    </div>
  );
}
