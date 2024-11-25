import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import profilimg from "./img/profilimg.jpg"

const PersonalInfoForm: React.FC = () => {
 
  const initialData = {
    firstName: "To'rabekova",
    lastName: "Farida",
    dateOfBirth: "7th April 2003",
    phoneNumber: "+998940956774",
    country: "O'zbekiston",
    city: "Zomin",
    address: "Taraqqiyot street",
    postalCode: "16690",
    profilePicture: profilimg, 
  };

  const [formData, setFormData] = useState(initialData);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialData);
    console.log("Form reset to initial state.");
  };

  const handleSave = () => {
    localStorage.setItem("personalInfo", JSON.stringify(formData));
    console.log("Data saved to localStorage:", formData);
  };

  const handlePictureUpload = () => {
    alert("Picture upload functionality is not implemented yet!");
  };

  const handlePictureDelete = () => {
    setFormData((prev) => ({ ...prev, profilePicture: "" }));
    console.log("Profile picture removed.");
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "white",
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Personal Informations
      </Typography>

     
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <Avatar
          src={formData.profilePicture}
          alt="Profile Picture"
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Button variant="outlined" onClick={handlePictureUpload}>
            Upload new picture
          </Button>
          <Button
            variant="text"
            color="error"
            onClick={handlePictureDelete}
            sx={{ ml: 2 }}
          >
            Delete Picture
          </Button>
        </Box>
      </Box>

      
      <Grid container spacing={2}>
       
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Grid>

      
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date of Birth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
        Personal Address
      </Typography>

   
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

     
      <Box display="flex" justifyContent="space-between" mt={4}>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" color="success" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfoForm;
