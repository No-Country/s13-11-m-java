import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";
import OnBoarding from "../pages/OnBoarding/OnBoarding";
import ConfirmEmail from "@/pages/Register/ConfirmEmail";
import ConfirmEmail2 from "@/pages/Register/ConfirmEmail2";
import ForgotPassword from "@/pages/Register/ForgotPassword";
import ErrorRegister from "@/pages/Register/ErrorRegister";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <OnBoarding />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/confirm1",
    element: <ConfirmEmail />,
  },
  {
    path: "/confirm2",
    element: <ConfirmEmail2 />,
  },
  {
    path: "/forgotpass",
    element: <ForgotPassword />,
  },
  {
    path: "/errorregister",
    element: <ErrorRegister />,
  },
]);
