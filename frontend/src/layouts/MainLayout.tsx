import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="grow">
        <React.Suspense fallback={null}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
};

export default MainLayout;
