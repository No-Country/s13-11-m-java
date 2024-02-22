import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import Login from "@/pages/Login/Login";
import NotFoundPage from "@/pages/NotFoundPage";
import OnBoarding from "@/pages/OnBoarding/OnBoarding";
import ConfirmEmail from "@/pages/Register/ConfirmEmail";
import ErrorRegister from "@/pages/Register/ErrorRegister";
import ForgotPassword from "@/pages/Register/ForgotPassword";
import Register from "@/pages/Register/Register";
import ProductsPage from "@/pages/Products/ProductsPage";
import AddProduct from "@/pages/Products/AddProduct";

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
      {
        path: "/addproduct",
        element: <AddProduct />,
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
      {
        path: "/error-register",
        element: <ErrorRegister />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
