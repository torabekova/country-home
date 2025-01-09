import LockIcon from "@mui/icons-material/Lock";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import axios from "axios";
import { AuthScreens } from "components/login/login";
import React, { Dispatch, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setCurrentView: Dispatch<React.SetStateAction<AuthScreens>>;
}

const Register = ({ setCurrentView }: Props) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("sa");

    // axios
    //   .post("/user/signUp", {
    //     email,
    //     password,
    //     firstName,
    //     lastName,
    //   })
    //   .then((data) => {
    //     console.log(data.status);

    //     const statusString = data.status.toString();

    //     if (statusString.startsWith("4")) {
    //       navigate("/propertiespage");
    //     } else if (statusString.startsWith("4")) {
    //       setIsError(true);
    //     }
    //     console.log(data.data.id);

    //     if (data && data.data.id) {
    //       sessionStorage.setItem('user_id', data.data._id);
    //     }
    //   })
    //   .catch(() => {
    //     setIsError(true);
    //   });

    axios
      .post("/user/signUp", {
        email,
        password,
        firstName,
        lastName,
      })
      .then((response) => {
        console.log(response.data._id);

        const statusString = response.status.toString();

        if (!statusString.startsWith("4")) {
          navigate("/Dashboard");
        } else if (statusString.startsWith("4")) {
          setIsError(true);
        }

        if (response.data && response.data.id) {
          sessionStorage.setItem("user_id", response.data.id);
        }
      })
      .catch(() => {
        setIsError(true);
      });
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const navigateToSignIn = () => {
    setCurrentView("login");
  };

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

            <form>
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
                onClick={handleSubmit}
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
