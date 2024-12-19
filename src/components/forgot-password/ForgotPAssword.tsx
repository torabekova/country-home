import React, { useState, useEffect, Dispatch } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import tabler from "./img/tabler.svg";
import PasswordReset from "components/PasswordReset/PasswordReset";
import { AuthScreens } from "components/login/login";

interface Props {
  setCurrentView: Dispatch<React.SetStateAction<AuthScreens>>;
}

const ForgotPassword = ({ setCurrentView}: Props) => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false); 
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    console.log("Email:", email);
    setEmail("");
    setIsForgotPassword(true);  
  };

  const handleGoBack = () => {
    setCurrentView('login')
  };

  const handleClose = () => {
    setCurrentView('login')
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        {!isForgotPassword ? (
          <div className="container" style={{ padding: "20px", backgroundColor: "#1E1E1E", borderRadius: "1px" }}>
            <div
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
              <img src={tabler} alt="tabler icon" style={{ color: "#FFB400" }} />
            </div>

            <DialogTitle style={{ fontFamily: "Manrope", fontSize: "32px", fontWeight: "600", textAlign: "center", paddingBottom: "16px", color: "#FFB400" }}>
              Forgot Password ?
            </DialogTitle>

            <DialogContent>
              <Typography style={{ fontFamily: "Manrope", fontSize: "16px", fontWeight: "500", textAlign: "center", color: "#666D80", marginBottom: "20px" }}>
                No worries, we’ll send you reset instructions.
              </Typography>

              <form onSubmit={handleSubmit}>
                <Typography
                  className="typography_text"
                  style={{
                    fontFamily: "Manrope",
                    fontWeight: "500px",
                    textAlign: "left",
                    color: "#666D80",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </Typography>
                <div
                  className="login_input_div"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "48px",
                    borderRadius: "5px",
                    backgroundColor: "#1E1E1E",
                    marginBottom: "20px",
                    padding: "8px",
                    border: "1px, solid, #FFB400",
                    borderColor: "#FFB400",
                  }}
                >
                  <MailOutlineIcon style={{ color: "#666D80" }} />
                  <input
                    className="login_input"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      color: "white",
                      padding: "8px 12px",
                      fontFamily: "Manrope",
                      fontSize: "20px",
                      border: "none",
                      backgroundColor: "#1E1E1E",
                      outline: "none",
                      borderRadius: "100px",
                      
                    }}
                  />
                </div>

                <Typography style={{ fontFamily: "Manrope", fontSize: "14px", fontWeight: "500", textAlign: "left", marginBottom: "20px", color: "#666D80" }}>
                  By creating an account, you agree to our Privacy Policy
                </Typography>

                <Button
                  type="submit"
                  sx={{
                    width: "100%",
                    height: "48px",
                    borderRadius: "5px",
                    backgroundColor: "#1BA98F",
                    color: "white",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "500",
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
        ) : (
          <PasswordReset />
        )}
      </Dialog>
    </div>
  );
};

export default ForgotPassword;
