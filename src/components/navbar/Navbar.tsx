import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link komponenti
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import tabler from "./img/tabler.svg";
import avatar from "./img/avatar.jpg";
import { PATH } from "../Types/path";
import { Box, TextField } from "@mui/material";
import WaterDamageOutlinedIcon from '@mui/icons-material/WaterDamageOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

// import GlavniMainPage from "components/Glavni/GlavniMainPage";
import ParentComponent from "components/Glavni/GlavniMainPage";

const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="navbar_container">
      <div className="navbar_math_div">
        <Link to={"/"} className="home_icon_div">
          <img src={tabler} alt="tabler icon" />
        </Link>

        <div className="navbar_link_div">
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
          {/* <div className="navbar_link_icon_div">
            <InsertCommentRoundedIcon />
            <Link className="navbar_link" to="/messages">
              Xabarlar
            </Link>
          </div> */}
          <div className="navbar_link_icon_div">
            <AssessmentRoundedIcon />
            <Link className="navbar_link" to={"/report"}>
            Report
            </Link>
          </div>
        </div>

        {/* Buttons */}
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
              alignItems:"center"
            }}
          >
            <Stack
              className="avatar"
              direction="row"
              style={{ display: "flex", padding: "0", }}
            >
              <Avatar
                alt="User Avatar"
                src={avatar}
                style={{ position: "relative", left: "30%" }}
              />
              <ParentComponent />
            </Stack>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
