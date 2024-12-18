import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuItem,
  Switch,
  Typography,
  Avatar,
  ListItemIcon,
  Divider,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useNavigate } from "react-router-dom";
// import { useDarkMode } from "darkModeProvider/darkMode";

const Glavni = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profilsettings");
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Chiqish bosildi");
  };

  // const theme = createTheme({
  //   palette: {
  //     mode: darkMode ? "dark" : "light";
  //   }
  // })

  return (
    <Menu
      style={{ position: "absolute" }}
      open={menuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 3,
        sx: {
          width: 280,
          borderRadius: 2,
          left: "67% !important",
          top: "40px !important",
          marginTop: "140px",
          overflow: "visible",
          position: "relative", // Position the menu relative to its container
          "&::before": {
            content: '" "',
            display: "block",
            position: "absolute",
            right: "7px",
            top: 1,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Avatar alt="User Avatar" src="/path/to/avatar.jpg" sx={{ mr: 2 }} />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            johndoe@example.com
          </Typography>
        </Box>
      </Box>
      <Divider />

      <MenuItem onClick={() => navigate("/profilePage")}>
        <ListItemIcon>
          <AccountCircleIcon fontSize="small" />
        </ListItemIcon>
        Profil
      </MenuItem>

      <MenuItem onClick={handleClick}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        Sozlamalar
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <Brightness4Icon fontSize="small" />
        </ListItemIcon>
        Qorong'u Rejim
        <Switch
          checked={darkMode}
          onChange={handleDarkModeToggle}
          size="small"
          sx={{ ml: "auto" }}
        />
      </MenuItem>

      <Divider />

      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" color="error" />
        </ListItemIcon>
        <Typography color="error">Chiqish</Typography>
      </MenuItem>
    </Menu>
  );
};

export default Glavni;
