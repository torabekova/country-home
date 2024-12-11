import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  Button,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilterBeds from "components/FilterBeds/Filterbeds";
import FilterType from "components/FilterType/FilterType";
import FilterFacility from "components/FilterFacility/FilterFacility";
import BookOption from "components/FilterBookOption/FilterBookOption";


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

const FilterComponent = () => {
  const [value, setValue] = useState<number>(0);
  const [priceRange, setPriceRange] = useState<number[]>([120, 900]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleReset = () => {
    setPriceRange([120, 900]);
  };

  const handleFindProperties = () => {
    console.log("Selected Price Range:", priceRange);
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      {/* Trigger Button */}
      <Button
        variant="contained"
        onClick={() => setIsModalOpen(true)}
        sx={{ borderRadius: "20px", backgroundColor: "#178F78", color: "white" }}
      >
        Open Filter
      </Button>

      {/* Modal (Dialog) */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          Filter Properties
          <IconButton
            onClick={() => setIsModalOpen(false)}
            sx={{ color: "grey.500" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleTabChange}>
              <Tab label="Price" />
              <Tab label="Beds" />
              <Tab label="Type" />
              <Tab label="Facility" />
              <Tab label="Book Option" />
            </Tabs>
          </Box>

          {/* Price Tab */}
          <TabPanel value={value} index={0}>
            <Typography variant="h6" gutterBottom>
              Price Range
            </Typography>
            <Box sx={{ padding: "16px" }}>
              <Slider
                value={priceRange}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
              />
            </Box>
          </TabPanel>

          {/* Beds Tab - Render FilterBeds Component */}
          <TabPanel value={value} index={1}>
            <FilterBeds />
          
          </TabPanel>
          <TabPanel value={value} index={2}>
          
            <FilterType/>
          </TabPanel>

          <TabPanel value={value} index={3}>
          
          <FilterFacility/>
        </TabPanel>
          <TabPanel value={value} index={4}>
          
          <BookOption/>
        </TabPanel>
        </DialogContent>
        
        

        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleReset}
            sx={{
              borderRadius: "20px",
              color: "#178F78",
              borderColor: "#178F78",
              "&:hover": {
                backgroundColor: "#178F78",
                color: "white",
              },
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={handleFindProperties}
            sx={{
              borderRadius: "20px",
              backgroundColor: "#178F78",
              color: "white",
            }}
          >
            Find Properties
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FilterComponent;
