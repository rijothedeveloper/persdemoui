import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import "./signin.styles.css";
import { signin } from "../../lib/data";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider";

export default function Signin() {
  const navigate = useNavigate();
  const { setToken, setRole } = useContext(UserContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
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
    const response = await signin(form.username, form.password);
    console.log(response);
    if (response.token) {
      Cookies.set("token", response.token, { expires: 7, secure: true });
      setToken(response.token);
      setRole(response.role);
      if (response.role === "MANAGER") navigate("/manager-dashboard");
      else navigate("/user-dashboard");
    } else {
      setErrorMessage("Error signing in, try again");
    }
  };

  return (
    <>
      <h3 className="error-message">{errorMessage}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={form.username}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit">Signin</button>
      </form>
    </>
  );
}
