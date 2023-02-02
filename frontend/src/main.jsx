import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Search from "./pages/user/Search";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Results from "./pages/user/Results.jsx";
import DashboardAdmin from "./pages/admin/Dashboard";
import DashboardPharmacy from "./pages/pharma/Dashboard";
import AuthLayout from "./components/layout/AuthLayout.jsx";
import UserLayout from "./components/layout/UserLayout.jsx";
import ErrorPage from "./components/ErrorPage";
import AdminLayout from "./components/layout/AdminLayout.jsx";
import PharmacyLayout from "./components/layout/PharmacyLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "search/drug",
        element: <Results />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardAdmin />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/pharmacy",
    element: <PharmacyLayout />,
    children: [
      {
        index: true,
        element: <DashboardPharmacy />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
