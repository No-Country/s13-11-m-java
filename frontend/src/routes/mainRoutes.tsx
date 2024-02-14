import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";
import OnBoarding from "../pages/OnBoarding"; // Ensure this is the default export

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
