import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    picture: "/path/to/default-picture.jpg",
  });

  const [originalData] = useState(formData); 

 
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
    
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        margin: "auto",
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Personal Informations
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <Avatar
            src={formData.picture}
            alt="Profile"
            sx={{ width: 80, height: 80 }}
          />
        </Grid>
        <Grid item xs={8}>
          <Button
            variant="contained"
            component="label"
            sx={{ mr: 1 , mb:2, backgroundColor:"#1BA98F"}}
          >
            Upload new picture
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handlePictureUpload}
            />
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleDeletePicture}
            style={{paddingLeft:"33px", paddingRight:"35px"}}
          >
            Delete Picture
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
      </Box>
      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Personal Address
      </Typography>
      <Box>
        <TextField
          fullWidth
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="City"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Postal Code"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="outlined" color="warning" onClick={handleReset} style={{paddingLeft:"80px", paddingRight:"80px"}}>
          Reset
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave} style={{backgroundColor:"#1BA98F", paddingLeft:"80px", paddingRight:"80px"}}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfoForm;
