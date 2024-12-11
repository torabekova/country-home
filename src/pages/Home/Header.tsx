import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  handleScroll?: (id: string) => void;
  handleSignInClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleScroll, handleSignInClick }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#fff" }}>
          ZAMIN TOWN
        </Typography>
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {["Home", "About", "Destination", "Services"].map((text, index) => (
            <Button
              key={index}
              onClick={() => handleScroll && handleScroll(
                text.toLowerCase() === "home" ? "header":
                text.toLowerCase() === "about" ? "about" :
                text.toLowerCase() === "destination" ? "destination-section" :
                text.toLowerCase() === "services" ? "services-section" : text.toLowerCase()
              )}
              sx={{ color: "#fff" }}
            >
              {text}
            </Button>
          ))}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFB400",
              color: "white",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#FFA000" },
            }}
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
