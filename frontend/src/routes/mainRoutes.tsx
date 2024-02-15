import { createBrowserRouter } from "react-router-dom";
import OnBoarding from "../pages/OnBoarding/OnBoarding";
import Testing from "../pages/Testing/Testing";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <OnBoarding />,
  },
  {
    path: "/test",
    element: <Testing />,
  },
]);
