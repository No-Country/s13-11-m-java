import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="px-4 pb-20 pt-8 md:container md:pl-20">
        <React.Suspense fallback={null}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
};

export default UserLayout;
