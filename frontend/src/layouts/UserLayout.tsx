import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="container py-8 max-md:pb-20 md:pl-20">
        <React.Suspense fallback={null}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
};

export default UserLayout;
