import React, { useState } from "react";
import "./dashboard.css";

import zominMountain from "./img/mountainZomin.jpg";
import { Typography } from "@mui/material";

import ChatIcon from "@mui/icons-material/Chat";
import avatar from "./img/avatar.jpg";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { SelectChangeEvent } from "@mui/material/Select";
import chart from "./img/chart.png";
import zomindacha from "./img/zomindacha.png";
import afishadacha from "./img/afishadacha.jpeg";
import everestplaza from "./img/everestplaza.jpg";
import dachaturizm from "./img/dachaturizm.png";
import SalesIndicator from "components/selesIndicotor/SalesIndicotor";
import FinancialStatistics from "components/FinancialStatics/Statics";
import Navbar from "components/navbar/Navbar";
import Footer from "components/Footer/Footer";
import Header from "pages/Home/Header";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [Monthly, setMonthly] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMonthly(event.target.value as string);
  };
  const [isHovered, setIsHovered] = useState(false);

  const staffData = [
    { name: "Rina", status: "Online", avatarSrc: avatar },
    { name: "John", status: "Online", avatarSrc: avatar },
    { name: "Offline", status: "Offline", avatarSrc: avatar },
    { name: "Rina", status: "Online", avatarSrc: avatar },
    { name: "Rina", status: "Online", avatarSrc: avatar },
    { name: "Rina", status: "Online", avatarSrc: avatar },
  ];

  interface CardItem {
    title: string;
    value: string;
    icon: React.ReactNode;
    bgColor: string;
  }

  const statsData: CardItem[] = [
    {
      title: "Total Sales",
      value: "$12.450",
      icon: <TrendingUpIcon style={{ color: "green" }} />,
      bgColor: "#EFFEFA",
    },
    {
      title: "Viewers",
      value: "4.090",
      icon: <PeopleOutlineIcon style={{ color: "#FFBE4C" }} />,
      bgColor: "#FFE8CC",
    },
    {
      title: "Future Funds",
      value: "$130.090",
      icon: <TrendingUpIcon style={{ color: "green" }} />,
      bgColor: "#EFFEFA",
    },
    {
      title: "Agents",
      value: "2500",
      icon: <PersonAddAltIcon style={{ color: "#33CFFF" }} />,
      bgColor: "#F0FBFF",
    },
  ];

  // Define a type for the property object
  interface Property {
    id: number;
    title: string;
    price: string;
    image: string;
    location: string;
  }

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  const properties: Property[] = [
    {
      id: 1,
      title: "Grand Field, MN",
      price: "$1,200 / per month",
      image: zomindacha,
      location: "Grand Field, MN",
    },
    {
      id: 2,
      title: "Grand Field, MN",
      price: "$1,200 / per month",
      image: afishadacha,
      location: "Grand Field, MN",
    },
    {
      id: 3,
      title: "Grand Field, MN",
      price: "$1,200 / per month",
      image: everestplaza,
      location: "Grand Field, MN",
    },
    {
      id: 4,
      title: "Grand Field, MN",
      price: "$1,200 / per month",
      image: dachaturizm,
      location: "Grand Field, MN",
    },
  ];

  const showDetails = (property: Property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/clickdetail");
  };
  const handleDetail = () => {
    navigate("/propertiespage");
  };

  const handleGetPro = () => {
    navigate("/primum");
  };

  return (
    <div style={{ backgroundColor: "#F0FBFF" }}>
      <div>
        <Header />
        <div
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <Navbar />
        </div>

        <div
          style={{
            maxWidth: "1360px",

            margin: "0 auto",
            backgroundColor: "#F0FBFF",
            padding: "20px",
            display: "flex",
            gap: "34px",
            // marginBottom: "30px",
            borderRadius: "20px",
          }}
        >
          <div>
            <div style={{ marginBottom: "48.25px" }}>
              <Typography
                style={{
                  fontFamily: "Manrope",
                  fontSize: "28.92px",
                  fontWeight: "600px",
                  lineHeight: "43.37px",
                  textAlign: "left",
                  color: " #000000",
                  opacity: "30%",
                }}
              >
                Property Records
              </Typography>
              <Typography
                style={{
                  fontFamily: "Manrope",
                  fontSize: "57.83px",
                  fontWeight: "600",
                  lineHeight: "69.4px",
                  textAlign: "left",
                  color: "#000000",
                }}
              >
                Dashboard
              </Typography>
            </div>

            <div
              style={{
                maxWidth: "400px",

                padding: "20px",
                gap: "16px",
                borderRadius: "15px",
                opacity: "0px",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  maxWidth: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "16px",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Manrope",
                    fontWeight: "600px",
                    fontSize: "24px",
                    lineHeight: "36px",
                  }}
                >
                  Apartments
                </h4>
                {/* <MoreHorizIcon /> */}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <img
                  style={{
                    maxWidth: "290px",
                    height: "250px",
                    gap: "0px",
                    opacity: isHovered ? "1" : "0.8",
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    transform: isHovered ? "scale(0.9)" : "scale(1)",
                    boxShadow: isHovered
                      ? "0 4px 12px rgba(0, 0, 0, 0.2)"
                      : "none",
                  }}
                  src={zominMountain}
                  alt="zomin mountain img"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </div>
              <div
                style={{
                  maxWidth: "289px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <h1
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "36px",
                      textAlign: "left",
                    }}
                  >
                    $1,200 /
                  </h1>
                  <Typography
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: " 21.7px",
                      textAlign: "left",
                    }}
                  >
                    per month
                  </Typography>
                </div>
                <a
                  className="hover-link"
                  style={{
                    maxWidth: "201px",

                    borderRadius: "30px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",
                    color: "white",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    backgroundColor: "black",
                  }}
                  onClick={handleClick}
                >
                  Detail
                </a>
              </div>
            </div>
            <div
              style={{
                marginTop: "1.5rem",
                maxWidth: "400px",
                padding: "20px",
                gap: "16px",
                borderRadius: "20px",
                opacity: "1",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxWidth: "300px",
                  paddingBottom: "1rem",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Monrope",
                    fontWeight: "600",
                    fontSize: "24px",
                    lineHeight: "36px",
                  }}
                >
                  Staff
                </h4>
              </div>

              {staffData.map((staff, index) => (
                <div
                  key={index}
                  style={{
                    maxWidth: "280px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "5px",
                    paddingBottom: "1rem",
                    marginBottom: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "15px",
                    }}
                  >
                    <img
                      src={staff.avatarSrc}
                      alt="avatar"
                      width={50}
                      style={{ borderRadius: "100px" }}
                    />
                    <div>
                      <h5
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "20px",
                          fontWeight: "600",
                          lineHeight: "28px",
                          textAlign: "left",
                        }}
                      >
                        {staff.name}
                      </h5>
                      <Typography
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "21.7px",
                          textAlign: "left",
                        }}
                      >
                        {staff.status}
                      </Typography>
                    </div>
                  </div>

                  <button
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      paddingTop: "11px",
                      paddingLeft: "16px",
                      paddingBottom: "11px",
                      paddingRight: "16px",
                      border: "1px solid green",
                      borderRadius: "100px",
                    }}
                  >
                    <ChatIcon style={{ color: "green" }} />
                    <Typography
                      style={{
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "500",
                        lineHeight: "20px",
                        textAlign: "center",
                        color: "green",
                      }}
                    >
                      Chat
                    </Typography>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="kattadiv">
            <div
              className="dflexdiv"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              {statsData.map((item, index) => (
                <div
                  key={index}
                  className="treding"
                  style={{
                    backgroundColor: "white",
                    maxWidth: "237px",
                    padding: "20px",
                    borderRadius: "20px",
                    paddingRight: "60px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "100px",
                        backgroundColor: item.bgColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "12px",
                      }}
                    >
                      {item.icon}
                    </div>
                    <h5
                      style={{
                        fontFamily: "Manrope",
                        fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "28px",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </h5>
                  </div>
                  <h2
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "40px",
                      fontWeight: "600",
                      lineHeight: "48px",
                      textAlign: "center",
                    }}
                  >
                    {item.value}
                  </h2>
                </div>
              ))}
            </div>
            <div className="kattadiv" style={{ marginTop: "30px" }}>
              <div className="dflex">
                <div className="1div">
                  <div
                    style={{
                      display: "flex",
                      width: "454px",
                      justifyContent: "space-between",
                      gap: "38.8px",
                      padding: "20px",
                      paddingTop: "0",
                      paddingBottom: "0",
                    }}
                  >
                    {["All", "5m", "1d", "1w", "1m", "1y"].map(
                      (label, index) => (
                        <button
                          key={index}
                          style={{
                            width: "49px",
                            height: "40px",
                            borderRadius: "100px",
                            color: "white",
                            backgroundColor: "black",
                            fontFamily: "Manrope, sans-serif",
                            fontSize: "14px",
                            fontWeight: "600",
                            border: "none",
                            cursor: "pointer",
                            transition: "background-color 0.3s, transform 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#333"; // Darker shade on hover
                            e.currentTarget.style.transform = "scale(1.05)"; // Slightly enlarge button
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "black";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {label}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "20px", marginBottom: "29px" }}
                >
                  <div
                    style={{
                      width: "454px",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "32px",
                      height: "480px",
                      borderRadius: "20px",
                      backgroundColor: "white",
                      padding: "20px",
                    }}
                  >
                    <FinancialStatistics />
                  </div>
                  <div>
                    <div
                      style={{
                        width: "454px",
                        display: "flex",
                        justifyContent: "space-between",

                        height: "186px",
                        borderRadius: "20px",
                        alignItems: "center",
                        padding: "10px",
                      }}
                    >
                      <SalesIndicator />
                    </div>
                    <div
                      style={{
                        width: "474px",

                        marginTop: "30px",
                        height: "291px",
                        borderRadius: "20px",
                        backgroundColor: "black",

                        backgroundImage: `url(${chart})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <h3
                        style={{
                          maxWidth: "270px",
                          fontFamily: "Manrope",
                          fontSize: "32px",
                          fontWeight: "600",
                          lineHeight: "44.8px",
                          textAlign: "left",
                          paddingLeft: "33px",
                          color: "white",
                          paddingTop: "30px",
                          marginBottom: "23px",
                        }}
                      >
                        Get more feature and unlock all service with us
                      </h3>
                      <a
                        style={{
                          width: "83px",
                          height: "40px",
                          color: "white",
                          backgroundColor: "#1BA98F",
                          paddingTop: "10px",
                          paddingRight: "16px",
                          paddingBottom: "10px",
                          paddingLeft: "16px",
                          borderRadius: "100px",
                          marginLeft: "33px",
                        }}
                        onClick={handleGetPro}
                      >
                        Get Pro
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginBottom: "6px",
                }}
              >
                <Typography>
                  <h4
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "36px",
                      textAlign: "left",
                    }}
                  >
                    Property
                  </h4>
                </Typography>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  {properties.map((property) => (
                    <div key={property.id}>
                      <div
                        style={{
                          maxWidth: "237px",
                          height: "140px",
                          borderRadius: "20px",
                          display: "flex",
                          alignItems: "end",
                          backgroundColor: "white",
                          paddingBottom: "20px",
                          backgroundImage: `url(${property.image})`,
                          backgroundSize: "cover",
                          paddingLeft: "15.36px",
                          opacity: "70%",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 10px rgba(0, 0, 0, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <h1
                          style={{
                            fontFamily: "Manrope",
                            fontSize: "18px",
                            fontWeight: "600",
                            lineHeight: "25.2px",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          {property.title}
                        </h1>
                      </div>
                      <div
                        style={{
                          maxWidth: "289px",
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <h1
                            style={{
                              fontFamily: "Manrope",
                              fontSize: "20px",
                              fontWeight: "600",
                              lineHeight: "28px",
                              textAlign: "left",
                            }}
                          >
                            {property.price}
                          </h1>
                        </div>
                        <a
                          className="hover-link"
                          style={{
                            maxWidth: "201px",
                            borderRadius: "30px",
                            paddingTop: "5px",
                            paddingRight: "15px",
                            paddingBottom: "5px",
                            paddingLeft: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "black",
                            color: "white",
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            textAlign: "center",
                            textDecorationSkipInk: "none",
                          }}
                          href="#"
                          onClick={handleDetail} // Set the clicked property in state
                        >
                          Detail
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedProperty && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "10px",
                        maxWidth: "600px",
                        width: "100%",
                      }}
                    >
                      <h2>{selectedProperty.title}</h2>
                      <img
                        src={selectedProperty.image}
                        alt={selectedProperty.title}
                        style={{
                          width: "100%",
                          borderRadius: "10px",
                          height: "auto",
                          maxHeight: "300px",
                        }}
                      />
                      <p style={{ fontSize: "18px", marginTop: "10px" }}>
                        Location: {selectedProperty.location}
                      </p>
                      <p style={{ fontSize: "20px", fontWeight: "600" }}>
                        {selectedProperty.price}
                      </p>
                      <button
                        onClick={closeModal}
                        style={{
                          marginTop: "15px",
                          padding: "10px 20px",
                          backgroundColor: "black",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
