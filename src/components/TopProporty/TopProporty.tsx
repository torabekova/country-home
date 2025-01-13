import zomindacha from "./img/zomindacha.png";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WifiIcon from "@mui/icons-material/Wifi";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

interface PropertiesType {
  name: string;
  bedroom: number;
  address: string;
  bathroom: number;
  city: string;
  ratings: number;
  location: string;
  hasWifi: boolean;
  price: string;
  onClick: () => void;
}

const PropertyCard = ({
  name,
  bedroom,
  address,
  bathroom,
  city,
  ratings,
  hasWifi,
  price,
  onClick,
}: PropertiesType) => (
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
            / oyiga
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
          Tafsilot
        </Button>
      </Box>
    </CardContent>
  </Card>
);

const TopPropoty = () => {
  const property = {
    name: "Zomin Dacha",
    bedroom: 3,
    bathroom: 2,
    city: "Zomin",
    ratings: 4.5,
    address: "Jizzax viloyati Zomin tumani, tog' yonbag'rida",
    location: "Everest Plaza",
    hasWifi: true,
    price: "$120",
  };
  const navigate = useNavigate();
  const handleClick = (location: string) => {
    console.log("Navigating to:", location);
    navigate("/propertiespage/:id");
  };

  return (
    <div>
      <Box sx={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <PropertyCard
              {...property}
              onClick={() => handleClick(property.location)}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TopPropoty;
