import {
  Lock,
  MailOutline,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import Footer from "components/Footer/Footer";
import ForgotPassword from "components/forgot-password/ForgotPAssword";
import Register from "components/register/Register";
import Header from "pages/Home/Header";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import bacgroundimg from "./img/bacgroundimg.png";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export type AuthScreens = "login" | "forgotPassword" | "register";

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentView, setCurrentView] = useState<AuthScreens>("login");
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  console.log(email, password);

  const onSubmit = (data: any) => {
    axios
      .post("/user/signIn", {
        email,
        password,
      })
      .then(({ status }) => {
        const statusString = status.toString();
        if (statusString.startsWith("2")) {
          navigate("/Dashboard");
          return;
        }

        if (statusString.startsWith("4")) {
          setIsError(true);
        }
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  const handleViewChange = (view: "login" | "forgotPassword" | "register") => {
    setCurrentView(view);
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
        {currentView === "login" && (
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
                    color={isError ? "error" : "primary"}
                    placeholder="Your Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ borderColor: "#FFB400" }}
                        >
                          {/* <MailOutline style={{ color: "#666D80" }} /> */}
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
                  {errors ? errors.root?.message : ""}
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
                      "& .MuiInpyarn startutLabel-root": {
                        color: "#fff",
                      },
                    }}
                  />
                )}
              />
              {errors.password && (
                <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                  {errors ? errors.root?.message : ""}
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
                  onClick={() => handleViewChange("forgotPassword")}
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "21.7px",
                    textAlign: "left",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#C1C7D0",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Forgot Password ?
                </a>
              </div>
            </form>
            <Typography
              className="Sign_up_title"
              style={{
                textAlign: "center",
                marginTop: "16px",
                color: "#666D80",
              }}
            >
              Don't have an account?{" "}
              <a
                className="sign_up_link"
                onClick={() => handleViewChange("register")}
                style={{ color: "#1BA98F", cursor: "pointer" }}
              >
                Sign Up
              </a>
            </Typography>
          </Box>
        )}

        {currentView === "forgotPassword" && (
          <ForgotPassword setCurrentView={setCurrentView} />
        )}
        {currentView === "register" && (
          <Register setCurrentView={setCurrentView} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
