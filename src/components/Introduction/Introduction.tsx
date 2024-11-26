import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Select,
  MenuItem,
  IconButton,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import bacgroundimg from "./img/bacgroundimg.png";
import {  Link } from "@mui/material";
function Include() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const handleCityChange = (event: any) => {
    setCity(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#000" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#fff" }}>
           ZAMIN TOWN
          </Typography>
          <Box
      component="nav"
      sx={{
        backgroundColor: "#000", 
        color: "#fff", 
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px", 
        }}
      >
        {["Dashboard", "Properties", "Transaction", "Report"].map((text, index) => (
          <Link
            key={index}
            href="#"
            sx={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              position: "relative",
              overflow: "hidden",
              ":before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "3px",
                bottom: 0,
                left: "-100%", 
                backgroundColor: "#FFB400", 
                transition: "all 0.3s ease-in-out",
              },
              ":hover:before": {
                left: "0",
              },
              ":hover": {
                color: "#FFB400", 
              },
            }}
          >
            {text}
          </Link>
        ))}
      </Box>
    </Box>
          <IconButton color="inherit" onClick={handleSearchClick} style={{marginLeft:"20px"}}>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundImage: `url(${bacgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "#fff", mb: 2, fontWeight: "bold" }}>
          Welcome to ZAMIN Town
        </Typography>
        <Typography variant="h6" sx={{ color: "#fff", mb: 4 }}>
          Good people. Good thinking. Good feeling.
        </Typography>

        {/* <Grid container spacing={2} sx={{ maxWidth: 600 }}>
          <Grid item xs={4}>
            <Select
              value={city}
              onChange={handleCityChange}
              displayEmpty
              sx={{
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: "4px",
                height: 40,
              }}
            >
              <MenuItem value="" disabled>
                Select a City
              </MenuItem>
              <MenuItem value="Everest">Everest plaza</MenuItem>
              <MenuItem value="Plato">Plato</MenuItem>
              <MenuItem value="Zamin">Zamin dacha</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={4}>
            <TextField
              type="date"
              fullWidth
              
              sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
            />
          </Grid>
          <Grid item xs={4}>
           <div>
             <TextField
              type="date"
              fullWidth
             
              sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
            />
           </div>
          </Grid>
        </Grid> */}

        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#FFB400",
            color: "white",
            fontWeight: "bold",
            ":hover": { backgroundColor: "#FFA000" },
          }}
          onClick={handleSignInClick}
        >
          Sign In
        </Button>
      </Box>

      {searchOpen && (
        <Box sx={{ position: "absolute", top: 60, left: 0, right: 0, p: 2, background: "#fff" }}>
          <TextField fullWidth placeholder="Search..." />
        </Box>
      )}
    </Box>
  );
}

export default Include;
