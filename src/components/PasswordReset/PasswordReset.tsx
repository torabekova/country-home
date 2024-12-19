import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  DialogTitle,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import tabler from "./img/tabler.svg";
import { useNavigate } from "react-router-dom";

import SetNewPassword from "components/SetNewPassword/SetNewPassword";

const PasswordReset: React.FC = () => {
  const [open, setOpen] = useState(true); 
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const navigate = useNavigate(); 

  const handleClose = () => setOpen(false);

  const handleChange = (value: string, index: number) => {
    if (!isNaN(Number(value)) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus on the next input if the current value is valid
      if (value && index < code.length - 1) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        if (nextInput) (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleResend = () => {
    console.log("Resend code clicked");
    // Add resend logic here if needed
  };

  const handleConfirm = () => {
    const enteredCode = code.join("");
    console.log("Entered Code:", enteredCode);
    if (enteredCode.length === 6) {
      // Simulate successful password reset process
      setIsPasswordReset(true); // Show the next step (password reset successful)
    } else {
      alert("Please enter the complete code.");
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="password-reset-modal">
      {!isPasswordReset ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            backgroundColor: "#1E1E1E",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              gap: "80px",
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
              <ArrowBackIosIcon style={{ color: "#FFB400", marginBottom: "10px" }} />
            </button>
            <img src={tabler} alt="tabler icon" />
          </div>

          <DialogTitle style={{ fontFamily: "Manrope", fontSize: "32px", fontWeight: "600", textAlign: "center", paddingBottom: "16px", color: "#FFB400" }}>
            Password Reset
          </DialogTitle>
          <Typography variant="body2" textAlign="center" gutterBottom style={{ fontFamily: "Manrope", fontSize: "16px", fontWeight: "500", textAlign: "center", color: "#666D80", marginBottom: "20px" }}>
            We sent a code to <strong style={{ color: "white" }}>fajar@gmail.com</strong>
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1, my: 2 }}>
            {code.map((digit, index) => (
              <TextField
                key={index}
                id={`code-input-${index}`}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                inputProps={{ maxLength: 1, color:"white", style: { textAlign: "center",  } }}
                sx={{ width: 50 ,}}
               
              />
            ))}
          </Box>

          <Typography
            variant="body2"
            textAlign="center"
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={handleResend}
            style={{ fontFamily: "Manrope", fontSize: "16px", fontWeight: "500", textAlign: "center", color: "#666D80", marginBottom: "20px" }}
          >
            Didn’t receive the email? <strong style={{ color: "white" }}>Click to resend code</strong>
          </Typography>

          <Button
            variant="contained"
            fullWidth
          
            onClick={handleConfirm}
            sx={{
              mt: 3 ,
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "20px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              borderRadius: "5px",
              backgroundColor: "#1BA98F",
              ":hover": { backgroundColor: "#FFA000" },
              mb: 3,
              padding: "10px 20px",
            }}
          >
            Confirm
          </Button>
        </Box>
      ) : (
        // Show the ForgotPassword component if the password reset is completed
        <SetNewPassword />
      )}
    </Modal>
  );
};

export default PasswordReset;
