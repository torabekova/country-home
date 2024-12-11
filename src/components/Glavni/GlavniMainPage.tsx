import React, { useState } from "react";
import { Dialog } from "@mui/material";
import Glavni from "./Glavni";

const ParentComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{position:"relative"}}>
 
      <button onClick={() => setOpen(true)} style={{opacity:"0"}}>Open Profile Menu</button>
      
     
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{position:"absolute", right:"0"}}
      >
        <Glavni  />
      </Dialog>
    </div>
  );
};

export default ParentComponent;
