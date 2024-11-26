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

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container" style={{ maxWidth: "580px",
      height: "680px",
      margin: "0 auto",
      padding: "100px",
    borderRadius: "16px",
 
      border: "1px solid #B0B0B040",
      backgroundColor: "#B0B0B040",
      marginTop: "20px",}}>
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
      <h3 className="login_title" style={{fontFamily: "Manrope",
fontSize: "32px",
fontWeight: "600",
lineHeight: "44.8px",
color: "#0D0D12",
textAlign: "center",
textUnderlinePosition: "from-font",
textDecorationSkipInk: "none",
paddingTop: "1.5rem",}}>Forgot Password ?</h3>
      <p className="login_text" style={{fontFamily: "Manrope",
fontSize: "16px",
fontWeight: "500",
lineHeight: "25.6px",
textAlign: "center",
textUnderlinePosition: "from-font",
textDecorationSkipInk: "none",
color:" #666D80",}}>
        No worries, we’ll send you reset instructions
      </p>
      <form onSubmit={handleSubmit}>
        <Typography
          className="typography_text"
          style={{ fontFamily: "Manrope",
            fontWeight:"500px",
            lineHeight:"21.7px",
            textAlign:"left",
            color:"#0D0D12",
            paddingTop:"10px",
            paddingBottom:"15px",
           }}
        >
          Email
        </Typography>
        <div className="login_input_div" style={{width:"550px",
    height: "48px",
    padding: "8px 12px 8px 12px",
    gap: "8px",
    borderRadius: "100px",
    border:"1px ",
    opacity: "0px",
    backgroundColor: "#F8FAFB",
    borderColor:"#DFE1E7",
    alignItems: "center",
    display: "flex",
    marginBottom: "10px",}}>
          <MailOutlineIcon className="email_icon" />
          <input
            className="login_input"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width:"550px",
              height: "48px",
              padding: "8px 12px 8px 12px",
              gap: "8px",
              borderRadius: "100px",
             
              opacity: "0px",
              fontFamily: "Manrope",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "25.6px",
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          color: "#666D80",
          border: "none",
          backgroundColor: "#F8FAFB",
          outline: "none",}}
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

        <button type="submit" className="login_input_btn" style={{width:"570px",
    height: "60px",
    padding: "8px 12px 8px 12px",
    gap: "8px",
    borderRadius: "100px",
    
    opacity: "0px",
    
    border:" 1px solid #DFE1E7",
    
    color: "white",
    marginBottom: "10px",
    backgroundColor:" #1BA98F",
    textAlign: "center",
    alignItems: "center",
    marginTop: "24px",}}>
          <p className="login_input_btn-text" style={{fontFamily: "Inter",
fontSize: "14px",
fontWeight: "500",
lineHeight: "20px",
textAlign: "center",
textUnderlinePosition: "from-font",
textDecorationSkipInk: "none",
color: "#FFFFFF",}}>Reset</p>
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
