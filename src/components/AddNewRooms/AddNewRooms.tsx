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
  Checkbox,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { Schema, model, Document } from "mongoose";
import { useParams } from "react-router-dom";
import RoomFormModal, { RoomFormData } from "components/RoomFormModal";

const AddNewRooms = ({ refetch }: { refetch: any }) => {
  const { id } = useParams();

  const [formData, setFormData] = useState<RoomFormData>({
    hotelId: id,
    bathroom: 0,
    bedroom: 0,
    description: "",
    hasWifi: false,
    price: 0,
    propertyName: "",
  });

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

  const handleCancel = () => {
    setPropertyData(originalData);
    handleClose();
  };

  const [isError, setIsError] = useState<boolean>(false);

  const submitData = async () => {
    try {
      await axios.post("/room", {
        hotel: id,
        ...formData,
        isError,
      });
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
      <RoomFormModal
        type="create"
        {...{
          submitData,
          formData,
          handleCancel,
          handleClose,
          open,
          setFormData,
        }}
      />
      {/* <Modal open={open} onClose={handleClose}>
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
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Price"
                name="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
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
              <TextField
                fullWidth
                label="Number"
                name="propertyName"
                value={getGuestsNumber}
                onChange={(e) => setGuestsNumber(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Wifi</InputLabel>
                <FormControlLabel
                  control={
                    <Switch checked={isHasWifi} onChange={handleSwitchChange} />
                  }
                  label={isHasWifi ? "WiFi bor" : "WiFi jo'q"}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                multiline // Makes the TextField a textarea
                rows={4} // Specifies the number of visible text lines
                value={description} // The value of the textarea
                onChange={(e) => setDescription(e.target.value)} // Updates the value as the user types
                variant="outlined" // Style variant (outlined, filled, or standard)
                fullWidth // Makes the TextField take up the full width of its container
              />
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
      </Modal> */}
    </div>
  );
};

export default AddNewRooms;
