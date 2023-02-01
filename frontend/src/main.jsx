import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Search from "./pages/user/Search";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Results from "./pages/user/Results.jsx";
import Dashboard from "./pages/pharma/Dashboard.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
