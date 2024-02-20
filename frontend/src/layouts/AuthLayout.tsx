import AuthNavbar from "@/components/AuthNavbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <AuthNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
