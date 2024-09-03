'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  authUser: string | null;
  setAuthUser: (user: string | null) => void;
}

const defaultAuthContextValue: AuthContextType = {
  authUser: null,
  setAuthUser: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContextValue);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState<string | null>(() => {
    return JSON.parse(localStorage.getItem("authUser") || "null");
  });

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
