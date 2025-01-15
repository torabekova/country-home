import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  AppBar,
  Toolbar,
  Chip,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Public,
  Hiking,
  Fastfood,
  Hotel,
  AttachMoney,
  AccessTime,
} from "@mui/icons-material";
import HomeSilider from "components/HomeSlider/HomeSilider";
import Villa4 from "./img/villa4.jpg";
import Villa3 from "./img/villa3.jpg";
import Villa2 from "./img/villa2.jpg";
import Villa1 from "./img/villa1.jpg";
import Villa5 from "./img/villa5.jpg";
import axios from "axios";
import { Property } from "interfaces/property";
import { useEffect, useState } from "react";

import zomindacha from "./img/zomindacha.png";
import { Divider, Stack } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WifiIcon from "@mui/icons-material/Wifi";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Navbar from "../navbar/Navbar";
import Header from "pages/Home/Header";
import Footer from "components/Footer/Footer";

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
  const navigate = useNavigate();
  const handleMap = () => {
    navigate(`/propertiespage/${_id}`);
  };
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
              onClick={handleMap}
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

const HomeMainPage: React.FC = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<Property[]>([]);
  const [mySearch, setMySearch] = useState<string>("");
  const [propertyData, setPropertyData] = useState<PropertiesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (location: string) => {
    console.log("Navigating to:", location);
    navigate("/propertiespage");
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div
      style={{
        maxWidth: "2000px",
        width: "100%",
        margin: "auto",
        borderRadius: "40px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F0FBFF",
          color: "#fff",
          minHeight: "100vh",
          paddingBottom: "40px",
        }}
      >
        <HomeSilider />

        <section id="destination-section">
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 4, fontWeight: "bold", paddingTop: "25px" }}
            color="#000"
          >
            Hamma Mehmonxonalar
          </Typography>

          <div style={{ backgroundColor: "#F0FBFF" }}>
            <Box sx={{ maxWidth: "1360px", width: "100%", margin: "0 auto" }}>
              <AppBar
                position="static"
                sx={{ boxShadow: 0, backgroundColor: "#F0FBFF" }}
              >
                <Toolbar>
                  <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
                    Mehmonxonalar
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
                      {propertyData.map((property, index) => (
                        <PropertyCard {...property} />
                      ))}
                    </>
                  )}
                </Grid>
              </Grid>
            </Box>
          </div>
        </section>

        <div
          style={{ display: "flex", justifyContent: "center", padding: "30px" }}
        >
          <div>
            <h1
              style={{
                textAlign: "center",
                paddingBottom: "1rem",
                fontFamily: "Manrope",
                color: "#000",
              }}
            >
              Biz Haqimizda
            </h1>
            <p
              style={{
                textAlign: "center",
                maxWidth: "1000px",
                fontFamily: "Manrope",
                fontSize: "18px",
                color: "#000",
              }}
            >
              Zomin Town – zamonaviy turar joy majmuasini qamrab oluvchi
              innovatsion loyiha bo‘lib, qulaylik va sifatni birlashtiradi.
              Bizning asosiy maqsadimiz mijozlarimizga farovon yashash muhitini
              yaratib berishdir. Zomin Town’da siz: Arxitektura va dizayndagi
              yangiliklar; Ekologik toza va xavfsiz muhit; Zamonaviy
              infrastruktura yechimlaridan bahramand bo‘lasiz. Bizning loyiha
              nafaqat uy-joy, balki orzularingizdagi hayot tarzini taqdim etish
              uchun mo‘ljallangan. Har bir mijozning ehtiyojlari va istaklarini
              inobatga olish – bizning ustuvorligimizdir. Zomin Town – qulaylik,
              farovonlik va innovatsiyaning uyg‘unligi!
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <video
            className="hover-effect"
            style={{ borderRadius: "30px" }}
            width="80%"
            controls
          >
            <source
              src="https://cdn.pixabay.com/video/2015/10/16/1057-142621433_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </Box>
    </div>
  );
};

export default HomeMainPage;
