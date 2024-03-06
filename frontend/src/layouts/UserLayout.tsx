import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useToast } from "@/components/ui/use-toast";

const UserLayout = () => {
  const { isLoading, user } = useAuth();
  const { toast } = useToast();

  React.useEffect(() => {
    if (user === null) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Debes iniciar sesión",
      });
    }
  }, [user, toast]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="px-4 pb-20 pt-8 md:container md:pl-20">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <p>Cargando...</p>
          </div>
        ) : user === null ? (
          <Navigate to="/login" />
        ) : (
          <React.Suspense fallback={null}>
            <Outlet />
          </React.Suspense>
        )}
      </main>
    </div>
  );
};

export default UserLayout;
