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
          Yangi xona qo'shish
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Xona nomi"
              name="PropertyName"
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
              label="Narx"
              name="price "
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
              <label>Yotaxona</label>
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
              <label>Hammom</label>
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
                label={formData.hasWifi ? "WiFi bor" : "WiFi yo'q"}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tavsif"
              multiline
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData((data) => ({
                  ...data,
                  description: e.target.value,
                }))
              }
              variant="outlined"
              fullWidth
            />
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
  );
};

export default RoomFormModal;
