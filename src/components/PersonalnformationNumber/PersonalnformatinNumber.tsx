import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FlagIcon from "@mui/icons-material/Flag";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const PersonalInformationNumber = () => {
  return (
    <Box
      sx={{
        maxWidth: 400,
        p: 3,
        border: "1px solid #FFD700",
        borderRadius: 2,
        backgroundColor: "#FFF",
        height:"580px"
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
      >
        Personal Information
      </Typography>
      <List>
        {/* Phone Number */}
        <ListItem
          sx={{
            "&:hover": {
              backgroundColor: "#f5f5f5",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            },
          }}
        >
          <ListItemIcon>
            <PhoneIcon sx={{ color: "#1BA98F" }} />
          </ListItemIcon>
          <ListItemText
            primary="+998940956774"
            secondary="Telefon Nomer"
            primaryTypographyProps={{
              sx: { color: "#333", fontWeight: 500 },
            }}
          />
        </ListItem>

        {/* Date of Birth */}
        <ListItem  sx={{
            "&:hover": {
              backgroundColor: "#f5f5f5",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            },
          }}>
          <ListItemIcon>
            <CalendarTodayIcon sx={{ color: "#1BA98F" }} />
          </ListItemIcon>
          <ListItemText
            primary="07 Fevral 2004"
            secondary="Sana va tug'ilgan kun"
            primaryTypographyProps={{
              sx: { color: "#333", fontWeight: 500 },
            }}
          />
        </ListItem>

        {/* Address */}
        <ListItem  sx={{
            "&:hover": {
              backgroundColor: "#f5f5f5",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            },
          }}>
          <ListItemIcon>
            <HomeIcon sx={{ color: "#1BA98F" }} />
          </ListItemIcon>
          <ListItemText
            primary="Jizzax viloyati Zomin tumani"
            secondary="Manzil"
            primaryTypographyProps={{
              sx: { color: "#333", fontWeight: 500 },
            }}
          />
        </ListItem>

        {/* City / Province */}
        <ListItem  sx={{
            "&:hover": {
              backgroundColor: "#f5f5f5",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            },
          }}>
          <ListItemIcon>
            <LocationCityIcon sx={{ color: "#1BA98F" }} />
          </ListItemIcon>
          <ListItemText
            primary="Zomin / Jizzax"
            secondary="Shahar/ Viloyat"
            primaryTypographyProps={{
              sx: { color: "#333", fontWeight: 500 },
            }}
          />
        </ListItem>

        {/* Country */}
        <ListItem  sx={{
            "&:hover": {
              backgroundColor: "#f5f5f5",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            },
          }}>
          <ListItemIcon>
            <FlagIcon sx={{ color: "#1BA98F" }} />
          </ListItemIcon>
          <ListItemText
            primary="O'zbekiston"
            secondary="Mamlakat"
            primaryTypographyProps={{
              sx: { color: "#333", fontWeight: 500 },
            }}
          />
        </ListItem>

        {/* Postal Code */}
        <ListItem  sx={{
            "&:hover": {
              backgroundColor: "#f5f5f5",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            },
          }}>
          <ListItemIcon>
            <MailOutlineIcon sx={{ color: "#1BA98F" }} />
          </ListItemIcon>
          <ListItemText
            primary="16690"
            secondary="Pochta kodi"
            primaryTypographyProps={{
              sx: { color: "#333", fontWeight: 500 },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default PersonalInformationNumber;
