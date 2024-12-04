import React from "react";
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Public, Hiking, Fastfood, Hotel, AttachMoney, AccessTime } from "@mui/icons-material";
import HomeSilider from "components/HomeSlider/HomeSilider";
import Villa4 from './img/villa4.jpg';
import Villa3 from './img/villa3.jpg';
import Villa2 from './img/villa2.jpg';
import Villa1 from './img/villa1.jpg';
import Villa5 from './img/villa5.jpg';



const destinationData = [
  { id: 1, title: "Tours And Travels", image: Villa1, description: "Explore the most breathtaking destinations." },
  { id: 1, title: "Tours And Travels", image: Villa2, description: "Explore the most breathtaking destinations." },
  { id: 1, title: "Tours And Travels", image: Villa3, description: "Explore the most breathtaking destinations." },
  { id: 1, title: "Tours And Travels", image: Villa4, description: "Explore the most breathtaking destinations." },
  { id: 1, title: "Tours And Travels", image: Villa5, description: "Explore the most breathtaking destinations." },
  { id: 1, title: "Tours And Travels", image: Villa1, description: "Explore the most breathtaking destinations." },
  { id: 1, title: "Tours And Travels", image: Villa2, description: "Explore the most breathtaking destinations." },
  { id: 1, title: "Tours And Travels", image: Villa3, description: "Explore the most breathtaking destinations." }
  // Add more destination data here
];


const serviceData = [
  { id: 1, title: "Worldwide", icon: <Public style={{fontSize:"60px", }} />, description: "Experience worldwide tours." },
  { id: 2, title: "Adventures", icon: <Hiking style={{fontSize:"60px"}}/>, description: "Embark on thrilling adventures." },
  { id: 3, title: "Foods & Drinks", icon: <Fastfood style={{fontSize:"60px"}} />, description: "Taste exotic cuisines." },
  { id: 4, title: "Affordable Hotels", icon: <Hotel style={{fontSize:"60px"}} />, description: "Comfortable stays at the best price." },
  { id: 5, title: "Affordable Price", icon: <AttachMoney style={{fontSize:"60px"}} />, description: "Best deals for your trips." },
  { id: 6, title: "24/7 Services", icon: <AccessTime style={{fontSize:"60px"}} />, description: "We are always here for you." },
];

const HomeMainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "2000px", width: "100%", margin: "auto", borderRadius: "40px", padding: "20px", marginBottom: "60px" }}>
      <Box sx={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", paddingBottom: "40px" }}>
        <HomeSilider />

        <section id="destination-section">
          <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: "bold" , paddingTop:"25px"}}>
            Make Yours Destination
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
            {destinationData.map((destination) => (
              <Grid item xs={12} sm={6} md={3} key={destination.id}>
                <Card
                  sx={{
                    backgroundColor: "#1E1E1E",
                    color: "#fff",
                    "&:hover": { transform: "scale(1.05)" },
                    transition: "transform 0.3s ease",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={destination.image}
                    alt={destination.title}
                    sx={{ transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.1)" } }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {destination.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {destination.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#FFB400",
                        borderColor: "#FFB400",
                        "&:hover": { backgroundColor: "#FFB400", color: "#fff" },
                      }}
                      onClick={() => navigate(`/destination-detail/${destination.id}`)}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>

        <section id="services-section">
          <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: "bold", paddingTop:"20px" }}>
            Countless Experience
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {serviceData.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card
                  sx={{
                    backgroundColor: "#1E1E1E",
                    color: "#fff",
                    textAlign:"center",
                    "&:hover": { transform: "scale(1.05)" },
                    transition: "transform 0.3s ease",
                    borderRadius: "16px",
                    overflow: "hidden",

                  }}
                >
                  <Box
                    onClick={() => navigate(`/card-info/${service.id}`)}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 2 }}>
                      <Box sx={{ fontSize: "48px", mb: 1, color: "#FFB400" }}>{service.icon}</Box>
                    </Box>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2">{service.description}</Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>
      </Box>
    </div>
  );
};

export default HomeMainPage;





