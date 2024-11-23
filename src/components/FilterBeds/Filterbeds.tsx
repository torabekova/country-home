import React, { useState } from "react";
import {
  Box,
  Button,
  Tabs,
  Tab,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

const FilterBeds: React.FC = () => {
  const [value, setValue] = useState<number>(1); // Selected tab index
  const [bedRooms, setBedRooms] = useState<string | null>("Any");
  const [bathRooms, setBathRooms] = useState<string | null>("Any");

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleBedRoomChange = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    setBedRooms(newValue);
    console.log("Selected Bedrooms:", newValue);
  };

  const handleBathRoomChange = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    setBathRooms(newValue);
    console.log("Selected Bathrooms:", newValue);
  };

  const handleReset = () => {
    console.log("Resetting Filters");
    setBedRooms("Any");
    setBathRooms("Any");
  };

  const handleFindProperties = () => {
    console.log("Find Properties Clicked");
    console.log("Final Selected Filters:");
    console.log("Bedrooms:", bedRooms);
    console.log("Bathrooms:", bathRooms);
  };

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
      {/* Header */}
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
        <CloseIcon />
      </Box>

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

      {/* Beds Tab Content */}
      <TabPanel value={value} index={1}>
        <Typography variant="subtitle1" gutterBottom>
          Beds Room
        </Typography>
        <ToggleButtonGroup
          value={bedRooms}
          exclusive
          onChange={handleBedRoomChange}
          aria-label="bedroom selection"
          sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
        >
          <ToggleButton value="Any" aria-label="any">
            Any
          </ToggleButton>
          <ToggleButton value="1" aria-label="1 bed">
            1
          </ToggleButton>
          <ToggleButton value="2" aria-label="2 beds">
            2
          </ToggleButton>
          <ToggleButton value="3" aria-label="3 beds">
            3
          </ToggleButton>
          <ToggleButton value="4" aria-label="4 beds">
            4
          </ToggleButton>
          <ToggleButton value="5+" aria-label="5+ beds">
            5+
          </ToggleButton>
        </ToggleButtonGroup>

        <Typography variant="subtitle1" gutterBottom>
          Bath Room
        </Typography>
        <ToggleButtonGroup
          value={bathRooms}
          exclusive
          onChange={handleBathRoomChange}
          aria-label="bathroom selection"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <ToggleButton value="Any" aria-label="any">
            Any
          </ToggleButton>
          <ToggleButton value="1" aria-label="1 bath">
            1
          </ToggleButton>
          <ToggleButton value="2" aria-label="2 baths">
            2
          </ToggleButton>
          <ToggleButton value="3" aria-label="3 baths">
            3
          </ToggleButton>
          <ToggleButton value="4" aria-label="4 baths">
            4
          </ToggleButton>
          <ToggleButton value="5+" aria-label="5+ baths">
            5+
          </ToggleButton>
        </ToggleButtonGroup>
      </TabPanel>

      {/* Footer Buttons */}
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

export default FilterBeds;
