import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import Login from "@/pages/Login/Login";
import NotFoundPage from "@/pages/NotFoundPage";
import OnBoarding from "@/pages/OnBoarding/OnBoarding";
import ConfirmEmail from "@/pages/Register/ConfirmEmail";
import ConfirmEmail2 from "@/pages/Register/ConfirmEmail2";
import ErrorRegister from "@/pages/Register/ErrorRegister";
import ForgotPassword from "@/pages/Register/ForgotPassword";
import Register from "@/pages/Register/Register";
import Login2 from "@/pages/Login2/Login2";
import Register2 from "@/pages/Register2/Register2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <OnBoarding />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login2",
        element: <Login2 />,
      },
      {
        path: "/register2",
        element: <Register2 />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/confirm1",
        element: <ConfirmEmail />,
      },
      {
        path: "/confirm2",
        element: <ConfirmEmail2 />,
      },
      {
        path: "/forgotpass",
        element: <ForgotPassword />,
      },
      {
        path: "/errorregister",
        element: <ErrorRegister />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
