import React from "react";
import "./dashboard.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import zominMountain from "./img/mountainZomin.jpg";
import { Typography } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import ChatIcon from "@mui/icons-material/Chat";
import avatar from "./img/avatar.jpg";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Padding } from "@mui/icons-material";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import chart from "./img/chart.png";
import zomindacha from "./img/zomindacha.png";
import afishadacha from "./img/afishadacha.jpeg";
import everestplaza from "./img/everestplaza.jpg";
import dachaturizm from "./img/dachaturizm.png";
import SalesIndicator from "../selesIndicotor/SalesIndicotor";
import FinancialStatistics from "../FinancialStatics/Statics";
import Navbar from "../navbar/Navbar";

const Dashboard = () => {
  const [Monthly, setMonthly] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMonthly(event.target.value as string);
  };

  return (
    <div>
      <div style={{ maxWidth: "1360px", margin: "0 auto",  borderRadius: "20px", padding: "20px",}}>
      <Navbar/>
      </div>
      
      <div
      style={{
        maxWidth: "1360px",
       
        margin: "0 auto",
        backgroundColor: "#DFE1E7",
        padding: "20px",
        display: "flex",
        gap: "34px",
        marginBottom: "30px",
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
            maxWidth: "300px",

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
            <MoreHorizIcon />
          </div>
          <div>
            <img
              style={{
                maxWidth: "290px",
                height: "250px",
                gap: "0px",
                opacity: "0px",
                borderRadius: "20px",
               
              }}
              src={zominMountain}
              alt="zomin mointain img"
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
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
              href="#"
            >
              Detail
            </a>
          </div>
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            maxWidth: "300px",
            // height: "308px",
            padding: "20px",
            gap: "16px",
            borderRadius: "20px",
            opacity: "0px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "1rem",
            }}
          >
            <h4
              style={{
                fontFamily: "Monrope",
                fontWeight: "600px",
                fontSize: "24px",
                lineHeight: "36px",
              }}
            >
              Staff
            </h4>
            <MoreHorizIcon />
          </div>
          <div
            style={{
              maxWidth: "280px",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // backgroundColor: "green",
              padding: "5px",
              paddingBottom: "1rem",
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
                src={avatar}
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
                  Rina
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
                  Online
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
          <div
            style={{
              maxWidth: "280px",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              padding: "5px",
              paddingBottom: "1rem",
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
                src={avatar}
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
                  Rina
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
                  Online
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
          <div
            style={{
              maxWidth: "280px",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // backgroundColor: "green",
              padding: "5px",
              paddingBottom: "1rem",
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
                src={avatar}
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
                  John
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
                  Online
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
          <div
            style={{
              maxWidth: "280px",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // backgroundColor: "green",
              padding: "5px",
              paddingBottom: "1rem",
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
                src={avatar}
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
                  Offline
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
                  Online
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
          <div
            style={{
              maxWidth: "280px",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // backgroundColor: "green",
              padding: "5px",
              paddingBottom: "1rem",
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
                src={avatar}
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
                  Rina
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
                  Online
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
        </div>
      </div>

      <div className="kattadiv">
        <div
          className="dflexdiv"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px  ",
          }}
        >
          <div
            className="treding"
            style={{
              backgroundColor: "white",
              maxWidth: "237px",
              padding: "20px",
              paddingRight: "60px",
              borderRadius: "20px",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100px",
                  backgroundColor: "#EFFEFA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                }}
              >
                <TrendingUpIcon style={{ color: "green" }} />
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
                Total Sales
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
              $12.450
            </h2>
          </div>
          <div
            className="treding"
            style={{
              backgroundColor: "white",
              maxWidth: "237px",
              padding: "20px",
              borderRadius: "20px",
              gap: "12px",
              paddingRight: "80px",
            }}
          >
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100px",
                  backgroundColor: "#FFE8CC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                }}
              >
                <PeopleOutlineIcon style={{ color: "#FFBE4C" }} />
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
                Viewers
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
              4.090
            </h2>
          </div>
          <div
            className="treding"
            style={{
              backgroundColor: "white",
              maxWidth: "237px",
              padding: "20px",
              borderRadius: "20px",
              gap: "12px",
              paddingRight: "50px",
            }}
          >
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100px",
                  backgroundColor: "#EFFEFA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                }}
              >
                <TrendingUpIcon style={{ color: "green" }} />
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
                Future Funds
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
              $130.090
            </h2>
          </div>
          <div
            className="treding"
            style={{
              backgroundColor: "white",
              maxWidth: "237px",
              padding: "20px",
              borderRadius: "20px",
              gap: "12px",
              paddingRight: "80px",
            }}
          >
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100px",
                  backgroundColor: "##F0FBFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                }}
              >
                <PersonAddAltIcon style={{ color: "#33CFFF" }} />
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
                Agents
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
              2500
            </h2>
          </div>
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
                <button
                  style={{
                    width: "49px",
                    height: "40px",
                    borderRadius: "100px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  All
                </button>
                <button
                  style={{
                    width: "49px",
                    height: "40px",
                    borderRadius: "100px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  5m
                </button>
                <button
                  style={{
                    width: "49px",
                    height: "40px",
                    borderRadius: "100px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  1d
                </button>
                <button
                  style={{
                    width: "49px",
                    height: "40px",
                    borderRadius: "100px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  1w
                </button>
                <button
                  style={{
                    width: "49px",
                    height: "40px",
                    borderRadius: "100px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  1m
                </button>
                <button
                  style={{
                    width: "49px",
                    height: "40px",
                    borderRadius: "100px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  1y
                </button>
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "29px" }}>
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
               

               <FinancialStatistics/> 
                
              </div>
              <div>
                <div
                  style={{
                    width: "454px",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "32px",
                    height: "186px",
                    borderRadius: "20px",
                    
                    padding: "10px",
                  }}
                ><SalesIndicator/></div>
                <div
                  style={{
                    width: "474px",

                    marginTop: "22px",
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
                    href="#"
                  >
                    Get Pro
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
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
            <FormControl>
              <InputLabel
                style={{
                  alignItems: "center",
                  display: "flex",
                  color: "white",
                }}
                id="demo-simple-select-label"
              >
                <h1
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    textAlign: "center",
                  }}
                >
                  Best Selling
                </h1>
              </InputLabel>

              <Select
                style={{
                  width: "117px",
                  height: "40px",
                  color: "white",
                  borderRadius: "20px",
                  backgroundColor: "black",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Monthly}
                label="Monthly"
                onChange={handleChange}
              >
                <MenuItem value={10}>zomin dacha</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div
                style={{
                  maxWidth: "237px",
                  height: "140px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "end",
                  backgroundColor: "white",
                  paddingBottom: "20px",
                  backgroundImage: `url(${zomindacha})`,
                  backgroundSize: "cover",
                  paddingLeft: "15.36px",
                  opacity: "70%",
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
                  Grand Field, MN
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
                    $1,200 /
                  </h1>
                  <Typography
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "21.7px",
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
                    // height: "40px",
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
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                  href="#"
                >
                  Detail
                </a>
              </div>
            </div>
            <div>
              <div
                style={{
                  maxWidth: "237px",
                  height: "140px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "end",
                  backgroundColor: "white",
                  paddingBottom: "20px",
                  backgroundImage: `url(${afishadacha})`,
                  backgroundSize: "cover",
                  paddingLeft: "15.36px",
                  opacity: "70%",
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
                  Grand Field, MN
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
                    $1,200 /
                  </h1>
                  <Typography
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "21.7px",
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
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                  href="#"
                >
                  Detail
                </a>
              </div>
            </div>
            <div>
              <div
                style={{
                  maxWidth: "237px",
                  height: "140px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "end",
                  backgroundColor: "white",
                  paddingBottom: "20px",
                  backgroundImage: `url(${everestplaza})`,
                  backgroundSize: "cover",
                  paddingLeft: "15.36px",
                  opacity: "70%",
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
                  Grand Field, MN
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
                    $1,200 /
                  </h1>
                  <Typography
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "21.7px",
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
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                  href="#"
                >
                  Detail
                </a>
              </div>
            </div>
            <div>
              <div className="property_img"
                style={{
                  maxWidth: "237px",
                  height: "140px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "end",
                  backgroundColor: "white",
                  paddingBottom: "20px",
                  backgroundImage: `url(${dachaturizm})`,
                  backgroundSize: "cover",
                  paddingLeft: "15.36px",
                  opacity: "70%",
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
                  Grand Field, MN
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
                    $1,200 /
                  </h1>
                  <Typography
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "21.7px",
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
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                  href="#"
                >
                  Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
