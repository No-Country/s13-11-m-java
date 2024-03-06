import React from "react";

import AuthLayout from "@/layouts/AuthLayout";

const Login = React.lazy(() => import("@/pages/Login/Login"));
const ConfirmEmail = React.lazy(() => import("@/pages/Register/ConfirmEmail"));
/* const ErrorRegister = React.lazy(() => import("@/pages/Register/ErrorRegister")); */
const ForgotPassword = React.lazy(() => import("@/pages/Register/ForgotPassword"));
const Register = React.lazy(() => import("@/pages/Register/Register"));

export const authRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/confirm-email",
      element: <ConfirmEmail />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    /* {
      path: "/error-register",
      element: <ErrorRegister />,
    }, */
  ],
};
