import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";
import OnBoarding from "../pages/OnBoarding/OnBoarding";
import NotFoundPage from "@/pages/NotFoundPage";
import Login from "@/pages/Login/Login";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import ConfirmEmail from "@/pages/Register/ConfirmEmail";
import ConfirmEmail2 from "@/pages/Register/ConfirmEmail2";
import ForgotPassword from "@/pages/Register/ForgotPassword";
import ErrorRegister from "@/pages/Register/ErrorRegister";
import ProductsPage from "@/pages/Products/ProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <OnBoarding />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
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
        path: "*",
        element: <NotFoundPage />,
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
]);
