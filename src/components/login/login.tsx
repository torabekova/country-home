import React from "react";
import { useForm, Controller} from "react-hook-form";
import { Box, TextField, Button, Typography, IconButton, InputAdornment, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Visibility, VisibilityOff, MailOutline, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import googleLogo from "./img/googleLogo.webp";
import appleLogo from "./img/appleLogo.png";
import "./login.css";
import { useState } from "react";
import bacgroundimg from "./img/bacgroundimg.png";
import Header from "pages/Home/Header";
import Footer from "components/Footer/Footer";

const Login: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data: any) => {
    navigate("/dashboard"); 
  };

  return (
<div>
<Header/>
<div style={{ backgroundImage: `url(${bacgroundimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",}}>
      {/* <Header/> */}
       <Box sx={{ maxWidth: "500px", margin: "auto", mt: 8, backgroundColor: "#1E1E1E", padding: 4, borderRadius: 2 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3, color: "#FFB400" }}>
        HI, Welcome
      </Typography>
      <Typography align="center" sx={{ mb: 3, color: "#666D80" }}>
        Please login to your account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography className="typography_text">Email</Typography>
       <Controller
  name="email"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      variant="outlined"
      fullWidth
      placeholder="Your Email"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" style={{ borderColor: "#FFB400" }}>
            <MailOutline style={{color:"white"}} />
          </InputAdornment>
        ),
        style: { color: "#fff" },
      }}
      sx={{
        mb: 3,
        "& .MuiOutlinedInput-root": {
          color: "#fff", // Text color
          "& fieldset": {
            borderColor: "#FFB400", // Default border color
          },
          "&:hover fieldset": {
            borderColor: "#FFB400", // Border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FFB400", // Border color when focused
          },
        },
        "& .MuiInputLabel-root": {
          color: "#fff", // Label color
        },
      }}
    />
  )}
/>

        <Typography className="typography_text">Password</Typography>
        <Controller
      name="password"
      control={control} // Make sure `control` is passed in as a prop from react-hook-form
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          type={passwordVisible ? "text" : "password"}
          variant="outlined"
          fullWidth
          placeholder="Your Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock style={{color:"white"}}/>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {passwordVisible ? <Visibility  style={{color:"white"}}/> : <VisibilityOff style={{color:"white"}}/>}
                </IconButton>
              </InputAdornment>
            ),
            style: { color: "#fff" }, // Input text color
          }}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              color: "#fff", // Text color for the input
              "& fieldset": {
                borderColor: "#FFB400", // Default border color
              },
              "&:hover fieldset": {
                borderColor: "#FFB400", // Border color when hovered
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FFB400", // Border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              color: "#fff", // Label color
            },
          }}
        />
      )}
/>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#1BA98F",
            color: "white",
            fontWeight: "bold",
            ":hover": { backgroundColor: "#FFA000" },
            mb: 3,
            padding: "10px 20px",
          }}
        >
          Login
        </Button>
        {/* <div className="checkbox_div">
          <FormGroup>
            <FormControlLabel control={<Checkbox sx={{ color: "#FFB400" }} />} label="Remember me" sx={{ color: "#fff" }} />
          </FormGroup>
          <Typography className="forgot_password">Forgot Password?</Typography>
        </div> */}
      </form>
      {/* <div className="div_btn">
        <Button className="btn_sign_google" startIcon={<img src={googleLogo} alt="google logo" width={25} />}>
          Sign in with Google
        </Button>
        <Button className="btn_sign_apple" startIcon={<img src={appleLogo} alt="apple logo" width={35} />}>
          Sign in with Apple
        </Button>
      </div> */}
      {/* <Typography className="Sign_up_title">
        Don’t have an account? <a className="sign_up_link" href="#">Sign Up</a>
      </Typography> */}
    </Box>
    
    </div>
    <Footer/>
</div>
    
   
  );
};

export default Login;
