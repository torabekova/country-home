import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Header from "pages/Home/Header";
import Footer from "components/Footer/Footer";

const DetailPage: React.FC = () => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert("Thank you for your message!");
    reset();
  };

  

  return (
<div style={{backgroundColor:"black"}}>
<Box sx={{ maxWidth: "1200px", margin: "auto", padding: 2,}}>
     
      <Typography variant="h3" align="center" sx={{ my: 4, fontWeight: "bold" }}>
        About Us
      </Typography>
      <Card sx={{ mb: 4, borderRadius:"10px" }}>
        <CardMedia
          component="img"
          height="400"
          image="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" // Replace with your image URL
          alt="About Us Image"
        />
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Welcome to ZAMIN TOWN
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ante sapien, non dapibus felis consequat ac.
            Fusce euismod metus id ullamcorper venenatis. Aenean pharetra suscipit lacus, a interdum nisi auctor at.
          </Typography>
        </CardContent>
      </Card>
      <div>
<iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391791.11795770284!2d67.96893118599341!3d39.89958512064768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b25239f8d76ce3%3A0x2150c2f17b39602d!2sZomin%20tumani%2C%20Jizzax%20viloyati%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1733742786743!5m2!1suz!2s"
        width="100%"
        height="400"
        style={{ border: 0, marginBottom: "40px", borderRadius:"10px" }}
        // allowFullScreen=""
        loading="lazy"
        title="Google Maps Location"
      ></iframe>
      </div>
      
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ backgroundColor: "#1E1E1E", p: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 3, color: "#FFB400" }}>
          Support Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      backgroundColor: "#333",
                      borderRadius: "20px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FFB400",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FFB400",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      backgroundColor: "#333",
                      borderRadius: "20px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FFB400",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FFB400",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      backgroundColor: "#333",
                      borderRadius: "20px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FFB400",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FFB400",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#FFB400",
                color: "white",
                padding: "10px 20px",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#FFA000",
                },
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </Box>
</div>
    
  );
};

export default DetailPage;
