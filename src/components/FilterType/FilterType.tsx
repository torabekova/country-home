import React, { useState } from "react";
import "./FilterType.css";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
import CloseIcon from "@mui/icons-material/Close";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
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

const FilterType: React.FC = () => {
  const [value, setValue] = useState<number>(2);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newTypes: string[]
  ) => {
    setSelectedTypes(newTypes);
    console.log("Selected Property Types:", newTypes);
  };

  const handleReset = () => {
    console.log("Resetting Filters");
    setSelectedTypes([]);
  };

  const handleFindProperties = () => {
    console.log("Find Properties Clicked");
    console.log("Final Selected Property Types:", selectedTypes);
  };

  return (
    <Box
      sx={{
        width: "600px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
   
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 16px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography variant="h6">Filter</Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>

     
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleTabChange} aria-label="filter tabs">
          <Tab label="Price"  />
          <Tab label="Beds" />
          <Tab label="Type" />
          <Tab label="Facility" />
          <Tab label="Book Option" />
        </Tabs>
      </Box>

     
      <TabPanel value={value} index={2}>
        <Typography variant="subtitle1" gutterBottom>
          Type
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ToggleButtonGroup
              value={selectedTypes}
              onChange={handleTypeChange}
              aria-label="property type"
              sx={{ width: "100%" }}
            >
              <ToggleButton
                value="House"
                aria-label="house"
                sx={{ width: "100%", borderColor: "#1BA98F" }}
              >
                <HomeIcon sx={{ marginRight: "8px", color: "#1BA98F" }} />
                House
              </ToggleButton>
              <ToggleButton
                value="Apartment"
                aria-label="apartment"
                sx={{ width: "100%", borderColor: "#1BA98F" }}
              >
                <ApartmentIcon sx={{ marginRight: "8px", color: "#1BA98F" }} />
                Apartment
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={6}>
            <ToggleButtonGroup
              value={selectedTypes}
              onChange={handleTypeChange}
              aria-label="property type"
              sx={{ width: "100%" }}
            >
              <ToggleButton
                value="Guesthouse"
                aria-label="guesthouse"
                sx={{ width: "100%", borderColor: "#1BA98F" }}
              >
                <HouseIcon sx={{ marginRight: "8px", color: "#1BA98F" }} />
                Guesthouse
              </ToggleButton>
              <ToggleButton
                value="Hotel"
                aria-label="hotel"
                sx={{ width: "100%", borderColor: "#1BA98F" }}
              >
                <HotelIcon sx={{ marginRight: "8px", color: "#1BA98F" }} />
                Hotel
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </TabPanel>

     
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <Button
  variant="outlined"
  onClick={handleReset}
  sx={{
    borderRadius: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "93px",
    paddingRight: "93px",
    borderColor:"#178F78",
    color:"#178F78",
    '&:hover': {
      backgroundColor: "#178F78", 
      color: "white", 
    },
  }}
>
  Reset
</Button>
<Button
  variant="outlined"
  onClick={handleReset}
  sx={{
    borderRadius: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "53px",
    paddingRight: "53px",
    borderColor:"#178F78",
    color:"#178F78",
   
    '&:hover': {
      backgroundColor: "#178F78", 
      color: "white", 
    },
  }}
>
Find Properties
</Button>
      </Box>
    </Box>
  );
};

export default FilterType;
