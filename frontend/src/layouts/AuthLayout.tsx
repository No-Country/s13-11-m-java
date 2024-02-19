import AuthNavbar from "@/components/AuthNavbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <AuthNavbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
