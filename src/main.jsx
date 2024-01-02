import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import BankDashboard from "./components/BankDashboard";
import { ToastContainer } from "react-toastify";
import CardDetails from "./components/CardDetails";
import Debts from "./components/debts";
import History from "./components/history";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <BankDashboard />,
  },
  {
    path: "/cardDetails",
    element: <CardDetails />,
  },
  {
    path: "/debts",
    element: <Debts />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
