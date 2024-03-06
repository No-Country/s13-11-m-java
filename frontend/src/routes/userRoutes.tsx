import React from "react";

import UserLayout from "@/layouts/UserLayout";

const Calendar = React.lazy(() => import("@/pages/Calendar/Calendar"));
const Dashboard = React.lazy(() => import("@/pages/Dashboard/Dashboard"));
const EmployeesPage = React.lazy(() => import("@/pages/Employees/EmployeesPage"));
const OrderPage = React.lazy(() => import("@/pages/Orders/OrderPage"));
const ProductPage = React.lazy(() => import("@/pages/Products/ProductPage"));
const OrderDetails = React.lazy(() => import("@/pages/Orders/details/OrderDetails"));
const ProductsPage = React.lazy(() => import("@/pages/Products/ProductsPage"));
const AccountSettings = React.lazy(() => import("@/pages/Settings/AccountSettings"));
const CalendarSettings = React.lazy(() => import("@/pages/Settings/CalendarSettings"));
const NotificationSettings = React.lazy(() => import("@/pages/Settings/NotificationSettings"));
const SecurityPrivacy = React.lazy(() => import("@/pages/Settings/SecurityPrivacy"));
const PasswordReset = React.lazy(() => import("@/pages/Settings/SecurityPrivacy/PasswordReset"));
const PrivacyPolicy = React.lazy(() => import("@/pages/Settings/SecurityPrivacy/PrivacyPolicy"));
const SettingsPage = React.lazy(() => import("@/pages/Settings/SettingsPage"));

export const userRoutes = {
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
    {
      path: "/order/:orderId",
      element: <OrderDetails />,
    },
  ],
};
