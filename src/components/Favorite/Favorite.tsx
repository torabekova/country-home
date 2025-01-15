import zomindacha from "./img/zomindacha.png";

import Navbar from "../navbar/Navbar";
import Header from "pages/Home/Header";
import Footer from "components/Footer/Footer";
// import Hotels from "components/Hotels/Hotels";
import {
  AppBar,
  Box,
  Button,
  Grid,
  LinearProgress,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WifiIcon from "@mui/icons-material/Wifi";
import LocationOnIcon from "@mui/icons-material/LocationOn";
interface PropertiesType {
  _id: any;
  name: any;
  bedroom: any;
  address: any;
  bathroom: any;
  city: any;
  ratings: any;
  location: any;
  hasWifi: boolean;
  price: number;
}
const PropertyCard = ({
  _id,
  name,
  bedroom,
  address,
  bathroom,
  city,
  ratings,
  location,
  hasWifi,
  price,
}: PropertiesType) => {
  return (
    <>
      <Card
        sx={{
          flex: "0 0 auto",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: 2,
          maxWidth: "500px",
          minWidth: "300px",
          margin: "10px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#f5f5f5",
            height: 160,
          }}
        >
          <CardMedia
            sx={{ height: "100%", width: "100%" }}
            image={zomindacha}
            title="Property"
          />

          <Chip
            label="Home"
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
            <Typography variant="body2">4.8</Typography>
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
                / oyiga
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
    </>
  );
};

const Favorite: React.FC = () => {
  const user_id = localStorage.getItem("user_id");
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<any[]>([]);

  const favouriteHotel = async () => {
    try {
      const { data } = await axios.get(`/favorite/find/${user_id}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      setFavorites(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    favouriteHotel();
  }, []);

  return (
    <div style={{ backgroundColor: "#F0FBFF" }}>
      <Header />
      <Navbar />
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
          backgroundColor: "#F0FBFF",
          maxWidth: "1380px",
          margin: "0 auto",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
            Sevimlilar
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid spacing={1}>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
          item
          xs={12}
          sm={6}
          lg={3}
        >
          {loading ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ) : (
            <>
              {favorites.map((property) => {
                return (
                  <PropertyCard key={property.hotel.id} {...property.hotel} />
                );
              })}
            </>
          )}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Favorite;
