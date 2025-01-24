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
  Dialog,
  DialogTitle,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Glavni = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const navigateProfil = () => {
    navigate("/profilePage");  
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

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    picture: "https://cdn.pixabay.com/photo/2023/02/10/16/07/new-york-7781184_1280.jpg",
  });

  const [originalData] = useState(formData);

  const handleClickSettings = () => {
    setIsModalOpen(true);  
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newPicture = URL.createObjectURL(e.target.files[0]);
      setFormData({ ...formData, picture: newPicture });
    }
  };

  const handleDeletePicture = () => {
    setFormData({ ...formData, picture: "" });
  };

  const handleReset = () => {
    setFormData(originalData);
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
    setIsModalOpen(false);  
  };

  const handleModalClose = () => {
    setIsModalOpen(false); 
  };

  return (
    <div>
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
            position: "relative", 
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
          <Avatar alt="User Avatar" src="https://cdn.pixabay.com/photo/2023/02/08/06/33/fashion-7775827_640.jpg" sx={{ mr: 2 }} />
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

        <MenuItem onClick={navigateProfil}>
        <ListItemIcon>
          <AccountCircleIcon fontSize="small" />
        </ListItemIcon>
        Profil
      </MenuItem>

        <MenuItem onClick={handleClickSettings}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Sozlamalar
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" color="error" />
          </ListItemIcon>
          <Typography color="error">Chiqish</Typography>
        </MenuItem>
      </Menu>

      <Dialog open={isModalOpen} onClose={handleModalClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          Personal Information
          <IconButton onClick={handleModalClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, backgroundColor: "#fff" }}>
          <Grid alignItems="center">
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Grid item xs={4}>
                <Avatar src={formData.picture} alt="Profile" sx={{ width: 80, height: 80 }} />
              </Grid>
              <Grid item xs={8}>
                <Button variant="contained" component="label" sx={{ mr: 1, backgroundColor: "#1BA98F", borderRadius: "100px" }}>
                  Upload new picture
                  <input hidden accept="image/*" type="file" onChange={handlePictureUpload} />
                </Button>
              </Grid>
              <Grid>
                <Button variant="outlined" color="error" onClick={handleDeletePicture} style={{ borderRadius: "100px", maxWidth: "500px", width: "100%" }}>
                  Delete Picture
                </Button>
              </Grid>
            </div>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <div style={{ display: "flex", gap: "20px" }}>
              <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "100px" } }} />
              <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "100px" } }} />
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
              <TextField fullWidth label="Date of Birth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "100px" } }} />
              <TextField fullWidth label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "100px" } }} />
            </div>
          </Box>

          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            Personal Address
          </Typography>
          <Box>
            <div style={{ display: "flex", gap: "20px" }}>
              <TextField fullWidth label="Country" name="country" value={formData.country} onChange={handleInputChange} sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "100px" } }} />
              <TextField fullWidth label="City" name="city" value={formData.city} onChange={handleInputChange} sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "100px" } }} />
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
              <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleInputChange} sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "100px" } }} />
              <TextField fullWidth label="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleInputChange} sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: "100px" } }} />
            </div>
          </Box>

          <Box sx={{ mt: 2, display: "flex", gap: "20px" }}>
            <Button variant="outlined" color="warning" onClick={handleReset} style={{ paddingLeft: "80px", paddingRight: "80px", maxWidth: "430px", width: "100%", borderRadius: "100px" }}>
              Reset
            </Button>
            <Button variant="contained" color="primary" onClick={handleSave} style={{ backgroundColor: "#1BA98F", paddingLeft: "80px", paddingRight: "80px", maxWidth: "430px", width: "100%", borderRadius: "100px" }}>
              Save
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default Glavni;
