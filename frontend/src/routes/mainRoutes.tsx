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
import Calendar from "@/pages/Calendar/Calendar";
import EmployeesPage from "@/pages/Employees/EmployeesPage";
import SettingsPage from "@/pages/Settings/SettingsPage";
import SecurityPrivacy from "@/pages/Settings/SecurityPrivacy";
import AccountSettings from "@/pages/Settings/AccountSettings";
import NotificationSettings from "@/pages/Settings/NotificationSettings";
import CalendarSettings from "@/pages/Settings/CalendarSettings";
import ProductPage from "@/pages/Products/ProductPage";
import OrderPage from "@/pages/Orders/OrderPage";
import PasswordReset from "@/pages/Settings/SecurityPrivacy/PasswordReset";
import PrivacyPolicy from "@/pages/Settings/SecurityPrivacy/PrivacyPolicy";

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
        element: <OrderPage />,
      },
      {
        path: "/employees",
        element: <EmployeesPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
        children: [
          {
            path: "/settings/security",
            element: <SecurityPrivacy />,
            children: [
              {
                path: "/settings/security/password-reset",
                element: <PasswordReset />,
              },
              {
                path: "/settings/security/privacy-policy",
                element: <PrivacyPolicy />,
              },
            ],
          },
          {
            path: "/settings/account",
            element: <AccountSettings />,
          },
          {
            path: "/settings/notifications",
            element: <NotificationSettings />,
          },
          {
            path: "/settings/calendar",
            element: <CalendarSettings />,
          },
        ],
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
