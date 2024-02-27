import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const UserLayout = () => {
  const { user } = useAuth();

  if (user === undefined) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <Sidebar />
      <main className="container grow pb-20 pt-8 md:pl-20">
        <React.Suspense fallback={null}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
};

export default UserLayout;
