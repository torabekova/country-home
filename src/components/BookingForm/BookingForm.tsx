import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PDFCheck from "./PDFCheck";


interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  paymentMethod: string;
  specialRequests?: string;
  termsAccepted: boolean;
}

interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  checkInDate?: string;
  checkOutDate?: string;
  guests?: string;
  termsAccepted?: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
    paymentMethod: "creditCard",
    specialRequests: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const validateForm = (data: BookingFormData): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!data.fullName.trim()) {
      errors.fullName = "Ism va familiya majburiy.";
    }

    if (!data.email.trim() || !/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
      errors.email = "Yaroqli email kiriting.";
    }

    if (!data.phone.trim() || !/^\+?[0-9]{10,15}$/.test(data.phone)) {
      errors.phone = "Yaroqli telefon raqamini kiriting.";
    }

    if (!data.checkInDate) {
      errors.checkInDate = "Kelish sanasi majburiy.";
    }

    if (!data.checkOutDate) {
      errors.checkOutDate = "Ketish sanasi majburiy.";
    } else if (new Date(data.checkInDate) >= new Date(data.checkOutDate)) {
      errors.checkOutDate = "Ketish sanasi kelish sanasidan keyin bo‘lishi kerak.";
    }

    if (data.guests < 1) {
      errors.guests = "Mehmonlar soni kamida 1 bo‘lishi kerak.";
    }

    if (!data.termsAccepted) {
      errors.termsAccepted = "Shartlarga rozilik bildirish majburiy.";
    }

    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setFormSubmitted(true);
      setModalOpen(false); 
    }
  };

  return (
    <>
      <Button variant="contained" onClick={() => setModalOpen(true)} style={{ backgroundColor: "#1BA98F" }}>
        Bronlashni boshlash
      </Button>

      <Dialog open={isModalOpen} onClose={() => setModalOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Mehmonxona bronlash</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Ism va Familiya"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
            <TextField
              label="Telefon"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
            />
            <TextField
              label="Kelish sanasi"
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              error={!!errors.checkInDate}
              helperText={errors.checkInDate}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              label="Ketish sanasi"
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              error={!!errors.checkOutDate}
              helperText={errors.checkOutDate}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              label="Mehmonlar soni"
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              error={!!errors.guests}
              helperText={errors.guests}
              InputProps={{ inputProps: { min: 1 } }}
              fullWidth
            />
            <TextField
              label="To‘lov usuli"
              name="paymentMethod"
              select
              value={formData.paymentMethod}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="creditCard">Kredit karta</MenuItem>
              <MenuItem value="cash">Naqd</MenuItem>
              <MenuItem value="later">Keyinroq to‘lash</MenuItem>
            </TextField>
            <TextField
              label="Maxsus talablar"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
            />
            <FormControlLabel
              control={<Checkbox name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />}
              label="Shartlarga roziman"
            />
            {errors.termsAccepted && (
              <Typography color="error" variant="body2">
                {errors.termsAccepted}
              </Typography>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)}>Bekor qilish</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary" style={{backgroundColor:'#1BA98F'}}>
            Tasdiqlash
          </Button>
        </DialogActions>
      </Dialog>

      {isFormSubmitted && <PDFCheck formData={formData} />}
    </>
  );
};

export default BookingForm;


