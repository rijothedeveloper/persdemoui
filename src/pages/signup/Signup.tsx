import { ChangeEvent, FormEvent, useState } from "react";
import "./signup.styles.css";
import { SignupUserResponse } from "../../lib/types";
import { signup } from "../../lib/data";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    role: "",
  });
  const [message, setMessage] = useState({
    message: "",
    error: true,
  });
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
    try {
      const response: SignupUserResponse = await signup(form);
      if (response !== null) {
        setMessage({ error: false, message: "User signed up successfully" });
      }
    } catch (error) {
      setMessage({ error: true, message: "Error in signing up, try again" });
    }
  };
  return (
    <div>
      <h3 className={`flash-message ${message.error ? "red" : "green"}`}>
        {message.message}
      </h3>
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
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={form.email}
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
        <div>
          <label htmlFor="firstName">FirstName</label>
          <input
            id="firstName"
            type="text"
            value={form.firstName}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Username</label>
          <input
            id="lastName"
            type="text"
            value={form.lastName}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>
            <input
              id="role"
              name="Role"
              type="radio"
              value="USER"
              checked={form.role === "USER"}
              onChange={handleFormChange}
            />
            User
          </label>
        </div>
        <div>
          <label>
            <input
              id="role"
              name="Role"
              type="radio"
              value="MANAGER"
              checked={form.role === "MANAGER"}
              onChange={handleFormChange}
            />
            Manager
          </label>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
