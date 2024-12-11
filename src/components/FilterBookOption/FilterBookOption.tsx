import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Switch,
  FormControlLabel,
  Typography,
  IconButton,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

const BookOption: React.FC = () => {
  const initialState = {
    instantBooking: false,
    selfCheckIn: false,
  };

  const [bookOptions, setBookOptions] = useState(initialState);
  const [isModalOpen, setIsModalOpen] = useState(true); // Modalni ochish uchun holat

  const handleCloseModal = () => {
    setIsModalOpen(false); // Modalni yopish
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    option: "instantBooking" | "selfCheckIn"
  ) => {
    const { checked } = event.target;
    setBookOptions({ ...bookOptions, [option]: checked });
  };

  const handleFindProperties = () => {
    console.log("Selected Book Options:", bookOptions);
  };

  const handleReset = () => {
    setBookOptions(initialState);
  };

  return (
    <Box
      sx={{
        width: "400px",
        borderRadius: 4,
        boxShadow: 3,
        padding: 2,
        backgroundColor: "#fff",
        margin: "auto",
        marginTop: 5,
        textAlign: "center",
      }}
    >
      {/* Title with Close Icon */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Filter
        </Typography>
        <IconButton onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Book Options */}
      <Typography variant="subtitle1" sx={{ margin: "20px 0", fontWeight: 500 }}>
        Book Options
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {/* Instant Booking */}
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Switch
                checked={bookOptions.instantBooking}
                onChange={(e) => handleChange(e, "instantBooking")}
                name="instantBooking"
                color="primary"
              />
            }
            label="Instant Booking"
            labelPlacement="end"
            sx={{ marginBottom: "10px" }}
          />
        </Grid>

        {/* Self Check-in */}
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Switch
                checked={bookOptions.selfCheckIn}
                onChange={(e) => handleChange(e, "selfCheckIn")}
                name="selfCheckIn"
                color="primary"
              />
            }
            label="Self Check-in"
            labelPlacement="end"
            sx={{ marginBottom: "10px" }}
          />
        </Grid>
      </Grid>

      {/* Buttons */}
      <Box sx={{ marginTop: 3, display: "flex", justifyContent: "space-around" }}>
        <Button
          variant="outlined"
          onClick={handleReset}
          sx={{
            borderColor: "#1BA98F",
            color: "#1BA98F",
            width: "40%",
            "&:hover": {
              backgroundColor: "#1BA98F",
              color: "#fff",
              transform: "scale(1.05)", // Hover effect for Reset button
            },
            transition: "all 0.3s ease-in-out",
          }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          onClick={handleFindProperties}
          sx={{
            backgroundColor: "#1BA98F",
            color: "#fff",
            width: "40%",
            "&:hover": {
              backgroundColor: "#16A575", // Darker shade of green
              transform: "scale(1.05)", // Hover effect for Find Properties button
            },
            transition: "all 0.3s ease-in-out",
          }}
        >
          Find Properties
        </Button>
      </Box>
    </Box>
  );
};

export default BookOption;
