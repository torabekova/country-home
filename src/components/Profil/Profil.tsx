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
} from "@mui/material";
// import profilimg from "./img/proffilimg.jpg";
import Navbar from "../navbar/Navbar";
import PersonalInformationNumber from "components/PersonalnformationNumber/PersonalnformatinNumber";
import TopPropoty from "components/TopProporty/TopProporty";
import Footer from "components/Footer/Footer";
import Header from "pages/Home/Header";

import AddPropertiesModal from "components/AddProporties/AddProporties";
import AddNewRooms from "components/AddNewRooms/AddNewRooms";

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState({
    name: "To'rabekova Farida",
    email: "farida123@gmail.com",
    avatar: "",
  });

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState(profileData);

  const [isAddPropertiesDialogOpen, setIsAddPropertiesDialogOpen] =
    useState(false);
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

  const handleProfileFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setEditedProfileData({
      ...editedProfileData,
      [field]: e.target.value,
    });
  };

  return (
    <div style={{ backgroundColor: "#F0FBFF" }}>
      <Header />
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Navbar />
      </div>
      <Box sx={{ padding: 4 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            maxWidth: "1360px",
            margin: "0 auto",
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditProfileOpen}
              style={{
                borderRadius: "100px",
                backgroundColor: "#1BA98F",
                color: "white",
              }}
            >
              Profile tahrirlash
            </Button>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Button
              variant="contained"
              color="success"
              style={{
                borderRadius: "100px",
                backgroundColor: "#1BA98F",
                color: "white",
              }}
            >
              Yangilash
            </Button>
            <AddNewRooms refetch={() => {}} />
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "1360px",
            margin: "0 auto",
            borderRadius: 2,
            padding: 3,
            marginBottom: 4,
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            <PersonalInformationNumber />
            <TopPropoty />
          </div>
        </Box>
      </Box>
      <Footer />

      {/* Edit Profile Dialog */}
      <Dialog
        open={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
      >
        <DialogTitle>Profilni Tahrirlash</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editedProfileData.name}
            onChange={(e) => handleProfileFieldChange(e, "name")}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={editedProfileData.email}
            onChange={(e) => handleProfileFieldChange(e, "email")}
            fullWidth
            margin="normal"
          />
          {/* You can add an avatar upload feature here if needed */}
          <TextField
            label="Avatar URL (optional)"
            type="file"
            value={editedProfileData.avatar}
            onChange={(e) => handleProfileFieldChange(e, "avatar")}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditDialogOpen(false)} color="primary">
            Bekor qilish
          </Button>
          <Button onClick={handleEditProfileSave} color="primary">
            Saqlash
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfilePage;
