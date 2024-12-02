import React, { useState } from "react";
import "./Register.css";
import { Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import googleLogo from "./img/googleLogo.webp"
import appleLogo from "./img/appleLogo.png"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { text } from "stream/consumers";
type Props = {};

const Register = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    console.log("Email:", email, "Password:", password);
  };

  const handleGoogleSubmit = () => {
    console.log("hello google");
    
  };

  
  const handleAppleSubmit = () => {
    console.log("hello apple");
     
  };

  return (
    <div className="container">
      <h3 className="login_title">Create Your Account</h3>
      <p className="login_text">Please input to your account</p>
      <div className="input_div">
        <div>
        <Typography className="typography_text">First Name</Typography>
        <div className="register_input_div">
          <PermIdentityIcon className="email_icon" />
          <input
            className="register_input"
            type="text"
            placeholder="Input your first name"
            
          />
        </div>
        </div>
        <div>
        <Typography className="typography_text">Last Name</Typography> 
        <div className="register_input_div">
          <PermIdentityIcon className="email_icon" />
          <input
            className="register_input"
            type="text"
            placeholder="Input your last name"
           
            
          />
        </div>
        </div>
      </div>
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
        <Typography className="typography_text">Password</Typography>
        <div className="login_input_div">
          <LockIcon className="email_icon" />
          <input
className="login_input"
type={passwordVisible ? "text" : "password"}
placeholder="Your Password"
/>
{passwordVisible ? (
< VisibilityIcon
  className="email_icon"
  onClick={togglePasswordVisibility}
/>
) : (
<VisibilityOffIcon
  className="email_icon"
  onClick={togglePasswordVisibility}
/>
)}
        </div>
        
        <button type="submit" className="login_input_btn">
          <p className="login_input_btn-text">Login</p>
        </button>
        <div className="checkbox_div">
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
          </FormGroup>
          <Typography className="forgot_password">Forgot Password?</Typography>
        </div>
      </form>
      <div className="div_btn">
        <button className="btn_sign_google" onClick={handleGoogleSubmit}><img src={googleLogo} alt="google logo" width={25}  />  Sign in with Google</button>
        <button className="btn_sign_apple" onClick={handleAppleSubmit} > <img src={appleLogo} alt="apple logo" width={35} />Sign in with Apple</button>
      </div>
      <Typography className="Sign_up_title">Already have an account? {""} <a className="sign_up_link" href="#" >Sign Up</a></Typography>
    </div>
  );
};

export default Register;
