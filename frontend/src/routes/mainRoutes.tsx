import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import UserLayout from "@/layouts/UserLayout";
import Calendar from "@/pages/Calendar/Calendar";
import Configuration from "@/pages/Configuration/Configuration";
import Dashboard from "@/pages/Dashboard/Dashboard";
import EmployeesPage from "@/pages/Employees/EmployeesPage";
import Login from "@/pages/Login/Login";
import NotFoundPage from "@/pages/NotFoundPage";
import OnBoarding from "@/pages/OnBoarding/OnBoarding";
import Orders from "@/pages/Orders/Orders";
import ProductsPage from "@/pages/Products/ProductsPage";
import ConfirmEmail from "@/pages/Register/ConfirmEmail";
import ErrorRegister from "@/pages/Register/ErrorRegister";
import ForgotPassword from "@/pages/Register/ForgotPassword";
import Register from "@/pages/Register/Register";

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
        element: <EmployeesPage />,
      },
      {
        path: "/configuration",
        element: <Configuration />,
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
