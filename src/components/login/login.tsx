import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  MailOutline,
  Lock,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import bacgroundimg from "./img/bacgroundimg.png";
import Header from "pages/Home/Header";
import Footer from "components/Footer/Footer";
import Register from "components/register/Register";

import Checkbox from "@mui/material/Checkbox";
import ForgotPassword from "components/forgot-password/ForgotPAssword";
import axios from "axios";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Yup validatsiya sxemasi
const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

const Login: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoginStatus, getIsLoginStatus] = useState(false);
  const [isPassword, getIsPassword] = useState(false);
  const navigate = useNavigate();
  const [login, setLogin] = useState<[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false)

  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const onSubmit = (data: any) => {
    console.log("Login successful:", data);
    axios
      .post("https://8ff5-95-214-210-65.ngrok-free.app/user/signIn", {
        email,
        password,
      })
      .then(({status}) => {
        console.log(status);
        
        const statusString = status.toString();
        if (statusString.startsWith('2')) {
          navigate("/Dashboard");
          return
        } 

        if (statusString.startsWith("4")) {
          setIsError(true)
        }
        
        // setLogin(response.data);
      })
      .catch((err)=> {setIsError(true)});
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
        {!isLoginStatus ? (
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
            <Typography
              variant="h4"
              align="center"
              sx={{ mb: 3, color: "#FFB400" }}
            >
              HI, Welcome
            </Typography>
            <Typography align="center" sx={{ mb: 3, color: "#666D80" }}>
              Please login to your account
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography
                className="typography_text"
                style={{ color: "#666D80", marginBottom: "8px" }}
              >
                Email
              </Typography>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={email}
                    onChange={({ target }) => {
                      setEmail(target.value);
                    }}
                    variant={"outlined"}
                    fullWidth
                    color={isError ? "error": "primary"}
                    placeholder="Your Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ borderColor: "#FFB400" }}
                        >
                          <MailOutline style={{ color: "#666D80" }} />
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

              <Typography
                className="typography_text"
                style={{ color: "#666D80", marginBottom: "8px" }}
              >
                Password
              </Typography>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={password}
                    onChange={({ target }) => {
                      setPassword(target.value);
                    }}
                    type={passwordVisible ? "text" : "password"}
                    variant="outlined"
                    fullWidth
                    placeholder="Your Password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock style={{ color: "#666D80" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility}>
                            {passwordVisible ? (
                              <Visibility style={{ color: "#666D80" }} />
                            ) : (
                              <VisibilityOff style={{ color: "#666D80" }} />
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
              {!isPassword ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Checkbox style={{ borderColor: "#C1C7D0" }} {...label} />

                    <Typography
                      style={{
                        fontFamily: "Manrope",
                        fontSize: "14px",
                        fontWeight: "500",
                        lineHeight: " 21.7px",
                        textAlign: "left",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                        color: "#666D80",
                      }}
                    >
                      {" "}
                      Remember me
                    </Typography>
                  </div>
                  <a
                    onClick={() => getIsPassword(true)}
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "21.7px",
                      textAlign: "left",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                      color: "#C1C7D0",
                    }}
                  >
                    {" "}
                    Forgot Password ?
                  </a>
                </div>
              ) : (
                <ForgotPassword />
              )}
            </form>
            <Typography
              className="Sign_up_title"
              style={{
                textAlign: "center",
                marginTop: "16px",
                color: "#666D80",
              }}
            >
              Already have an account?{" "}
              <a
                className="sign_up_link"
                onClick={() => getIsLoginStatus(true)}
                style={{ color: "#1BA98F" }}
              >
                Sign Up
              </a>
            </Typography>
          </Box>
        ) : (
          <Register getIsLoginStatus={() => getIsLoginStatus(false)} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
