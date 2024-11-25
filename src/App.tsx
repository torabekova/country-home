import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterType from './components/FilterType/FilterType';
import FilterBeds from './components/FilterBeds/Filterbeds';
import FilterComponent from './components/Charts/Charts';
import Login from './components/login/login';
import Register from './components/register/Register';
import Navbar from './components/navbar/Navbar';
import  Dashboard from './components/dashboard/Dashboard';


import PropertyCard from './components/proporties/Proporties';
import PropertiesPage from './components/proporties/Proporties';
import FinancialStatistics from './components/FinancialStatics/Statics';
import SalesIndicator from './components/selesIndicotor/SalesIndicotor';
import ForgotPassword from './components/forgot-password/ForgotPAssword';
import {  Routes, Route} from 'react-router-dom';
import Transaction from './components/transaction/Transaction';
import ProfilePage from './components/Profil/Profil';

function App() {
  return (
   
  <div>
        {/* <Login/>
      <Register/> */}
       {/* <Navbar/> */}
     
      
      
      
      {/* <PropertyCard/> */}
      {/* <PropertiesPage/> */}
      {/* <FilterComponent /> */}
      {/* <FilterBeds/> */}
{/* <FilterType/> */}
{/* <FinancialStatistics/>   */}

{/* <SalesIndicator/>  */}
 {/* <Dashboard/>  */}
 {/* <ForgotPassword/> */}
 {/* <Transaction/> */}
<ProfilePage/>
  </div>
    
  );
}

export default App;

