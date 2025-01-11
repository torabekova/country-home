import React from "react";
import { Box, Typography } from "@mui/material";
import bacgroundimg from "./img/bacgroundimg.png";
import SearchForm from "./SearchForm";

interface MainContentProps {
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  tourists: string;
  setTourists: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  destination,
  setDestination,
  date,
  setDate,
  tourists,
  setTourists,
  handleSearch,
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bacgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{ color: "#fff", mb: 2, fontWeight: "bold" }}
      >
        Welcome to ZAMIN Town
      </Typography>
      <Typography variant="h6" sx={{ color: "#fff", mb: 4 }}>
        Yaxshi insonlar. Ajoyib g'oyalar. Yaxshi his.
      </Typography>
      <SearchForm
        destination={destination}
        setDestination={setDestination}
        date={date}
        setDate={setDate}
        tourists={tourists}
        setTourists={setTourists}
        handleSearch={handleSearch}
      />
    </Box>
  );
};

export default MainContent;
