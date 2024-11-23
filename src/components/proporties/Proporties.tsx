import React from "react";
import zomindacha from "./img/zomindacha.png";
import everestplaza from "./img/everestplaza.jpg";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Box,
  TextField,
  IconButton,
  Button,
  Switch,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import MapIcon from "@mui/icons-material/Map";
import StarIcon from "@mui/icons-material/Star";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WifiIcon from "@mui/icons-material/Wifi";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Navbar from "../navbar/Navbar";

const PropertyCard = ({
  type,
  rating,
  location,
  address,
  beds,
  baths,
  hasWifi,
  price,
  image,
}: {
  type: string;
  rating: number;
  location: string;
  address: string;
  beds: number;
  baths: number;
  hasWifi: boolean;
  price: string;
  image: string;
}) => (
  <div>
    <Card sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 2 , maxWidth:"322px",}}>
    {/* Card Header */}
    <Box sx={{ position: "relative", backgroundColor: "#f5f5f5", height: 160 }}>
      <CardMedia sx={{ height: "100%", width: "100%" }} image={image} title="Property" />
      {/* Badge */}
      <Chip
        label={type}
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          backgroundColor: "#ffcc80",
          color: "#000",
          fontWeight: "bold",
        }}
      />
      {/* Rating */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StarIcon sx={{ fontSize: 16, color: "#ffeb3b" }} />
        <Typography variant="body2">{rating}</Typography>
      </Box>
    </Box>

    {/* Card Content */}
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {location}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ display: "flex", alignItems: "center", mt: 0.5, gap: 0.5 }}
      >
        <LocationOnIcon fontSize="small" />
        {address}
      </Typography>

      <Grid container spacing={1} sx={{ mt: 1 }}>
        <Grid item xs={4} sx={{ textAlign: "center" }}>
          <Stack direction="column" alignItems="center">
            <BedIcon fontSize="small" />
            <Typography variant="body2">{beds} Beds</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }}>
          <Stack direction="column" alignItems="center">
            <BathtubIcon fontSize="small" />
            <Typography variant="body2">{baths} Bath</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }}>
          <Stack direction="column" alignItems="center">
            <WifiIcon fontSize="small" color={hasWifi ? "success" : "disabled"} />
            <Typography variant="body2">{hasWifi ? "WiFi" : "No WiFi"}</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 1 }} />

      {/* Price */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {price}
          <Typography variant="body2" component="span">
            {" "}
            / per month
          </Typography>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Detail
        </Button>
      </Box>
    </CardContent>
  </Card>
  </div>
);

const PropertiesPage = () => {
  const propertyData = [
    {
      type: "House",
      rating: 4.5,
      location: "Grand Field, MN",
      address: "Grand Galaxy Park 2, West Java",
      beds: 3,
      baths: 2,
      hasWifi: true,
      price: "$1,200",
      image: zomindacha,
    },
    {
      type: "House",
      rating: 4.5,
      location: "Grand Field, MN",
      address: "Grand Galaxy Park 2, West Java",
      beds: 3,
      baths: 2,
      hasWifi: true,
      price: "$1,200",
      image: zomindacha,
    },
    {
      type: "House",
      rating: 4.5,
      location: "Grand Field, MN",
      address: "Grand Galaxy Park 2, West Java",
      beds: 3,
      baths: 2,
      hasWifi: true,
      price: "$1,200",
      image: zomindacha,
    },
   
   
  ];

  return (
    <>
    <Navbar/>
    <Box sx={{  height: "100vh",  maxWidth:"1360px", margin:"0 auto",}}>
      <AppBar position="static"  sx={{ boxShadow: 0, backgroundColor:"white", }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 , color:"black",}}>
            Properties
          </Typography>
          <TextField
            size="small"
            placeholder="Bogor, West Java"
            variant="outlined"
            sx={{ mr: 2 }}
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
          <IconButton
            sx={{
              borderRadius: "20px",
              color: "white",
              backgroundColor: "black",
              padding: "5px 16px",
            }}
          >
            <FilterAltIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>
              Filter
            </Typography>
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ ml: 2, borderRadius: "20px", backgroundColor: "#1BA98F" }}
          >
            Add New Properties
          </Button>
          <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
            <Switch defaultChecked color="primary" />
            <Typography variant="body2">View Map</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ flexGrow: 1, py: 2 }}>
        <Grid  spacing={3}>
          {propertyData.map((property, index) => (
            <Grid style={{display:"flex", justifyContent:"space-between", marginBottom:"20px", }} item xs={12} sm={6}  lg={3} key={index}>
              <PropertyCard {...property} />
              <PropertyCard {...property} />
              <PropertyCard {...property} />
              <PropertyCard {...property} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
    
  );
};

export default PropertiesPage;
