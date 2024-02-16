import { createBrowserRouter } from "react-router-dom";
import OnBoarding from "../pages/OnBoarding/OnBoarding";
import NotFoundPage from "@/pages/NotFoundPage";
import Login from "@/pages/Login/Login";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

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
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
