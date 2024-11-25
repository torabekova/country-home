import React, { useState } from "react";
// import "./login.css";
import { Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import tabler from "./img/tabler.png";
import { useNavigate } from "react-router-dom";  

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();  

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    
    if (!email) {
      alert("Please enter your email.");
      return;
    }

  
    console.log("Email:", email);

    
    setEmail("");
  };

  // Handle the back button click
  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="container">
      <div
        style={{
          maxWidth: "330px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#1BA98F",
        }}
        className="home_icon_div"
      >
        <button
          onClick={handleGoBack} 
          style={{
            width: "50px",
            height: "38px",
            borderRadius: "100px",
            border: "1px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "16px",
            paddingRight: "16px",
            borderColor: "#1BA98F",
          }}
        >
          <ArrowBackIosIcon style={{ color: "#1BA98F" }} />
        </button>
        <img src={tabler} alt="tabler icon" />
      </div>
      <h3 className="login_title">Forgot Password ?</h3>
      <p className="login_text">
        No worries, we’ll send you reset instructions
      </p>
      <form onSubmit={handleSubmit}>
        <Typography className="typography_text">Email</Typography>
        <div className="login_input_div">
          <MailOutlineIcon className="email_icon" />
          <input
            className="login_input"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Typography>
          <h1
            style={{
              fontFamily: "Manrope",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "21.7px",
              textAlign: "left",
              paddingTop: "1.5rem",
            }}
          >
            By creating an account, you agree to our Privacy Policy
          </h1>
        </Typography>

        <button type="submit" className="login_input_btn">
          <p className="login_input_btn-text">Reset</p>
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
