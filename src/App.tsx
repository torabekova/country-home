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

import Report from './components/report/Report';
import PropertyCard from './components/proporties/Proporties';
import PropertiesPage from './components/proporties/Proporties';
import FinancialStatistics from './components/FinancialStatics/Statics';
import SalesIndicator from './components/selesIndicotor/SalesIndicotor';

function App() {
  return (
    <div>
      {/* <Login/>
      <Register/>
       <Navbar/>
     
      
       <Report/> 
      
      <PropertyCard/>
      <PropertiesPage/>
      <FilterComponent />
      <FilterBeds/>
<FilterType/>
<FinancialStatistics/>  

<SalesIndicator/> */}
 <Dashboard/> 
    </div>
  );
}

export default App;

