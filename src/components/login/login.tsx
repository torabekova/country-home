import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, TextField, Button, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff, MailOutline, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup"; // Yup kutubxonasini import qilish
import { yupResolver } from "@hookform/resolvers/yup"; // yupResolver import qilish
import bacgroundimg from "./img/bacgroundimg.png";
import Header from "pages/Home/Header";
import Footer from "components/Footer/Footer";

// Yup validatsiya sxemasi
const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
}).required();

const Login: React.FC = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data: any) => {
    console.log("Login successful:", data); 
    navigate("/Dashboard"); 
  };

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${bacgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            margin: "auto",
            mt: 8,
            backgroundColor: "#1E1E1E",
            padding: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" align="center" sx={{ mb: 3, color: "#FFB400" }}>
            HI, Welcome
          </Typography>
          <Typography align="center" sx={{ mb: 3, color: "#666D80" }}>
            Please login to your account
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography className="typography_text" style={{color: "#666D80" , marginBottom:"8px"}}>Email</Typography>
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
                        <MailOutline style={{ color: "white" }} />
                      </InputAdornment>
                    ),
                    style: { color: "#fff" },
                  }}
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      color: "#fff", 
                      "& fieldset": {
                        borderColor: "#FFB400", 
                      },
                      "&:hover fieldset": {
                        borderColor: "#FFB400", 
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FFB400", 
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#fff", 
                    },
                  }}
                />
              )}
            />
            {errors.email && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {errors.email.message}
              </Typography>
            )}

            <Typography className="typography_text" style={{color: "#666D80" ,marginBottom:"8px"}}>Password</Typography>
            <Controller
              name="password"
              control={control}
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
                        <Lock style={{ color: "white" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                          {passwordVisible ? (
                            <Visibility style={{ color: "white" }} />
                          ) : (
                            <VisibilityOff style={{ color: "white" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: { color: "#fff" }, 
                  }}
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      color: "#fff", 
                      "& fieldset": {
                        borderColor: "#FFB400", 
                      },
                      "&:hover fieldset": {
                        borderColor: "#FFB400", 
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FFB400", 
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#fff", 
                    },
                  }}
                />
              )}
            />
            {errors.password && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {errors.password.message}
              </Typography>
            )}

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
          </form>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
