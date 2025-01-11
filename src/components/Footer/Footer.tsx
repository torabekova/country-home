import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed Email:", email);
      alert("Thank you for subscribing!");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const handleScroll = (id: string) => {
    if (id === "header") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        // maxWidth: "2000px",
        width: "100%",
        backgroundColor: "#000",
        margin: "auto",
        color: "#fff",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        padding: "40px",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          ZAMIN TOWN
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Yaxshi insonlar. Ajoyib g'oyalar. Yahshi hislar.
        </Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <IconButton
            sx={{ color: "#FFB400" }}
            aria-label="Facebook"
            onClick={() => openLink("https://facebook.com/FaridaTo'rabekova")}
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{ color: "#FFB400" }}
            aria-label="Instagram"
            onClick={() => openLink("https://instagram.com/mayajon__07")}
          >
            <Instagram />
          </IconButton>
          <IconButton
            sx={{ color: "#FFB400" }}
            aria-label="Twitter"
            onClick={() => openLink("https://twitter.com")}
          >
            <Twitter />
          </IconButton>
          <IconButton
            sx={{ color: "#FFB400" }}
            aria-label="LinkedIn"
            onClick={() =>
              openLink("https://linkedin.com/in/FaridaTo'rabekova")
            }
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Tezkor Havolalar
        </Typography>
        {["Home", "About", "Destination"].map((link, index) => (
          <Typography
            key={index}
            sx={{
              cursor: "pointer",
              "&:hover": { color: "#FFB400" },
              mb: 1,
            }}
            onClick={() =>
              handleScroll(
                link.toLowerCase() === "home"
                  ? "header"
                  : link.toLowerCase() === "about"
                  ? "about"
                  : link.toLowerCase() === "destination"
                  ? "destination-section"
                  : ""
              )
            }
          >
            {link}
          </Typography>
        ))}
      </Box>

      <Box>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Bizning Manzil
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <LocationOn sx={{ color: "#FFB400", mr: 1 }} />
          <Typography>Jizzax viloyati Zomin tumani</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Phone sx={{ color: "#FFB400", mr: 1 }} />
          <Typography>(+998) 095 67 74</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Email sx={{ color: "#FFB400", mr: 1 }} />
          <Typography>faridatorabekova6@gmail.com</Typography>
        </Box>
        <Typography>7:00 am - 24:00 pm</Typography>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Axborot xatlari
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Eng so'nggi yangilanishlarga obuna bo'ling
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <TextField
            placeholder="Emailingizni kiriting"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                backgroundColor: "#1E1E1E",
                borderRadius: "20px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFB400",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFB400",
              },
            }}
          />
          <Button
            variant="outlined"
            sx={{
              color: "#FFB400",
              borderColor: "#FFB400",
              borderRadius: "20px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#FFB400", color: "white" },
            }}
            onClick={handleSubscribe}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
