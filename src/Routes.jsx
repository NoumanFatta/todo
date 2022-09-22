import * as React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import BlankLayout from "./components/BlankLayout";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
const Routes = () => {
  const isLoggedIn = true;
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
