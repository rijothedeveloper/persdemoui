import React, { ChangeEvent, useState } from "react";
import "./signin.styles.css";

export default function Signin() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleFormChange = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    setForm({
      ...form,
      [input.id]: input.value,
    });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(form);
  };

  return (
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
  );
}
