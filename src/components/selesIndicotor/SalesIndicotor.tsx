import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Tooltip,
} from "@mui/material";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SalesIndicator = () => {
  const progress = 76; 
  const sales = 12450; 

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 3,
        borderRadius: 2,
        width: 400,
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={6}>
          <Tooltip title={`${progress}% of target sales`} arrow>
            <Box
              sx={{
                width: 150,
                height: 150,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgressbarWithChildren
                value={progress}
                strokeWidth={10}
                styles={buildStyles({
                  strokeLinecap: "round",
                  trailColor: "#e0e0e0",
                  pathColor: progress > 50 ? "#4caf50" : "#2196f3",
                  rotation: 0.75, 
                })}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {progress}%
                </Typography>
              </CircularProgressbarWithChildren>
            </Box>
          </Tooltip>
        </Grid>

       
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Sales Indicator
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 1, color: "#000" }}
          >
            ${sales.toLocaleString()}
          </Typography>

          
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ mt: 2, fontSize: "0.875rem", color: "gray" }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "#4caf50",
                borderRadius: "50%",
              }}
            />
            Low
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "#2196f3",
                borderRadius: "50%",
                ml: 2,
              }}
            />
            High
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SalesIndicator;
