import { createBrowserRouter } from "react-router-dom";
import OnBoarding from "../pages/OnBoarding/OnBoarding";
import Testing from "../pages/Testing/Testing";
import NotFoundPage from "@/pages/NotFoundPage";
import Login from "@/pages/Login/Login"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <OnBoarding />,
  },

  {
    path: "/test",
    element: <Testing />,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
