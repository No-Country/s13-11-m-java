import React from "react";
import { Outlet } from "react-router-dom";

import AuthNavbar from "@/components/AuthNavbar";

const AuthLayout = () => {
  return (
    <div>
      <AuthNavbar />
      <main>
        <React.Suspense fallback={null}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
};

export default AuthLayout;
