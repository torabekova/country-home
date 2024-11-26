import React from 'react'
import Navbar from '../navbar/Navbar'
import zominMountain from "./img/mountainZomin.jpg";
import { Typography } from "@mui/material";
import SalesIndicator from '../selesIndicotor/SalesIndicotor';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import TransactionTable from '../TransactionTable/TransactionTable';
import PersonalInfoForm from '../ProfilSettings/ProfilInformation';

type Props = {}

const Transaction = (props: Props) => {
  return (
    <div>
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
            Transaction
          </Typography >
        </div>
        <div>
          <SalesIndicator/>
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
      <TransactionTable/>
       
      </div>
    </div>
  )
}

export default Transaction;