import React from "react";
import "./ChangeHome.css";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import zomindacha from "./img/zomindacha.png";

// interface Props{
//     name: string;
//     number: number;

// }

function ChangeHome() {
  return (
    <div className="container">
      <div>
        <div
          style={{
            maxWidth: "322px",
            height: "200px",
            borderRadius: "20px",
            backgroundImage: `url(${zomindacha})`,
            backgroundSize: "cover",
            opacity:"80%",
          }}
        >
          <div style={{display:"flex",}}>
          <Stack spacing={2} direction="row">
            <Button style={{backgroundColor:"#FAEDCC", color:"#966422", borderRadius:"16px", width:"67px", height:"28px0",}} variant="contained">Home</Button>
          </Stack>
          <div style={{display:"flex",}}>
            <StarOutlineIcon />
            <p>4,5</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeHome;
