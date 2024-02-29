import { Outlet } from "react-router-dom";

import AuthNavbar from "@/components/AuthNavbar";

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
