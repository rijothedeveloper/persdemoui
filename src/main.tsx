import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.tsx";
import Signin from "./pages/signin/Signin.tsx";
import Signup from "./pages/signup/Signup.tsx";
import Logout from "./pages/logout/Logout.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import ReimburseForm from "./pages/reimburseForm/ReimburseForm.tsx";
import UsersBoard from "./pages/usersBoard/UsersBoard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/reimbursements",
        element: <Dashboard />,
      },
      {
        path: "/createreimbursement",
        element: <ReimburseForm />,
      },
      {
        path: "/users",
        element: <UsersBoard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
