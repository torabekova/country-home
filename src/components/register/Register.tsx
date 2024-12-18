import React, { useState, useEffect, Dispatch } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthScreens } from "components/login/login";

interface Props {
  setCurrentView: Dispatch<React.SetStateAction<AuthScreens>>;
}

const Register = ({  setCurrentView }: Props) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);


  const navigate = useNavigate();

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, "First Name:", firstName, "Last Name:", lastName);
    
    // Make the POST request to register the user
    axios
      .post("https://e732-95-214-211-183.ngrok-free.app/user/signUp", {
        email,
        password,
        firstName,
        lastName,
      })
      .then(({ status }: { status: number }) => {
        console.log(status);

        const statusString = status.toString();
        console.log(status);
        console.log(email);
        console.log(password);
        console.log(lastName);
        console.log(firstName);
        console.log(status);
        
        if (statusString.startsWith("2")) {
          navigate("/propertiespage");
        } else if (statusString.startsWith("4")) {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      });
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  // Close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  const navigateToSignIn = () => {
    setCurrentView("login");
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <div
          className="container"
          style={{
            padding: "20px",
            borderRadius: "1px",
            backgroundColor: "#1E1E1E",
          }}
        >
          <DialogTitle
            style={{
              fontFamily: "Manrope",
              fontSize: "32px",
              fontWeight: "600",
              textAlign: "center",
              paddingBottom: "16px",
              color: "#FFB400",
            }}
          >
            Create Your Account
          </DialogTitle>

          <DialogContent>
            <p
              className="login_text"
              style={{
                textAlign: "center",
                color: "#666D80",
                marginBottom: "16px",
              }}
            >
              Please input to your account
            </p>

            <div
              className="input_div"
              style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
            >
              <div>
                <Typography
                  className="typography_text"
                  style={{ color: "#666D80", marginBottom: "8px" }}
                >
                  First Name
                </Typography>
                <div
                  className="register_input_div"
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "10px",
                    padding: "8px 12px",
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    borderRadius: "5px",
                    alignItems: "center",
                    border: "1px solid #FFB400",
                  }}
                >
                  <PermIdentityIcon
                    className="email_icon"
                    style={{ color: "#666D80" }}
                  />
                  <input
                    value={firstName}
                    onChange={({ target }) => setFirstName(target.value)}
                    className="register_input"
                    type="text"
                    placeholder="Input your first name"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      fontFamily: "Manrope",
                      fontSize: "20px",
                      border: "none",
                      backgroundColor: "#1E1E1E",
                      outline: "none",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  />
                </div>
              </div>

              <div>
                <Typography
                  className="typography_text"
                  style={{ color: "#666D80", marginBottom: "8px" }}
                >
                  Last Name
                </Typography>
                <div
                  className="register_input_div"
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "10px",
                    padding: "8px 12px",
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    borderRadius: "5px",
                    alignItems: "center",
                    border: "1px solid #FFB400",
                  }}
                >
                  <PermIdentityIcon
                    className="email_icon"
                    style={{ color: "#666D80" }}
                  />
                  <input
                    value={lastName}
                    onChange={({ target }) => setLastName(target.value)}
                    className="register_input"
                    type="text"
                    placeholder="Input your last name"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      fontFamily: "Manrope",
                      fontSize: "20px",
                      border: "none",
                      backgroundColor: "#1E1E1E",
                      outline: "none",
                      color: "white",
                    }}
                  />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <Typography
                className="typography_text"
                style={{ color: "#666D80", marginBottom: "8px" }}
              >
                Email
              </Typography>
              <div
                className="login_input_div"
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "10px",
                  padding: "8px 12px",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  backgroundColor: "#1E1E1E",
                  borderRadius: "5px",
                  alignItems: "center",
                  marginBottom: "10px",
                  border: "1px solid #FFB400",
                }}
              >
                <MailOutlineIcon
                  className="email_icon"
                  style={{ color: "#666D80" }}
                />
                <input
                  className="login_input"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    border: "none",
                    backgroundColor: "#1E1E1E",
                    outline: "none",
                    color: "white",
                  }}
                />
              </div>

              <Typography
                className="typography_text"
                style={{ color: "#666D80", marginBottom: "8px" }}
              >
                Password
              </Typography>
              <div
                className="login_input_div"
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "10px",
                  padding: "8px 12px",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  borderRadius: "5px",
                  alignItems: "center",
                  marginBottom: "15px",
                  border: "1px solid #FFB400",
                  backgroundColor: "#1E1E1E",
                }}
              >
                <LockIcon className="email_icon" style={{ color: "#666D80" }} />
                <input
                  className="login_input"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    border: "none",
                    backgroundColor: "#1E1E1E",
                    outline: "none",
                    color: "white",
                  }}
                />
                {passwordVisible ? (
                  <VisibilityIcon
                    className="email_icon"
                    onClick={togglePasswordVisibility}
                    style={{ color: "#666D80" }}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="email_icon"
                    onClick={togglePasswordVisibility}
                    style={{ color: "#666D80" }}
                  />
                )}
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  marginTop: "1.5rem",
                  backgroundColor: "#1BA98F",
                  color: "white",
                  fontWeight: "bold",
                  ":hover": { backgroundColor: "#FFA000" },
                  mb: 3,
                  padding: "10px 20px",
                }}
              >
                Register
              </Button>
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
                onClick={navigateToSignIn}
                style={{ color: "#1BA98F", cursor: "pointer" }}
              >
                Sign In
              </a>
            </Typography>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default Register;
