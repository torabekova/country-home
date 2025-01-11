import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";

export type RoomFormData = {
  hotelId: string | undefined;
  price: number;
  bedroom: number;
  bathroom: number;
  propertyName: string;
  description: string;
  hasWifi: boolean;
};

type Props = {
  open: boolean;
  handleClose: () => void;
  handleCancel: () => void;
  setFormData: Dispatch<SetStateAction<RoomFormData>>;
  formData: RoomFormData;
  submitData: () => void;
  type: "create" | "update";
};

const RoomFormModal: FC<Props> = ({
  open,
  handleClose,
  handleCancel,
  formData,
  setFormData,
  submitData,
}) => {
  const [f, f3] = useState();
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
          Add New Rooms
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Property Name"
              name="propertyName"
              value={formData.propertyName}
              onChange={(e) =>
                setFormData((data) => ({
                  ...data,
                  propertyName: e.target.value,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Price"
              name="Price"
              value={formData.price}
              onChange={(e) =>
                setFormData((data) => ({
                  ...data,
                  price: +e.target.value,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Bedroom</InputLabel>
              <Select
                name="bedroom"
                value={formData.bedroom}
                onChange={(e) =>
                  setFormData((data) => ({
                    ...data,
                    bedroom: +e.target.value,
                  }))
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
              <InputLabel>Bathroom</InputLabel>
              <Select
                name="bathroom"
                value={formData.bathroom}
                onChange={(e) =>
                  setFormData((data) => ({
                    ...data,
                    bathroom: +e.target.value,
                  }))
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
              <InputLabel>Wifi</InputLabel>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.hasWifi}
                    onChange={(e) =>
                      setFormData((data) => ({
                        ...data,
                        hasWifi: e.target.checked,
                      }))
                    }
                  />
                }
                label={formData.hasWifi ? "WiFi bor" : "WiFi jo'q"}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              multiline // Makes the TextField a textarea
              rows={4} // Specifies the number of visible text lines
              value={formData.description} // The value of the textarea
              onChange={(e) =>
                setFormData((data) => ({
                  ...data,
                  description: e.target.value,
                }))
              } // Updates the value as the user types
              variant="outlined" // Style variant (outlined, filled, or standard)
              fullWidth // Makes the TextField take up the full width of its container
            />
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
  );
};

export default RoomFormModal;
