import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PUBLIC_ROUTES } from "routes";
import DetailPage from "components/detailpage/DetailPgae";
import DestinationDetail from "components/DestinationDetail/DestinationDetail";
import CardInfo from "components/CardInfo/CardInfo";
import Login from "components/login/login";
import Dashboard from "pages/Dashboard/Dashboard";
import PropertiesPage from "components/proporties/Proporties";
import Transaction from "components/transaction/Transaction";
import Report from "components/Report/Report";
import ProfilePage from "components/Profil/Profil";
import PersonalInfoForm from "components/ProfilSettings/ProfilInformation";
import ClickDetail from "pages/Dashboard/cilickDetail/ClickDetail";
import ConfirmPage from "components/ConfirmPage/ConfirmPage";
import Primum from "components/Primum/Primum";
import ViewMapSelect from "components/ViewMap/ViewMapSelect";

import Favorite from "components/Favorite/Favorite";

function App() {
  const user_role = localStorage.getItem("user_role");

  return (
    <div>
      {" "}
      <Routes>
        {" "}
        {PUBLIC_ROUTES.map((route) => (
          <Route {...route} key={route.path} />
        ))}{" "}
        <Route path="/details" element={<DetailPage />} />{" "}
        <Route path="/destination-detail/:id" element={<DestinationDetail />} />
        <Route path="/card-info/:id" element={<CardInfo />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/location" element={<DetailPage />} />
        {user_role === "Admin" && (
          <>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/transaction" element={<Transaction />} />
          </>
        )}
        <Route path="/report" element={<Report />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/profilsettings" element={<PersonalInfoForm />} />
        <Route path="/clickdetail" element={<PropertiesPage />} />
        <Route path="/propertiespage" element={<ClickDetail />} />
        <Route path="/SearchForm" element={<PropertiesPage />} />
        <Route path="/readMore" element={<ClickDetail />} />
        <Route path="/ConfirmPage" element={<ConfirmPage />} />
        <Route path="/primum" element={<Primum />} />
        <Route path="/selectplan" element={<ClickDetail />} />
        <Route path="/ViewMapSelect" element={<ViewMapSelect />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
