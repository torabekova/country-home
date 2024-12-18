import React, { useState, useEffect } from "react";
import { Modal, Box, Button, TextField } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import SearchIcon from "@mui/icons-material/Search";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const ModalMap: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState<[number, number]>([0, 0]);
  const [address, setAddress] = useState("");

  // Открытие модального окна
  const handleOpen = () => setOpen(true);

  // Закрытие модального окна
  const handleClose = () => {
    setOpen(false);
    setLocation([0, 0]);
    setAddress("");
  };

  // Поиск по адресу с использованием Nominatim API
  const searchAddress = async () => {
    if (address) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${address}&format=json`
      );
      const data = await response.json();
      if (data[0]) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setLocation([lat, lon]);
      }
    }
  };

  // Инициализация иконки маркера (по умолчанию)
  // useEffect(() => {
  //   const defaultIcon = new L.Icon({
  //     iconUrl: require("leaflet/dist/images/marker-icon.png"),
  //     iconSize: [25, 41],
  //     iconAnchor: [12, 41],
  //     popupAnchor: [1, -34],
  //     shadowSize: [41, 41],
  //   });
  //   L.Marker.prototype.options.icon = defaultIcon;
  // }, []);

  // Хук для обновления размера карты
  // const InvalidateSizeOnLocationChange = () => {
  //   const map = useMap();
  //   useEffect(() => {
  //     if (map && location) {
  //       map.invalidateSize();
  //     }
  //   }, [map, location]);
  //   return null;
  // };

  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleOpen}>
          Xarita ochish
        </Button>

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 400,
              height: "80%",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <TextField
                label="Manzilni kiriting"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={searchAddress}
                startIcon={<SearchIcon />}
                sx={{ mt: 2 }}
              >
                Qidirish
              </Button>
            </div>
            {/* Карта */}
            {/* <MapContainer /> */}
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            ,
            {/* // center={location || [51.505, -0.09]} // Default to London if no location
            // zoom={13}
            // style={containerStyle}
            // scrollWheelZoom={false}
            > */}
            {/* <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              /> */}
            {/* {location && (
                <Marker position={location}>
                  <Popup>{address}</Popup>
                </Marker>
              )} */}
            {/* <InvalidateSizeOnLocationChange /> */}
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ModalMap;
