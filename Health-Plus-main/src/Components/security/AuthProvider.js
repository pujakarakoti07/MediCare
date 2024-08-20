import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstname] = useState()

  function login(firstName) {
    setIsAuthenticated(true);
    setFirstname(firstName);
  }

  function logout() {
    setIsAuthenticated(false);
    toast.warning("logged out")
    setFirstname("")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, firstName }}>
      {children}
    </AuthContext.Provider>
  );
}
