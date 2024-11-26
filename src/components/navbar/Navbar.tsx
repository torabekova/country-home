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
import tabler from "./img/tabler.png";
import avatar from "./img/avatar.jpg";
import { PATH } from "../Types/path";
import { Box, TextField } from "@mui/material";

const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="navbar_container">
      <div className="navbar_math_div">
       
        <div className="home_icon_div">
          <img src={tabler} alt="tabler icon" />
        </div>

        <div className="navbar_link_div">
          <div className="navbar_link_icon_div">
            <img src={tabler} alt="tabler icon" width={30} />
            <Link className="navbar_link" to={PATH.DASHBORD}>
              Dashboard
            </Link>
          </div>
          <div className="navbar_link_icon_div">
            <HomeIcon />
            <Link className="navbar_link" to={PATH.PROPERTIESOAGE}>
              Properties
            </Link>
          </div>
          <div className="navbar_link_icon_div">
            <SyncAltRoundedIcon />
            <Link className="navbar_link" to={PATH.TRANSACTION}>
              Transactions
            </Link>
          </div>
          <div className="navbar_link_icon_div">
            <InsertCommentRoundedIcon />
            <Link className="navbar_link" to="/messages">
              Messages
            </Link>
          </div>
          <div className="navbar_link_icon_div">
            <AssessmentRoundedIcon />
            <Link className="navbar_link" to={PATH.PROPERTIESOAGE}>
              Reports
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
          <button className="search_btn">
            <Stack className="avatar" direction="row" spacing={2}>
              <Avatar alt="User Avatar" src={avatar} />
            </Stack>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
