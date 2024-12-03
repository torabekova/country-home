import "./App.css";
import FilterType from "./components/FilterType/FilterType";
import FilterBeds from "./components/FilterBeds/Filterbeds";
import FilterComponent from "./components/Charts/Charts";
import Login from "./components/login/login";
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";

import PropertyCard from "./components/proporties/Proporties";
import PropertiesPage from "./components/proporties/Proporties";
import FinancialStatistics from "./components/FinancialStatics/Statics";
import SalesIndicator from "./components/selesIndicotor/SalesIndicotor";
import ForgotPassword from "./components/forgot-password/ForgotPAssword";
import Transaction from "./components/transaction/Transaction";
import ProfilePage from "./components/Profil/Profil";

import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routes";

function App() {
  console.log(PUBLIC_ROUTES);
  
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
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
      {/* <ForgotPassword/> */}
      {/* <Transaction/> */}
      {/* <ProfilePage/> */}
    </div>
  );
}

export default App;

//https://www.figma.com/design/tHzNLMxcLcL2uie2wLPAC7/RentalEase---Real-Estate-Dashboard--UI-KIT?node-id=4184-20104&node-type=canvas&t=AhkdWWSJq2QXu3ka-0
