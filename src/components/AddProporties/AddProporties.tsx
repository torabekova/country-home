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

const AddPropertiesModal = ({ refetch }: { refetch: any }) => {
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

  const [name, setName] = useState<string>("Salom");
  const [bedroom, setBedroom] = useState<number>(2);
  const [address, setAddress] = useState<string>("dsfsd");
  const [carpetArea, setCarpetArea] = useState<string>("sdfsdfds");
  const [bathroom, setbathroom] = useState<number>(4);
  const [city, setCity] = useState<string>("Tashkent");
  const [country, setCountry] = useState<string>("Uzb");
  const [postalCode, setPostalCode] = useState<string>("fsdfdsf");

  const [isError, setIsError] = useState<boolean>(false);

  const submitData = async () => {
    try {
      const response = await axios.post("/hotel/create", {
        name,
        bedroom,
        address,
        carpetArea,
        bathroom,
        city,
        postalCode,
        owner: localStorage.getItem("user_id"),
        hasWifi: true,
        price: 2000,
        location: [12345678, 23423432423],
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
        Yangi mehmonxona qo'shish
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
            Yangi Mehmonxona qo'shish
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Xona nomi"
                name="PropertyName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Carpet Area"
                name="carpetArea"
                value={carpetArea}
                onChange={(e) => setCarpetArea(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <label>Yotaqxona</label>
                <Select
                  name="bedroom"
                  value={bedroom}
                  onChange={(e) => setBedroom(Number(e.target.value))}
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
                <label>Hommom</label>
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Manzil"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Shahar"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Mamlakat"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Postal Code"
                name="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
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
                Rasm joylash
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
                    Tanlagan rasmingiz
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
              Bekor qilish
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#1BA98F" }}
              onClick={submitData}
            >
              Qo'shish
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddPropertiesModal;
