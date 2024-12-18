import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button } from "@mui/material";
import lock from "./img/lock.svg"; 
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility"; 
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; 
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import tabler from "./img/tabler.svg";

const SetNewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [open, setOpen] = useState(true); 

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("New Password:", password);
    setPassword("");
    setConfirmPassword("");
    setOpen(false); 
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword); 
  };

  const handleClose = () => setOpen(false);
  const handleGoBack = () => navigate(-1);

  return (
    <div>
    
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <div style={{backgroundColor: "#1E1E1E",}}>
          <DialogTitle
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              gap: "180px",
              color: "#1BA98F",
              marginBottom: "20px",
            }}
            className="home_icon_div"
          >
            <button
              onClick={handleGoBack}
              style={{
                width: "50px",
                height: "38px",
                borderRadius: "100px",
                paddingTop: "5px",
                paddingLeft: "5px",
                backgroundColor: "#1E1E1E",
                borderColor: "#FFB400",
              }}
            >
              <ArrowBackIosIcon style={{ color: "#FFB400" }} />
            </button>
            <img src={tabler} alt="tabler icon" />
          </DialogTitle>
        <DialogTitle style={{ textAlign: "center", fontWeight: "600", fontFamily: "Manrope", fontSize: "32px", paddingBottom: "16px", color: "#FFB400" }}>
          Set New Password
        </DialogTitle>
        <DialogContent>
          <Typography style={{ textAlign: "center", marginBottom: "20px" , fontFamily: "Manrope", fontSize: "16px", fontWeight: "500", color: "#666D80", }}>
            Must be at least 8 characters
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* Password Input */}
            <div style={{ marginBottom: "20px" }}>
              <Typography style={{
                  fontFamily: "Manrope",
                  fontWeight: "500px",
                  textAlign: "left",
                  color: "#666D80",
                  marginBottom: "8px",
                }}>Password</Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                  padding: "8px",
                  borderColor: "#FFB400",
                  backgroundColor: "#1E1E1E",
                  border: "1px solid #FFB400",
                }}
              >
                <img src={lock} alt="lock icon" />
                <input
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    marginLeft: "8px",
                    fontFamily: "Manrope",
                    backgroundColor: "#1E1E1E",
                    color:"white"
                  }}
                />
                {showPassword ? (
                  <VisibilityOffIcon
                    style={{ cursor: "pointer", color: "#666D80" }}
                    onClick={handleTogglePasswordVisibility}
                  />
                ) : (
                  <VisibilityIcon
                    style={{ cursor: "pointer", color: "#666D80" }}
                    onClick={handleTogglePasswordVisibility}
                  />
                )}
              </div>
            </div>

      
            <div>
              <Typography style={{
                  fontFamily: "Manrope",
                  fontWeight: "500px",
                  textAlign: "left",
                  color: "#666D80",
                  marginBottom: "8px",
                }}>Confirm Password</Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                  padding: "8px",
                  borderColor: "#FFB400",
                  backgroundColor: "#1E1E1E",
                  border: "1px solid #FFB400",
                }}
              >
                <img src={lock} alt="lock icon" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    marginLeft: "8px",
                    fontFamily: "Manrope",
                    backgroundColor: "#1E1E1E",
                    color:"white"
                  }}
                />
                {showConfirmPassword ? (
                  <VisibilityOffIcon
                    style={{ cursor: "pointer", color: "#666D80" }}
                    onClick={handleToggleConfirmPasswordVisibility}
                  />
                ) : (
                  <VisibilityIcon
                    style={{ cursor: "pointer", color: "#666D80" }}
                    onClick={handleToggleConfirmPasswordVisibility}
                  />
                )}
              </div>
            </div>

           
            <Button
              type="submit"
              sx={{
                width: "100%",
                height: "48px",
                borderRadius: "100px",
                backgroundColor: "#1BA98F",
                color: "white",
                fontWeight: "500",
                marginTop: "20px",
                ":hover": { backgroundColor: "#FFA000" },
                mb: 3,
                padding: "10px 20px",
              }}
            >
              Reset
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#1BA98F" }}>
            Close
          </Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default SetNewPassword;
