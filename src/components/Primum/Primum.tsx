import React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Header from "pages/Home/Header";
import Navbar from "components/navbar/Navbar";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";





const plans = [
  {
    title: "SILVER PLAN",
    price: "$29.00",
    features: ["Basic Listing", "Limited Ads", "Standard Support"],
    highlight: false,
  },
  {
    title: "DIOMAND PLAN",
    price: "79.00",
    features: ["Priority Listing", "Enhanced Ads", "Premium Support",  "Custom Analytics",],
    highlight: true,
  },
  {
    title: "GOLD PLAN",
    price: "$49.00",
    features: [
      "Top Listing",
      "Unlimited Ads",
      "24/7 Premium Support",
      //   "Custom Analytics",
    ],
    highlight: false,
  },
];

const Primum: React.FC = () => {
    const navigate= useNavigate()
    const handleClick = () =>{
        navigate('/selectplan');
    };
  return (
    <div>
      <Header />

      <Box sx={{ p: 4, backgroundColor: "#f9f9f9", mb:6 }}>
        <Navbar />
        <Typography variant="h4" align="center" p={4} gutterBottom style={{marginBottom:"20px", fontFamily:"Manrope"}}>
          Great Membership Plans
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {plans.map((plans, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 350,
                minWidth: 300,

                borderRadius: 2,

                "&:hover": {
                  boxShadow: plans
                    ? "0 4px 20px rgba(152, 159, 153, 0.3)"
                    : "0 2px 10px rgba(0,0,0,0.1)",
                  border: plans ? "2px solid none" : "1px solid #ddd",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold", color: "#333" , fontFamily:"Manrope"}}
                >
                  {plans.title}
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{ fontWeight: "bold", color: "#1BA98F", mt: 1 }}
                >
                  {plans.price}
                </Typography>
                <Typography align="center" sx={{ color: "#777", mt: 1, mb: 2 }}>
                  Per month
                </Typography>
                <Typography align="center" sx={{ color: "#777", mt: 1, mb: 2 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis odit molestiae maiores soluta asperiores tempora
                  suscipit aut. Dicta, in commodi.
                </Typography>
                <Stack spacing={1}>
                  {plans.features.map((feature, idx) => (
                    <Typography key={idx} align="center" sx={{ color: "#555" }}>
                      ✓ {feature}
                    </Typography>
                  ))}
                </Stack>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{ mt: 3,  backgroundColor:"#1BA98F"}}
                  onClick={handleClick}
                >
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};

export default Primum;
