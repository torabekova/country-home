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
import { Schema, model, Document } from "mongoose";

const AddNewRooms = ({ refetch }: { refetch: any }) => {
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

    handleClose();
  };

  const [propertyName, setPropertyName] = useState<string>("");
  const [bedRoom, setBedRoom] = useState<number>();
  const [bathroom, setbathroom] = useState<number>();
  const [img, setImg] = useState<string[]>([]);
  const [hotel, setHotel] = useState<string>("");
  const [isRented, setIsRented] = useState<boolean>(false);
  const [price, setPrice] = useState<string>("");

  const [isError, setIsError] = useState<boolean>(false);

  const submitData = async () => {
    try {
      const response = await axios.post("/room", {
        hotel: "125678qwertyuiopoA",
        propertyName,
        bedRoom,
        isRented,
        bathroom,
        img,
        price,
      });
      console.log(response.data);
      refetch();
      handleClose();
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{ backgroundColor: "#1BA98F", borderRadius: "100px" }}
      >
        Add New Hotels
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
            my: 7,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Add New Rooms
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Property Name"
                name="propertyName"
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Price"
                name="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Button onClick={(e) => setIsRented(true)} variant="contained">
                Order
              </Button>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Bedroom</InputLabel>
                <Select
                  name="bedroom"
                  value={bedRoom}
                  onChange={(e) => setBedRoom(Number(e.target.value))}
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
                  value={bathroom}
                  onChange={(e) => setbathroom(Number(e.target.value))}
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
              style={{ backgroundColor: "#1BA98F" }}
              onClick={submitData}
            >
              Add Properties
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddNewRooms;
