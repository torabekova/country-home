import React, { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';

const ViewMapSelect: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Function to open the modal
  const handleOpen = () => setOpen(true);

  // Function to close the modal
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Button to open the modal */}
      <Button variant="outlined" onClick={handleOpen}>
        Xarita ochish
      </Button>

      {/* Modal containing the Google Map */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: '700px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            // p: 1,
            display: 'flex',
            flexDirection: 'column',
            borderRadius:'20px'
          }}
        >
          <div style={{ position: 'relative', height: '100%' }}>
          <iframe
  width="100%"
  height="100%"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391791.11795770284!2d67.96893118599341!3d39.89958512064768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b25239f8d76ce3%3A0x2150c2f17b39602d!2sZomin%20tumani%2C%20Jizzax%20viloyati%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1733742786743!5m2!1suz!2s"
  style={{ border: 0 , borderRadius:"10px"}}
  allowFullScreen={true} // Corrected this to a boolean value
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewMapSelect;
