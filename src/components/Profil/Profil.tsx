import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import profilimg from "./img/proffilimg.jpg"
import Navbar from "../navbar/Navbar";
import PersonalInformationNumber from "components/PersonalnformationNumber/PersonalnformatinNumber";
import TopPropoty from "components/TopProporty/TopProporty";
import Footer from "components/Footer/Footer";
import Header from "pages/Home/Header";

const ProfilePage: React.FC = () => {
 
  const [profileData, setProfileData] = useState({
    name: "To'rabekova Farida",
    email: "farida123@gmail.com",
    avatar: profilimg ,
  });

  
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState(profileData);

  
  const [isAddPropertiesDialogOpen, setIsAddPropertiesDialogOpen] = useState(false);
  const [newProperties, setNewProperties] = useState<string[]>([]);
  const [newPropertyValue, setNewPropertyValue] = useState<string>("");


  const handleEditProfileOpen = () => {
    setEditedProfileData(profileData);
    setIsEditDialogOpen(true);
  };

  const handleEditProfileSave = () => {
    setProfileData(editedProfileData); 
    setIsEditDialogOpen(false);
  };

 
  const handleAddPropertySave = () => {
    if (newPropertyValue.trim()) {
      setNewProperties([...newProperties, newPropertyValue.trim()]); 
      setNewPropertyValue(""); 
      setIsAddPropertiesDialogOpen(false); 
    }
  };

  const handleAddPropertyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddPropertySave(); 
    }
  };

 
  return (
   <div style={{backgroundColor:"#F0FBFF"}}>
    <Header/>
    <div style={{ maxWidth: "1360px", margin: "0 auto",  borderRadius: "20px", padding: "20px",}}>
      <Navbar/>
      </div>
     <Box sx={{ padding: 4, }}>
    
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        maxWidth:"1360px",
        margin:"0 auto",
        backgroundColor: "#f8f9fa",
        borderRadius: 2,
        padding: 3,
       
      }}
    >
      
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          src={profileData.avatar}
          alt={profileData.name}
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Typography variant="h6" fontWeight="bold">
            {profileData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profileData.email}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={handleEditProfileOpen} style={{borderRadius:"100px", backgroundColor:"#1BA98F", color:"white", }}>
         Profilni tahrirlash
        </Button>
      </Box>

     
      <Box display="flex" alignItems="center" gap={2}>
        <Button

          variant="contained"
          color="success"
          onClick={() => alert("Redirecting to upgrade...")}
          style={{borderRadius:"100px", backgroundColor:"#1BA98F", color:"white", }}
        >
         Yangilash
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setIsAddPropertiesDialogOpen(true)}
          style={{borderRadius:"100px",  color:"#1BA98F", borderColor:"#1BA98F" }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "#1BA98F";
            (e.target as HTMLButtonElement).style.color = "#fff";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
            (e.target as HTMLButtonElement).style.color = "#1BA98F";
          }}
        
        >
          Yangi malumot qo'shish
        </Button>
        
      </Box>
    </Box>
    <Box sx={{
        maxWidth:"1360px",
        margin:"0 auto",
        // backgroundColor: "#f8f9fa",
        borderRadius: 2,
        padding: 3,
        marginBottom: 4,
      }}>
        <div style={{display:"flex", gap:"40px"}}>
          <PersonalInformationNumber/>
          <TopPropoty/>
        </div>
      
    </Box>
    

 
    {/* <Box maxWidth={1360} margin="0 auto">
      <Typography variant="h6" marginBottom={2}>
        Added Properties:
      </Typography>
      {newProperties.length === 0 ? (
        <Typography>No properties added yet.</Typography>
      ) : (
        <Grid container spacing={2}>
          {newProperties.map((property, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  padding: 2,
                  backgroundColor: "#fff",
                }}
              >
                {property}
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box> */}

   
    {/* <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Full Name"
          value={editedProfileData.name}
          onChange={(e) =>
            setEditedProfileData({ ...editedProfileData, name: e.target.value })
          }
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          value={editedProfileData.email}
          onChange={(e) =>
            setEditedProfileData({ ...editedProfileData, email: e.target.value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
        <Button onClick={handleEditProfileSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog> */}

 
    {/* <Dialog open={isAddPropertiesDialogOpen} onClose={() => setIsAddPropertiesDialogOpen(false)}>
      <DialogTitle>Add New Property</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Property Name"
          value={newPropertyValue}
          onChange={(e) => setNewPropertyValue(e.target.value)}
          onKeyDown={handleAddPropertyEnter} 
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsAddPropertiesDialogOpen(false)}>Cancel</Button>
        <Button onClick={handleAddPropertySave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog> */}

    
  </Box>
  <Footer/>
  
  

   </div>
  );
};

export default ProfilePage;
