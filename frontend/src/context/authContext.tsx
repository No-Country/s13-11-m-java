import React from "react";

import { useGetUserQuery } from "@/app/services/api/auth";

export const AuthContext = React.createContext(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  useGetUserQuery();
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
