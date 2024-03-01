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
    <div>
      <Navbar />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
