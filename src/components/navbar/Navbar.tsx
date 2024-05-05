import { Link } from "react-router-dom";
import { isSignedIn } from "../../lib/util";
import "./navbar.styles.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserProvider";

export default function Navbar() {
  const { token, role } = useContext(UserContext);
  const notSignLinksArr = ["Signin", "Signup"];
  const notSignLinks = notSignLinksArr.map((link) => (
    <li key={link}>
      <Link to={`/${link.toLowerCase()}`}>{link}</Link>
    </li>
  ));
  let signLinksArr;
  if (role === "USER") {
    signLinksArr = ["Create Reimbursement", "Logout"];
  } else {
    signLinksArr = ["Users", "Reimbursements", "Logout"];
  }
  const signLinks = signLinksArr.map((link) => {
    link = link.replace(/\s/g, "");
    return (
      <li key={link}>
        <Link to={`/${link.toLowerCase()}`}>{link}</Link>
      </li>
    );
  });
  return (
    <div className="navbar">
      <h1> Logo </h1>
      <ul>{token ? signLinks : notSignLinks}</ul>
    </div>
  );
}
