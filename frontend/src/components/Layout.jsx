import React from "react";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../context/authContext";
import ProtectedRoute from "../protected_routes";

const Layout = () => {
  return (
    <AuthContextProvider>
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    </AuthContextProvider>
  );
};

export default Layout;
