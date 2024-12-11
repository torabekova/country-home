import React, { useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

const GaugeChart: React.FC = () => {
  const [lowValue, setLowValue] = useState(30); 
  const [highValue, setHighValue] = useState(70); // Boshlang'ich High qiymati

  // Low funksiyasi: chap tomonga foizni oshiradi
  const handleLowClick = () => {
    setLowValue((prev) => Math.max(prev - 10, 0)); // Low chap tomonga kengayadi, minimum 0
    setHighValue((prev) => Math.max(prev - 10, 0)); // High o'ng tomonga o'zgaradi
  };

  // High funksiyasi: o'ng tomonga foizni oshiradi
  const handleHighClick = () => {
    setHighValue((prev) => Math.min(prev + 10, 100)); // High o'ng tomonga kengayadi, maksimum 100
    setLowValue((prev) => Math.min(prev + 10, 100)); // Low chap tomonga o'zgaradi
  };

  const lowAngle = (lowValue / 100) * 180; // Low progressni gradusga aylantirish
  const highAngle = (highValue / 100) * 180; // High progressni gradusga aylantirish

  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#F8F9FB",
        padding: 3,
        borderRadius: "16px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Gauge Chart */}
      <Box
        sx={{
          width: 200,
          height: 100,
          position: "relative",
          borderRadius: "150px 150px 0 0",
          overflow: "hidden",
          background: `conic-gradient(
            #FFC107 0deg ${lowAngle}deg,   /* Low qismini sariq rang */
            #1BA98F ${lowAngle}deg ${highAngle}deg, /* O'rtadagi progress yashil rang */
            #F0F0F0 ${highAngle}deg /* Qolgan joy kulrang */
          )`,
        }}
      >
        {/* Inner Circle */}
        <Box
          sx={{
            position: "absolute",
            width: "90%",
            height: "90%",
            backgroundColor: "white",
            borderRadius: "50%",
            top: "10%",
            left: "5%",
          }}
        />
        {/* Center Value */}
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            {Math.round((lowValue + highValue) / 2)}%
          </Typography>
        </Box>
      </Box>

      {/* Sales Info */}
      <Box>
        <Typography variant="h6" fontWeight="bold">
          Sales Indicator
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          $12,450
        </Typography>
        {/* Buttons */}
        <Stack direction="row" spacing={2} mt={2}>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleLowClick}
            sx={{
              borderRadius: "20px",
              padding: "5px 20px",
              fontSize: "12px",
            }}
          >
            Low
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleHighClick}
            sx={{
              borderRadius: "20px",
              padding: "5px 20px",
              fontSize: "12px",
              backgroundColor:"#1BA98F"
            }}
          >
            High
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default GaugeChart;
