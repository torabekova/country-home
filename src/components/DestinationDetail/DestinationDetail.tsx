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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_aWDdiC-SwNDuGepN8YSRl8qMjrZUKkBQw&s", // Replace with actual image URL
    description: "Explore the most breathtaking destinations.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391791.11795770284!2d67.96893118599341!3d39.89958512064768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b25239f8d76ce3%3A0x2150c2f17b39602d!2sZomin%20tumani%2C%20Jizzax%20viloyati%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1733742786743!5m2!1suz!2s",
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
      <Card sx={{ mb: 4, marginBottom:"20px", backgroundColor:"black", color:"white",}}>
        <CardMedia style={{borderRadius:"10px"}}
          component="img"
          height="400"
          image={destination.image}
          alt={destination.title}
        />
        {/* <iframe
  src={destination.location}
  width="100%"
  height="400"
  style={{ border: 0 }}
  loading="lazy"
  title={`${destination.title} Google Maps Location`}
></iframe> */}

        <CardContent style={{borderRadius:"10px"}}>
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
            style={{ border: 0, borderRadius:"10px" }}
          
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
