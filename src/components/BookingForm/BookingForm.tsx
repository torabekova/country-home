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
import axios from "axios";
import { useParams } from "react-router-dom";

interface BookingFormData {
  _id: any;
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
  startingDate?: string;
  endingDate?: string;
}

const BookingForm: React.FC = () => {

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const { id } = useParams();

  const [fullName, setFullName] = useState<string>("shoxruh");
  const [email, setEmail] = useState<string>("shoxruh@gmail.com");
  const [phone, setPhone] = useState<string>("7349857489375");
  const [startingDate, setStartingDate] = useState<any>();
  const [endingDate, setEndingDate] = useState<any>();
  const [numberOfGuests, setNumberOfGuests] = useState<number>(2);
  const [paymentType, setPaymentType] = useState("card");
  const [roomId, setRoomId] = useState("677e88d26f6e72d2475f01ac");
  const [termsAccepted, setTermsAccepted] = useState();
  const [description, setDescription] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState([]);

  const validateForm = (data: any): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!fullName.trim()) {
      errors.fullName = "Ism va familiya majburiy.";
    }

    if (
      !email.trim() ||
      !/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(data.email)
    ) {
      errors.email = "Yaroqli email kiriting.";
    }

    if (!phone.trim() || !/^\+?[0-9]{10,15}$/.test(data.phone)) {
      errors.phone = "Yaroqli telefon raqamini kiriting.";
    }

    if (!startingDate) {
      errors.startingDate = "Kelish sanasi majburiy.";
    }

    if (!endingDate) {
      errors.endingDate = "Ketish sanasi majburiy.";
    } else if (new Date(data.checkInDate) >= new Date(data.checkOutDate)) {
      errors.checkOutDate =
        "Ketish sanasi kelish sanasidan keyin bo‘lishi kerak.";
    }

    if (data.guests < 1) {
      errors.guests = "Mehmonlar soni kamida 1 bo‘lishi kerak.";
    }

    if (!termsAccepted) {
      errors.termsAccepted = "Shartlarga rozilik bildirish majburiy.";
    }

    return errors;
  };

  const myorders = async () => {
    console.log(isAgreed);
    try {
      const { data } = await axios.post(`/order`, {
        fullName,
        email,
        phone,
        startingDate,
        endingDate,
        numberOfGuests,
        paymentType,
        roomId,
        isAgreed,
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      setFormData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
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

  const user_id = localStorage.getItem("user_id");
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const myorders = async () => (
  //   try {
  //     await axios.post(`/order`),(

  //       fullName:"",
  //       email:"",
  //       phone:"",
  //       startingDate:"",
  //       endingDate:"",
  //       numberOfGuests:"",
  //       paymentType:"",
  //       orderedRoom:"",
  //       roomId:"",
  //     )

  //   } catch (error) {
  //     console.log(error);

  //   }
  // )

  const handleOrder = async () => {
    try {
      await axios.post(`/`, {
        user: user_id,
        room: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const user_id = localStorage.getItem("user_id");
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setModalOpen(true)}
        style={{ backgroundColor: "#1BA98F" }}
      >
        Bronlashni boshlash
      </Button>

      <Dialog
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Mehmonxona bronlash</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Ism va Familiya"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              error={!!errors.fullName}
              helperText={errors.fullName}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
            <TextField
              label="Telefon"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
            />
            <TextField
              label="Kelish sanasi"
              type="date"
              name="checkInDate"
              value={startingDate}
              onChange={(e) => setStartingDate(e.target.value)}
              error={!!errors.checkInDate}
              helperText={errors.checkInDate}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              label="Ketish sanasi"
              type="date"
              name="checkOutDate"
              value={endingDate}
              onChange={(e) => setEndingDate(e.target.value)}
              error={!!errors.checkOutDate}
              helperText={errors.checkOutDate}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              label="Mehmonlar soni"
              type="number"
              name="guests"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(Number(e.target.value))}
              error={!!errors.guests}
              helperText={errors.guests}
              InputProps={{ inputProps: { min: 1 } }}
              fullWidth
            />
            <TextField
              label="To‘lov usuli"
              name="paymentMethod"
              select
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              fullWidth
            >
              <MenuItem value="creditCard">Kredit karta</MenuItem>
              <MenuItem value="cash">Naqd</MenuItem>
              <MenuItem value="later">Keyinroq to‘lash</MenuItem>
            </TextField>
            <TextField
              label="Maxsus talablar"
              name="specialRequests"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={4}
              fullWidth
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="termsAccepted"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
<!--                   checked={formData.termsAccepted}
                  onChange={handleChange} -->
                />
              }
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
          <Button
            onClick={myorders}
//             onClick={handleSubmit}
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#1BA98F" }}
            onSubmit={handleOrder}
          >
            Tasdiqlash
          </Button>
        </DialogActions>
      </Dialog>

      {/* {isFormSubmitted && <PDFCheck formData={formData} />} */}
    </>
  );
};

export default BookingForm;

function setAnchorEl(currentTarget: EventTarget & HTMLElement) {
  throw new Error("Function not implemented.");
}
