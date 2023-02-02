import React from "react";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../../context/authContext";
import { QueryClient, QueryClientProvider } from 'react-query'
import ProtectedRoute from "../../protected_routes";
 
const queryClient = new QueryClient()

const PharmacyLayout = () => {
  
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      </QueryClientProvider>
    </AuthContextProvider>
  );
};

export default PharmacyLayout;
