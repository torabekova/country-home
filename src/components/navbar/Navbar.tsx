import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link komponenti
import "./Navbar.css";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import tabler from "./img/tabler.svg";

import { Box, TextField } from "@mui/material";
import WaterDamageOutlinedIcon from "@mui/icons-material/WaterDamageOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ParentComponent from "components/Glavni/GlavniMainPage";
import LocalMallIcon from "@mui/icons-material/LocalMall";

interface Props {
  isAuthenticated: boolean;
  avatarSrc?: string;
}

// Shartga asoslangan holda ko'rinishni boshqaruvchi komponent
// const ConditionalAvatar: React.FC<Props> = ({ isAuthenticated, avatarSrc }) => {
//   return (
//     <Stack
//       className="avatar"
//       direction="row"
//       style={{ display: "flex", padding: "0" }}
//     >
//       {isAuthenticated ? (
//         <>
//           <Avatar
//             alt="User Avatar"
//             src={avatarSrc || ""}
//             style={{ position: "relative", left: "30%" }}
//           />
//           <ParentComponent />
//         </>
//       ) : (
//         <div></div>
//       )}
//     </Stack>
//   );
// };

// Misol uchun ParentComponent
// const ParentComponent: React.FC = () => {
//   return <div style={{ opacity: "1" }}>Parent</div>;
// };

const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const avatar = "https://example.com/avatar.jpg";

  const user_role = localStorage.getItem("user_role");

  const toggleAuth = () => setIsAuthenticated((prev) => !prev);

  return (
    <div className="navbar_container">
      <div className="navbar_math_div">
        <Link to={"/"} className="home_icon_div">
          <img src={tabler} alt="tabler icon" />
        </Link>

        <div className="navbar_link_div">
          {user_role === "Admin" && (
            <>
              <div className="navbar_link_icon_div">
                <WaterDamageOutlinedIcon />
                <Link className="navbar_link" to={"/Dashboard"}>
                  Dashboard
                </Link>
              </div>
              <div className="navbar_link_icon_div">
                <LayersOutlinedIcon />
                <Link className="navbar_link" to={"/properties"}>
                  Properties
                </Link>
              </div>
              <div className="navbar_link_icon_div">
                <SyncAltRoundedIcon />
                <Link className="navbar_link" to={"/transaction"}>
                  Transaction
                </Link>
              </div>
              <div className="navbar_link_icon_div">
                <AssessmentRoundedIcon />
                <Link className="navbar_link" to={"/report"}>
                  Report
                </Link>
              </div>
            </>
          )}
          <div className="navbar_link_icon_div">
            <FavoriteBorderIcon />
            <Link className="navbar_link" to="/favorite">
              Sevimlilar
            </Link>
          </div>
          <div className="navbar_link_icon_div">
            <FavoriteBorderIcon />
            <Link className="navbar_link" to="/myorders ">
              Buyurtmalarim
            </Link>
          </div>
        </div>

        <div className="navbar_btn-div">
          <button className="search_btn" onClick={handleSearchClick}>
            <SearchRoundedIcon />
          </button>
          {searchOpen && (
            <div className={`search_box ${searchOpen ? "open" : ""}`}>
              <Box>
                <TextField
                  fullWidth
                  placeholder="Search..."
                  autoFocus
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                    },
                  }}
                />
              </Box>
            </div>
          )}
          <button className="search_btn">
            <NotificationsNoneRoundedIcon />
          </button>
          <button
            className="search_profil"
            style={{
              borderRadius: "100px",
              border: "none",
              padding: "none",
              backgroundColor: "white",
              maxWidth: "90px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack
              className="avatar"
              direction="row"
              style={{ display: "flex", padding: "0" }}
            >
              <Avatar
                alt="User Avatar"
                src={avatar}
                style={{ position: "relative", left: "25%" }}
              />
              <ParentComponent />
            </Stack>
            {/* <ConditionalAvatar
              isAuthenticated={isAuthenticated}
              avatarSrc={avatar}
            /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
