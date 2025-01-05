import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

interface SearchFormProps {
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  tourists: string;
  setTourists: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ destination, setDestination, date, setDate, tourists, setTourists,  }) => {
  const navigate = useNavigate();  
const handleClick = () => {
  navigate('/SearchForm');  
};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        borderRadius: 2,
        gap: 2,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box>
        <Typography sx={{ color: "#ffffff", mb: 1 }} variant="body2">
          Where To?
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Place Name"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              color: "#ffffff",
              backgroundColor: "#1E1E1E",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00E4FF",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00E4FF",
            },
          }}
          InputProps={{
            style: { color: "#ffffff" },
          }}
        />
      </Box>

      <Box>
        <Typography sx={{ color: "#ffffff", mb: 1 }} variant="body2">
          When?
        </Typography>
        <TextField
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              color: "#ffffff",
              backgroundColor: "#1E1E1E",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00E4FF",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00E4FF",
            },
          }}
          InputLabelProps={{
            style: { color: "#ffffff" },
          }}
        />
      </Box>

      <Box>
        <Typography sx={{ color: "#ffffff", mb: 1 }} variant="body2">
          How Many?
        </Typography>
        <TextField
          type="number"
          placeholder="No. of Tourists"
          value={tourists}
          onChange={(e) => setTourists(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              color: "#ffffff",
              backgroundColor: "#1E1E1E",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00E4FF",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00E4FF",
            },
          }}
        />
      </Box>

      <Button
        onClick={handleClick}
        sx={{
          marginTop: "1.5rem",
          backgroundColor: "#FFB400",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#FFA000",
          },
        }}
      >
        Find Now
      </Button>
    </Box>
  );
};

export default SearchForm;
