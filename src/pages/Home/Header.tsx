import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  handleScroll?: (id: string) => void;
  handleSignInClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleScroll, handleSignInClick }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };

  const user_id = localStorage.getItem("user_id");

  const Logout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_role");
    onClick();
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>
      <Toolbar>
        <Typography
          onClick={onClick}
          variant="h6"
          sx={{ flexGrow: 1, color: "#fff", cursor: "pointer" }}
        >
          ZAMIN TOWN
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "20px" }}>
            {["Home", "About", "Destination"].map((text, index) => (
              <Button
                key={index}
                onClick={() =>
                  handleScroll &&
                  handleScroll(
                    text.toLowerCase() === "home"
                      ? "header"
                      : text.toLowerCase() === "about"
                      ? "about"
                      : text.toLowerCase() === "destination"
                      ? "destination-section"
                      : text.toLowerCase()
                  )
                }
                sx={{ color: "#fff" }}
              >
                {text}
              </Button>
            ))}
            {!user_id ? (
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
            ) : (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFB400",
                  color: "white",
                  fontWeight: "bold",
                  ":hover": { backgroundColor: "#FFA000" },
                }}
                onClick={Logout}
              >
                Log out
              </Button>
            )}
          </Box>

          {/* Burger menu for small screens */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, height: 300, padding: "10px" }}>
          {["Home", "About", "Destination"].map((text, index) => (
            <Button
              key={index}
              onClick={() =>
                handleScroll &&
                handleScroll(
                  text.toLowerCase() === "home"
                    ? "header"
                    : text.toLowerCase() === "about"
                    ? "about"
                    : text.toLowerCase() === "destination"
                    ? "destination-section"
                    : text.toLowerCase()
                )
              }
              sx={{
                color: "#000",
                width: "100%",
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              {text}
            </Button>
          ))}
          {!user_id ? (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFB400",
                color: "white",
                fontWeight: "bold",
                ":hover": { backgroundColor: "#FFA000" },
                width: "100%",
              }}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFB400",
                color: "white",
                fontWeight: "bold",
                ":hover": { backgroundColor: "#FFA000" },
                width: "100%",
              }}
              onClick={Logout}
            >
              Log out
            </Button>
          )}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
