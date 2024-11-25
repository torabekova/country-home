import React, { useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Grid,
  Paper,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";


const financialData: Record<"Monthly" | "Quarterly" | "Yearly", number[]> = {
  Monthly: [100, 200, 300, 400, 500, 900],
  Quarterly: [1000, 2000, 3000, 4000],
  Yearly: [12000, 15000],
};

const labels: Record<"Monthly" | "Quarterly" | "Yearly", string[]> = {
  Monthly: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  Quarterly: ["Q1", "Q2", "Q3", "Q4"],
  Yearly: ["2022", "2023"],
};

const FinancialStatistics: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState<"Monthly" | "Quarterly" | "Yearly">("Monthly");
  const [data, setData] = useState<number[]>(financialData.Monthly);

  const handleTimeFilterChange = (event: SelectChangeEvent<string>) => {
    const selectedFilter = event.target.value as "Monthly" | "Quarterly" | "Yearly";
    setTimeFilter(selectedFilter);
    setData(financialData[selectedFilter]);
  };


  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

  return (
    <Paper
      elevation={3}
      sx={{
        width: 400,
        p: 3,
        borderRadius: 2,
      }}
    >
    
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Financial Statistics</Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={timeFilter}
            onChange={handleTimeFilterChange}
            displayEmpty
          >
            <MenuItem value="Monthly">Monthly</MenuItem>
            <MenuItem value="Quarterly">Quarterly</MenuItem>
            <MenuItem value="Yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </Box>

     
      <Grid
        container
        spacing={2}
        alignItems="flex-end"
        justifyContent="center"
        sx={{ mt: 3 }}
      >
        {data.map((value, index) => (
          <Grid
            item
            key={index}
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            
            <Typography
              variant="caption"
              sx={{ mb: 1, fontSize: "12px", color: "#333" }}
            >
              {formatCurrency(value)}
            </Typography>

          
            <Box
              sx={{
                height: `${(value / Math.max(...data)) * 150}px`,
                width: "24px",
                backgroundColor: "#4caf50",
                borderRadius: 2,
                position: "relative",
                "&:hover": {
                  backgroundColor: "#388e3c",
                },
              }}
              aria-label={`Bar for ${labels[timeFilter][index]}: ${formatCurrency(value)}`}
            />

            
            <Typography
              variant="body2"
              sx={{ mt: 1, color: "#757575", fontSize: "12px" }}
            >
              {labels[timeFilter][index]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default FinancialStatistics;
