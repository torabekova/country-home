import React, { useState } from "react";
import { Box, Dialog } from "@mui/material";
import Glavni from "./Glavni";

const ParentComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <button onClick={() => setOpen(true)} style={{ opacity: "0" }}>
        Open Profile Menu
      </button>

      <Dialog open={open} onClose={handleClose} sx={{ position: "absolute" }}>
        <Glavni />
      </Dialog>
    </Box>
  );
};

export default ParentComponent;
