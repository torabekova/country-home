import Home from "pages/Home/Home";
import Dahsboard from "pages/Dashboard/Dashboard";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dahsboard />,
  },
];
