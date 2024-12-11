import React, { useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, Grid, Typography, IconButton } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ShowerIcon from "@mui/icons-material/Shower";
import CloseIcon from "@mui/icons-material/Close";

const FilterFacility: React.FC = () => {
  const initialState = {
    WiFi: false,
    Washer: false,
    Kitchen: false,
    AirConditioner: false,
    WaterHeater: false,
  };

  const [facilities, setFacilities] = useState(initialState);
  const [isModalOpen, setIsModalOpen] = useState(true); // Modalni ochish uchun holat

  // Modalni yopish funksiyasi
  const handleCloseModal = () => {
    setIsModalOpen(false); // Modalni yopish
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFacilities({ ...facilities, [name]: checked });
  };

  const handleFindProperties = () => {
    console.log("Selected Facilities:", facilities);
  };

  const handleReset = () => {
    setFacilities(initialState);
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
        {/* Close button */}
        <IconButton onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Facilities */}
      <Typography variant="subtitle1" sx={{ margin: "20px 0", fontWeight: 500 }}>
        Facility
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {Object.keys(initialState).map((facility) => (
          <Grid item xs={5} key={facility}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={facilities[facility as keyof typeof facilities]}
                  onChange={handleChange}
                  name={facility}
                  icon={
                    facility === "WiFi" ? (
                      <WifiIcon />
                    ) : facility === "Washer" ? (
                      <LocalLaundryServiceIcon />
                    ) : facility === "Kitchen" ? (
                      <KitchenIcon />
                    ) : facility === "AirConditioner" ? (
                      <AcUnitIcon />
                    ) : (
                      <ShowerIcon />
                    )
                  }
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f1f1f1", // Hover effect for checkbox
                      borderRadius: "4px",
                    },
                    "&.Mui-checked": {
                      color: "#1BA98F", // Checked color effect
                    },
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              }
              label={facility}
            />
          </Grid>
        ))}
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
            height:"10%",
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

export default FilterFacility;
