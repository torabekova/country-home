import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Modal,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditRoom = ({
  formData,
  refetch,
  open,
  handleClose,
  id,
}: {
  formData: any;
  refetch: any;
  open: any;
  handleClose: any;
  id: any;
}) => {
  const [formNewData, setFormData] = useState({
    bathroom: 0,
    description: "",
    bedroom: 0,
    hasWifi: false,
    hotelId: "",
    price: 0,
    propertyName: "",
  });

  const [isError, setIsError] = useState<boolean>(false);

  const submitData = async () => {
    try {
      await axios.post("/room", {
        ...formData,
        isError,
      });
      refetch();
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  const editRoom = () => {
    // setFormData({ ...formData });
    console.log(formData);
  };

  useEffect(() => {
    if (id) editRoom();
  }, [id, open]);

  return (
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
          Yangi xona qo'shish
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Xona nomi"
              name="PropertyName"
              value={formNewData.propertyName}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Narx"
              name="price "
              value={formNewData.price}
              onChange={(e) =>
                // setFormData((data) => ({
                //   ...data,
                //   price: +e.target.value,
                // }))
                {}
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <label>Yotaxona</label>
              <Select
                name="bedroom"
                value={formNewData.bedroom}
                onChange={(e) =>
                  // setFormData((data) => ({
                  //   ...data,
                  //   bedroom: +e.target.value,
                  // }))
                  {}
                }
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
              <label>Hammom</label>
              <Select
                name="bathroom"
                value={formNewData.bathroom}
                onChange={(e) =>
                  // setFormData((data) => ({
                  //   ...data,
                  //   bathroom: +e.target.value,
                  // }))
                  {}
                }
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
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.hasWifi}
                    onChange={(e) =>
                      // setFormData((data) => ({
                      //   ...data,
                      //   hasWifi: e.target.checked,
                      // }))
                      {}
                    }
                  />
                }
                label={formData.hasWifi ? "WiFi bor" : "WiFi yo'q"}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tavsif"
              multiline
              rows={4}
              value={formNewData.description}
              onChange={(e) =>
                // setFormData((data) => ({
                //   ...data,
                //   description: e.target.value,
                // }))
                {}
              }
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button variant="outlined" color="error" onClick={handleClose}>
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
  );
};

export default EditRoom;
