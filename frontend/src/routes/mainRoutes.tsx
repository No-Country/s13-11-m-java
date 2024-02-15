import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";
import OnBoarding from "../pages/OnBoarding/OnBoarding";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <OnBoarding />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
