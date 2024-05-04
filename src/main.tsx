import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.tsx";
import Signin from "./pages/signin/Signin.tsx";
import Signup from "./pages/signup/Signup.tsx";
import Logout from "./pages/logout/Logout.tsx";
import ManagerDashboard from "./pages/managerDashboard/ManagerDashboard.tsx";
import UserDashboard from "./pages/userDashboard/UserDashboard.tsx";

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
        path: "/manager-dashboard",
        element: <ManagerDashboard />,
      },
      {
        path: "/user-dashboard",
        element: <UserDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
