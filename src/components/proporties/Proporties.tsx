import React, { useEffect, useState } from "react";
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
import Header from "pages/Home/Header";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

import FilterComponent from "components/Charts/Charts";
import AddPropertiesModal from "components/AddProporties/AddProporties";
import axios from "axios";
import { Property } from "interfaces/property";

// const navigate = useNavigate();
// const [location , setLocation] = useState<string>("");

// const navigateToLocation = () => {
//   setLocation("location");
// };

interface PropertiesType {
  name: any;
  bedroom: any;
  address: any;
  bathroom: any;
  city: any;
  ratings: any;
  location: any;
  hasWifi: boolean;
  price: number;
  onClick: () => void;
}

const PropertyCard = ({
  name,
  bedroom,
  address,
  bathroom,
  city,
  ratings,
  location,
  hasWifi,
  price,
  onClick,
}: PropertiesType) => (
  <>
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: 2,
        maxWidth: "500px",
        border: "1px solid",
      }}
    >
      <Box
        sx={{ position: "relative", backgroundColor: "#f5f5f5", height: 160 }}
      >
        <CardMedia
          sx={{ height: "100%", width: "100%" }}
          image={zomindacha}
          title="Property"
        />

        <Chip
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            backgroundColor: "#ffcc80",
            color: "#000",
            fontWeight: "bold",
          }}
        />

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
          <Typography variant="body2">{ratings}</Typography>
        </Box>
      </Box>

      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {name}, {city}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center", mt: 0.5, gap: 0.5 }}
        >
          <LocationOnIcon fontSize="small" style={{ color: "#1BA98F" }} />
          {address}
        </Typography>

        <Grid container sx={{ mt: 1 }}>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Stack direction="column" alignItems="center">
              <BedIcon fontSize="small" style={{ color: "#1BA98F" }} />
              <Typography variant="body2">{bedroom} Beds</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Stack direction="column" alignItems="center">
              <BathtubIcon fontSize="small" style={{ color: "#1BA98F" }} />
              <Typography variant="body2">{bathroom} Bath</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Stack direction="column" alignItems="center">
              <WifiIcon
                fontSize="small"
                color={hasWifi ? "success" : "disabled"}
                style={{ color: "#1BA98F" }}
              />
              <Typography variant="body2">
                {hasWifi ? "WiFi" : "No WiFi"}
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 1 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
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
            onClick={onClick}
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
  </>
);

const PropertiesPage = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<Property[]>([]);
  const [mySearch, setMySearch] = useState<string>("");
  const [propertyData, setPropertyData] = useState<PropertiesType[]>([]);

  const getProperties = async () => {
    try {
      const res = await axios.get("/hotel/all-get", {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      setPropertyData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (location: string) => {
    console.log("Navigating to:", location);
    navigate("/propertiespage");
  };
  //   const findedRooms = () => {
  //     const filtredRooms = propertyData.find((val) => val.location === mySearch)
  //     if (filtredRooms) {
  //       console.log(filtredRooms);

  //     }
  //     else {
  //       alert("Room not found")
  //     }
  //  }

  useEffect(() => {
    getProperties();
  }, []);

  const handleMap = () => {
    navigate("/ViewMapSelect");
  };

  return (
    <div style={{ backgroundColor: "#F0FBFF" }}>
      <Header />

      <Navbar />

      <Box sx={{ maxWidth: "1360px", width: "100%", margin: "0 auto" }}>
        <AppBar
          position="static"
          sx={{ boxShadow: 0, backgroundColor: "#F0FBFF" }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
              Properties
            </Typography>

            <TextField
              size="small"
              onChange={(e) => setMySearch(e.target.value)}
              placeholder="Search"
              variant="outlined"
              sx={{ mr: 2 }}
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />
            {/* <Button onClick={findedRooms}>
            Search
          </Button> */}
            <div>
              <Typography variant="body2" sx={{ ml: 1 }}>
                <FilterComponent />
              </Typography>
            </div>
            <Button>
              <AddPropertiesModal refetch={getProperties} />
            </Button>
            <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
              <Switch defaultChecked color="primary" onClick={handleMap} />
              <Typography variant="body2" style={{ color: "#000000" }}>
                View Map
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>

        <Grid spacing={1}>
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "20px",
            }}
            item
            xs={12}
            sm={6}
            lg={3}
          >
            {propertyData.map((property, index) => (
              <PropertyCard {...property} onClick={() => handleClick("sa")} />
            ))}
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default PropertiesPage;
