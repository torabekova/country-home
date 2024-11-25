import React from 'react'
import { PATH } from "../Types/path";
import Login from '../login/login';
import Register from '../register/Register';
import Navbar from '../navbar/Navbar';
import PropertiesPage from '../proporties/Proporties';
import FilterComponent from '../Charts/Charts';
import FilterBeds from '../FilterBeds/Filterbeds';
import FilterType from '../FilterType/FilterType';
import FinancialStatistics from '../FinancialStatics/Statics';
import SalesIndicator from '../selesIndicotor/SalesIndicotor';
import ForgotPassword from '../forgot-password/ForgotPAssword';
import Dashboard from '../dashboard/Dashboard';
import Transaction from '../transaction/Transaction';

type RouteType = {
    path: string;
    element: JSX.Element;
}

export const ROUTES: readonly RouteType[] = [
    {
        path: PATH.LOGIN,
        element: <Login />
    },
    {
        path: PATH.REGISTER,
        element: <Register />
    },
    {
        path: PATH.NAVBAR,
        element: <Navbar />
    },
    {
        path: PATH.PROPERTYCARD,
        element: <PropertiesPage />
    },
    {
        path: PATH.FILTERCOMPONENT,
        element: <FilterComponent />
    },
    {
        path: PATH.FILTERBEDS,
        element: <FilterBeds />
    },
    {
        path: PATH.FILTERTYPE,
        element: <FilterType />
    },
    {
        path: PATH.FINANCIALSTATISTICS,
        element: <FinancialStatistics />
    },
    // {
    //     path: PATH.SALESINDICATOR,
    //     element: <SalesIndicator />
    // },
    // {
    //     path: PATH.DASHBOARD,
    //     element: <Dashboard />
    // },
    {
        path: PATH.FORGOTPASSWORD,
        element: <ForgotPassword />
    },
    {
        path: PATH.TRANSACTION,
        element: <Transaction />
    }
];
