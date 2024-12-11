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
import CloseIcon from "@mui/icons-material/Close"; // X ikonkasi
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useNavigate } from "react-router-dom";

const Glavni = () => {
  const [menuOpen, setMenuOpen] = useState(true); // Menyu holati
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleMenuClose = () => {
    setMenuOpen(false); // Menyuni yopish
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prev) => !prev); // Qorong'u rejimni o'zgartirish
  };

  const handleLogout = () => {
    console.log("Chiqish bosildi");
  };

  return (
    <Menu 
      open={menuOpen} // Menyu ochiq yoki yopiq holatini boshqarish
      onClose={handleMenuClose} // Menyuni yopish uchun qo'shimcha usul
      PaperProps={{
        elevation: 3,
        sx: {
          width: 240,
          borderRadius: 2,
        // position:"absolute",
        // r:6,
        marginTop:"140px",
          overflow: "visible",
          "&::before": {
            content: '" "',
            display: "block",
            position: "absolute",
            top: 2,
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
          horizontal: "center",
        }}
    >
      {/* X tugmasi */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 1,
        }}
      >
        <IconButton size="small" onClick={handleMenuClose}>
          <CloseIcon />
        </IconButton>
      </Box>

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

      <MenuItem onClick={() => navigate("/profilsettings")}>
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
