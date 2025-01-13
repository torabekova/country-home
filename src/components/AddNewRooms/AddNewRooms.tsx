import React, { useState } from "react";
import { Button } from "@mui/material";

import axios from "axios";

import { useParams } from "react-router-dom";
import RoomFormModal, { RoomFormData } from "components/RoomFormModal";

const AddNewRooms = ({ refetch }: { refetch: any }) => {
  const { id } = useParams();

  const [formData, setFormData] = useState<RoomFormData>({
    hotelId: id,
    bathroom: 0,
    bedroom: 0,
    description: "",
    hasWifi: false,
    price: 0,
    propertyName: "",
  });

  const [open, setOpen] = useState(false);
  const [propertyData, setPropertyData] = useState({
    propertyName: "",
    carpetArea: "",
    bedroom: "",
    bathroom: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    propertiesFor: "",
    picture: "",
  });

  const [originalData] = useState(propertyData);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCancel = () => {
    setPropertyData(originalData);
    handleClose();
  };

  const [isError, setIsError] = useState<boolean>(false);

  const submitData = async () => {
    try {
      await axios.post("/room", {
        hotel: id,
        ...formData,
        isError,
      });
      refetch();
      handleClose();
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{ backgroundColor: "#1BA98F", borderRadius: "100px" }}
      >
        Yangi Xona qo'shish
      </Button>
      <RoomFormModal
        type="create"
        {...{
          submitData,
          formData,
          handleCancel,
          handleClose,
          open,
          setFormData,
        }}
      />
    </div>
  );
};

export default AddNewRooms;
