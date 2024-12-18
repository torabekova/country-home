import Navbar from 'components/navbar/Navbar'
import Header from 'pages/Home/Header'
import React from 'react'
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SalesIndicator from '../selesIndicotor/SalesIndicotor';
import { Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FinancialStatistics from 'components/FinancialStatics/Statics';
import TransactionTable from 'components/TransactionTable/TransactionTable';
import chart from "./img/chart.png";
import Footer from 'components/Footer/Footer';

type Props = {}

function Report({}: Props) {
  return (
    <div style={{backgroundColor: "#F0FBFF"}}>
      <Header/>
      <div style={{ maxWidth: "1360px", margin: "0 auto",  borderRadius: "20px", padding: "20px",}}>
      <Navbar/>
      <div style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px  ",
          }}>
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
            O'tkazmalar
          </Typography >
        </div>
        <div style={{marginLeft:"45px"}}>
          <SalesIndicator/>
        </div>
        <div>
         
          <div style={{display:"flex", gap:"5px"}}>
             <div
            className="treding"
            style={{
              backgroundColor: "#F8F9FB",
              maxWidth: "237px",
              padding: "10px",
              borderRadius: "10px",
              gap: "12px",
              paddingRight: "50px",
              height:"172px",
              alignItems:"center",
             paddingTop:"40px",
             paddingLeft:"30px"
            }}
          >
            <div style={{ display: "flex", gap: "6px", alignItems: "center", }}>
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
                Kelajakdagi mablag'lar
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
              $130
            </h2>
          </div>
          <div
            className="treding"
            style={{
              backgroundColor: "#F8F9FB",
              maxWidth: "237px",
              padding: "10px",
              borderRadius: "10px",
              gap: "12px",
              paddingRight: "50px",
              height:"172px",
              alignItems:"center",
             paddingTop:"40px"
          

              
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
                Agentlar
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
          

        </div>
       
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{marginTop:"1.5rem"}}>
        <FinancialStatistics/>

        <div
                  style={{
                    width: "400px",

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
                    href="#"
                  >
                    Get Pro
                  </a>
                </div>
        </div>
      
      <TransactionTable/>
      </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Report