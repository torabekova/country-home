import { PATH } from "../Types/path";
import Login from "../login/login";

import Navbar from "../navbar/Navbar";
import PropertiesPage from "../proporties/Proporties";
import FilterComponent from "../Charts/Charts";
import FilterBeds from "../FilterBeds/Filterbeds";
import FilterType from "../FilterType/FilterType";
import FinancialStatistics from "../FinancialStatics/Statics";

import Transaction from "../transaction/Transaction";

type RouteType = {
  path: string;
  element: JSX.Element;
};

export const ROUTES: readonly RouteType[] = [
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.NAVBAR,
    element: <Navbar />,
  },
  {
    path: PATH.PROPERTYCARD,
    element: <PropertiesPage />,
  },
  {
    path: PATH.FILTERCOMPONENT,
    element: <FilterComponent />,
  },
  {
    path: PATH.FILTERBEDS,
    element: <FilterBeds />,
  },
  {
    path: PATH.FILTERTYPE,
    element: <FilterType />,
  },
  {
    path: PATH.FINANCIALSTATISTICS,
    element: <FinancialStatistics />,
  },
  {
    path: PATH.TRANSACTION,
    element: <Transaction />,
  },
];
