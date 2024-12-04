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
      <Header handleScroll={function (id: string): void {
        throw new Error("Function not implemented.");
      } } handleSignInClick={function (): void {
        throw new Error("Function not implemented.");
      } }/>
      <Typography variant="h3" align="center" sx={{ my: 4, fontWeight: "bold" }}>
        About Us
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardMedia
          component="img"
          height="400"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQ4rsmDCcZyN0bxDo5BZesf7xitRJdRL9a6q11cG82VozjiSusbADtPocghh40nCogkY&usqp=CAU" // Replace with your image URL
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094376!2d144.9559253156859!3d-37.81720974202186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577206ee4c5f3ac!2sEureka%20Skydeck!5e0!3m2!1sen!2sau!4v1614033793386!5m2!1sen!2sau"
        width="100%"
        height="400"
        style={{ border: 0, marginBottom: "40px" }}
        // allowFullScreen=""
        loading="lazy"
        title="Google Maps Location"
      ></iframe>
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
