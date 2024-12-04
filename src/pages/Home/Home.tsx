import React, { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "components/Footer/Footer";
import HomeMainPage from "components/HomeMainPage/HomeMainPage";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [tourists, setTourists] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${destination}, Date: ${date}, Tourists: ${tourists}`);
    console.log("Search Data:", { destination, date, tourists });
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Header handleScroll={handleScroll} handleSignInClick={handleSignInClick} />
      <MainContent 
        destination={destination} 
        setDestination={setDestination} 
        date={date} 
        setDate={setDate} 
        tourists={tourists} 
        setTourists={setTourists} 
        handleSearch={handleSearch} 
      />
      <HomeMainPage />
      <Footer />
    </Box>
  );
};

export default Home;
