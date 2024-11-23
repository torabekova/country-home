import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  Button,
  Tabs,
  Tab,
  InputAdornment,
  TextField,
  Grid,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const FilterComponent: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [priceRange, setPriceRange] = useState<number[]>([120, 900]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    console.log("Slider Value Changed:", newValue);
    setPriceRange(newValue as number[]);
  };

  const handleInputChange = (index: number, newValue: string) => {
    console.log(`TextField ${index === 0 ? "Min" : "Max"} Value Changed:`, newValue);
    const updatedRange = [...priceRange];
    updatedRange[index] = Number(newValue);
    setPriceRange(updatedRange);
  };

  const handleReset = () => {
    console.log("Reset Button Clicked");
    setPriceRange([120, 900]);
  };

  const handleFindProperties = () => {
    console.log("Find Properties Button Clicked");
    console.log("Selected Price Range:", priceRange);
  };

  const valuetext = (value: number) => `$${value}`;

  return (
    <Box
      sx={{
        width: "400px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleTabChange} aria-label="filter tabs">
          <Tab label="Price" />
          <Tab label="Beds" />
          <Tab label="Type" />
          <Tab label="Facility" />
          <Tab label="Book Option" />
        </Tabs>
      </Box>

      {/* Tab Panel - Price */}
      <TabPanel value={value} index={0}>
        <Typography variant="h6" gutterBottom>
          Price Range
        </Typography>
        <Box sx={{ padding: "16px" }}>
          <Slider
            value={priceRange}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={1000}
          />
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item>
              <TextField
                size="small"
                label="Min"
                variant="outlined"
                value={priceRange[0]}
                onChange={(e) => handleInputChange(0, e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                size="small"
                label="Max"
                variant="outlined"
                value={priceRange[1]}
                onChange={(e) => handleInputChange(1, e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </TabPanel>

      {/* Reset and Find Properties */}
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "16px" }}>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" color="primary" onClick={handleFindProperties}>
          Find Properties
        </Button>
      </Box>
    </Box>
  );
};

export default FilterComponent;
