import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import UserLayout from "@/layouts/UserLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Login from "@/pages/Login/Login";
import NotFoundPage from "@/pages/NotFoundPage";
import OnBoarding from "@/pages/OnBoarding/OnBoarding";
import ProductsPage from "@/pages/Products/ProductsPage";
import ConfirmEmail from "@/pages/Register/ConfirmEmail";
import ErrorRegister from "@/pages/Register/ErrorRegister";
import ForgotPassword from "@/pages/Register/ForgotPassword";
import Register from "@/pages/Register/Register";
import Orders from "@/pages/Orders/Orders";
import Calendar from "@/pages/Calendar/Calendar";
import Employees from "@/pages/Employees/Employees";
import Configuration from "@/pages/Configuration/Configuration";
import ProductPage from "@/pages/Products/ProductPage";
import OrderPage from "@/pages/Orders/OrderPage";

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
    element: <UserLayout />,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/configuration",
        element: <Configuration />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
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
