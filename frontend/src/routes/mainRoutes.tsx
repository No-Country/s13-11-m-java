import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import NotFoundPage from "@/pages/NotFoundPage";
import OnBoarding from "@/pages/OnBoarding/OnBoarding";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <OnBoarding />,
      },
    ],
  },
  {
    Component: React.lazy(() => import("@/layouts/UserLayout")),
    children: [
      {
        path: "/products",
        Component: React.lazy(() => import("@/pages/Products/ProductsPage")),
      },
      {
        path: "/calendar",
        Component: React.lazy(() => import("@/pages/Calendar/Calendar")),
      },
      {
        path: "/dashboard",
        Component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
      },
      {
        path: "/orders",
        Component: React.lazy(() => import("@/pages/Orders/Orders")),
      },
      {
        path: "/employees",
        Component: React.lazy(() => import("@/pages/Employees/EmployeesPage")),
      },
      {
        path: "/configuration",
        Component: React.lazy(() => import("@/pages/Configuration/Configuration")),
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        Component: React.lazy(() => import("@/pages/Login/Login")),
      },
      {
        path: "/register",
        Component: React.lazy(() => import("@/pages/Register/Register")),
      },
      {
        path: "/confirm-email",
        Component: React.lazy(() => import("@/pages/Register/ConfirmEmail")),
      },
      {
        path: "/forgot-password",
        Component: React.lazy(() => import("@/pages/Register/ForgotPassword")),
      },
      {
        path: "/error-register",
        Component: React.lazy(() => import("@/pages/Register/ErrorRegister")),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
