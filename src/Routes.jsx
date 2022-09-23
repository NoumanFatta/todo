import React, { useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import BlankLayout from "./components/BlankLayout";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
const Routes = ({ isLoggedIn }) => {
  useEffect(() => {
    const user = [
      {
        firstName: "Nouman",
        lastName: "Fatta",
        email: "test@test.com",
        password: "123",
        id: "1",
      },
    ];
    localStorage.setItem("users", JSON.stringify(user));
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" />,
      children: [
        {
          index: true,
          element: isLoggedIn ? (
            <Navigate to="home" />
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "completed",
          element: <Home />,
        },
        {
          path: "groups",
          element: <Home />,
        },
      ],
    },
    {
      path: "/",
      element: !isLoggedIn ? <BlankLayout /> : <Navigate to="/home" />,
      children: [
        { path: "/login", element: <Signin /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ]);

  return element;
};

export default Routes;
