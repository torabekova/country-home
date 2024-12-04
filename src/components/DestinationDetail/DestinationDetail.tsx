import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "pages/Home/Header";
import Footer from "components/Footer/Footer";

const destinationData = [
  {
    id: 1,
    title: "Tours And Travels",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/11/TD/AM/IK/88789658/travel-hotel-bus-flight-white-label-b2b.jpg", // Replace with actual image URL
    description: "Explore the most breathtaking destinations.",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094376!2d144.9559253156859!3d-37.81720974202186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577206ee4c5f3ac!2sEureka%20Skydeck!5e0!3m2!1sen!2sau!4v1614033793386!5m2!1sen!2sau",
  },
  // Add more destination data here
];

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = destinationData.find((dest) => dest.id.toString() === id);

  if (!destination) {
    return <Typography variant="h5">Destination not found.</Typography>;
  }

  return (
    <div style={{backgroundColor:"black"}}>
  <Box sx={{ maxWidth: "1200px", margin: "auto", padding: 2 }}>
    <Header/>
      <Card sx={{ mb: 4, marginBottom:"20px", backgroundColor:"black", color:"white"}}>
        <CardMedia
          component="img"
          height="400"
          image={destination.image}
          alt={destination.title}
        />
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {destination.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {destination.description}
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Location
          </Typography>
          <iframe
            src={destination.location}
            width="100%"
            height="400"
            style={{ border: 0 }}
          
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFB400",
          color: "white",
          marginBottom:"30px",
          padding: "10px 20px",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#FFA000",
          },
        }}
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
      <Footer />
    </Box>
    </div>
  
  );
};

export default DestinationDetail;
