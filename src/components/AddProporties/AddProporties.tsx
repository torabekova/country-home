import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import axios from "axios";



const AddPropertiesModal = () => {
  const [open, setOpen] = useState(false);
  const [propertyData, setPropertyData] = useState({
    propertyName: "",
    carpetArea: "",
    bedroom: "",
    bathroom: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    propertiesFor: "",
    picture: "",
  });

  const [originalData] = useState(propertyData); 


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  

  
  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    if (name) {
      setPropertyData({ ...propertyData, [name]: value });
    }
  };

  
  const handlePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newPicture = URL.createObjectURL(e.target.files[0]);
      setPropertyData({ ...propertyData, picture: newPicture });
    }
  };


  const handlePropertiesForChange = (
    e: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    if (newValue) {
      setPropertyData({ ...propertyData, propertiesFor: newValue });
    }
  };

  
  const handleCancel = () => {
    setPropertyData(originalData);
    handleClose();
  };

  
  const handleAddProperties = () => {
    console.log("New Property Data:", propertyData);
    // alert("Property added successfully!");
    handleClose();
  };
  // const navigate = useNavigate();
    // const [name, setName] = useState<string>("");
    // const [bedroom, setBedroom] = useState<number>(0);
    // const [address, setAddress] = useState<string>("");
    // const [carpetArea, setCarpetArea] = useState<string> ("");
    // const [bathroom, setbathroom] = useState <number> (0);
    // const [city , setCity] = useState<string> ("");
    // const [image, setImage] = useState<string[]>([]);
    // const [postalCode, setPostalCode] = useState <string>("")
    // const [isError, setIsError] = useState<boolean>(false);

    // const submitData = async () => {
    //   try {
    //     const payload = { ...propertyData };
  
    //     const response = await axios.post('https://api.example.com/endpoint', payload);
  
    //     console.log('Response:', response.data);
    //     setIsError(false);
    //   } catch (error) {
    //     console.error('Error:', error);
    //     setIsError(true); 
    //   }
    // };

    

    const submitData = async () => {
      try {
        
        const payload = { ...propertyData };
    
        
        const response = await axios.post("/admin/props", payload);
    
        
        console.log("Response:", response.data);
    
        
        // alert("Property added successfully!");
    
      
        setPropertyData({
          propertyName: "",
          carpetArea: "",
          bedroom: "",
          bathroom: "",
          address: "",
          city: "",
          country: "",
          postalCode: "",
          propertiesFor: "",
          picture: "",
        });
        handleClose();
      } catch (error) {
        // console.error("Error adding property:", error);
    
      
        // alert("Error adding property. Please try again.");
      }
    };
    

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{ backgroundColor: "#1BA98F", borderRadius:"100px" }}
      >
        Add New Properties
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 600,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            mx: "auto",
            my: 20,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2  }}>
            Add New Properties
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField
        fullWidth
        label="Property Name"
        name="propertyName"
        value={propertyData.propertyName}
        onChange={handleInputChange}
      />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Carpet Area"
                name="carpetArea"
                value={propertyData.carpetArea}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Bedroom</InputLabel>
                <Select
                  name="bedroom"
                  value={propertyData.bedroom}
                  onChange={handleSelectChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Bathroom</InputLabel>
                <Select
                  name="bathroom"
                  value={propertyData.bathroom}
                  onChange={handleSelectChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Address"
                name="address"
                value={propertyData.address}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={propertyData.city}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                value={propertyData.country}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Postal Code"
                name="postalCode"
                value={propertyData.postalCode}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <ToggleButtonGroup
                value={propertyData.propertiesFor}
                exclusive
                onChange={handlePropertiesForChange}
                fullWidth
              >
                <ToggleButton value="Rent">Rent</ToggleButton>
                <ToggleButton value="Sell">Sell</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{ py: 2, backgroundColor: "#1BA98F" }}
              >
                Upload Foto
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handlePictureUpload}
                />
              </Button>
              {propertyData.picture && (
                <Box
                  sx={{
                    mt: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Uploaded Image:
                  </Typography>
                  <img
                    src={propertyData.picture}
                    alt="Uploaded Preview"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "200px",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button variant="outlined" color="error" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProperties}
              style={{ backgroundColor: "#1BA98F" }}
              onChange={submitData}
            >
              Add Properties
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddPropertiesModal;
