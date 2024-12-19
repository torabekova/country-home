import React from "react";
import i18n from "./components/Translate/Translate"
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
import PieChartWithPaddingAngle from "./components/selesIndicotor/SalesIndicotor";
import Report from "components/Report/Report";
import GlavniMainPage from "components/Glavni/GlavniMainPage";
import FilterFacility from "components/FilterFacility/FilterFacility";

import BookOption from "components/FilterBookOption/FilterBookOption";
import ForTranslate from "components/Translate/ForTranslate";
import PasswordReset from "components/PasswordReset/PasswordReset";
import SetNewPassword from "components/SetNewPassword/SetNewPassword";
import ClickDetail from "pages/Dashboard/cilickDetail/ClickDetail";
import ModalMap from "components/ViewMap/ViewMap";

import ViewMapSelect from "components/ViewMap/ViewMapSelect";

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
          <Route path="/home" element={<Dashboard />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/transaction" element={<Transaction />} />

          <Route path="/report" element={<Report />} />
          <Route path="/profilePage" element = {<ProfilePage/>  }/>
          <Route path="/profilsettings" element= {<PersonalInfoForm/>}/>
          <Route path="/clickdetail" element= {<PropertiesPage/> }/>
          <Route path="/propertiespage" element= {<ClickDetail/> }/>
          <Route path="/SearchForm" element= {<PropertiesPage/> }/>
          <Route path="/readMore" element= {<ClickDetail/> }/>

          
        </Routes>{" "}  
    
    </div>

  );
}

export default App;

//https://www.figma.com/design/tHzNLMxcLcL2uie2wLPAC7/RentalEase---Real-Estate-Dashboard--UI-KIT?node-id=4184-20104&node-type=canvas&t=AhkdWWSJq2QXu3ka-0
