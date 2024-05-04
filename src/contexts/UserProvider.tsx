import { createContext, useState } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("USER");
  return (
    <UserContext.Provider value={{ token, setToken, role, setRole }}>
      {children}
    </UserContext.Provider>
  );
}
