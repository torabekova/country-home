import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FilterType from "./components/FilterType/FilterType";
import FilterBeds from "./components/FilterBeds/Filterbeds";
import FilterComponent from "./components/Charts/Charts";
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "pages/Dashboard/Dashboard";
import PropertyCard from "./components/proporties/Proporties";
import PropertiesPage from "./components/proporties/Proporties";
import FinancialStatistics from "./components/FinancialStatics/Statics";
import SalesIndicator from "./components/selesIndicotor/SalesIndicotor";
import ForgotPassword from "./components/forgot-password/ForgotPAssword";
import Transaction from "./components/transaction/Transaction";
import ProfilePage from "./components/Profil/Profil";
import { PUBLIC_ROUTES } from "./routes";
import DetailPage from "components/detailpage/DetailPgae";
import DestinationDetail from "./components/DestinationDetail/DestinationDetail";
import CardInfo from "./components/CardInfo/CardInfo";
import Login from "./components/login/login";
import PersonalInfoForm from "components/ProfilSettings/ProfilInformation";
import TransactionTable from "components/TransactionTable/TransactionTable";
import ProfileForm from "components/AddProporties/AddProporties";
import AddPropertiesModal from "components/AddProporties/AddProporties";
import PersonalInformationNumber from "components/PersonalnformationNumber/PersonalnformatinNumber";
import TopPropoty from "components/TopProporty/TopProporty";
// import PropertyDetails from "./components/dashboard/PropertyDetails";
function App() {
  console.log(PUBLIC_ROUTES);

  return (
    <div>
     
      
        {" "}
        <Routes>
          {" "}
          {PUBLIC_ROUTES.map((route) => (
            <Route {...route} key={route.path} />
          ))}{" "}
          <Route path="/details" element={<DetailPage />} />{" "}
      {" "}
          <Route path="/destination-detail/:id" element={<DestinationDetail />} />
          <Route path="/card-info/:id" element={<CardInfo />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} /> 
        
        </Routes>{" "}
      
     
      {/* <Login/>
         */}
      {/* <Dashboard/> */}
     
        {/* <PropertiesPage/>  */}
      {/* <FilterComponent /> */}
        {/* <FilterBeds/> */}
        {/* <FilterType/> */}
    
     
       
        
     
        {/* <ProfilePage/>   */}
        {/* <Transaction/>  */}
        {/* <PersonalInfoForm/> */}
        {/* <TransactionTable/> */}
        {/* <AddPropertiesModal/> */}
        {/* <TopPropoty/> */}
        {/* <Register/> */}
       
    </div>
  );
}

export default App;
