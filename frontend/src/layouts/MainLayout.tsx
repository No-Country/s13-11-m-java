import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container py-16">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
