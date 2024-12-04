import Home from "pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
