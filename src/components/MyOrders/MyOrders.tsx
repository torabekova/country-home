import {
  AppBar,
  Box,
  Grid,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import Footer from "components/Footer/Footer";
import Navbar from "components/navbar/Navbar";
import Header from "pages/Home/Header";
import React, { useEffect, useState } from "react";

function MyOrders() {
  const user_id = localStorage.getItem("user_id");

  const [loading, setLoading] = useState<boolean>(true);

  const [orders, setOrders] = useState<any[]>([]);

  const orderRooms = async () => {
    try {
      const { data } = await axios.post(`/${user_id}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      setOrders(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    orderRooms();
  }, []);

  return (
    <div style={{ backgroundColor: "#F0FBFF" }}>
      <Header />
      <Navbar />
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
          backgroundColor: "#F0FBFF",
          maxWidth: "1380px",
          margin: "0 auto",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
            Buyurtmalarim
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid spacing={1}>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
          item
          xs={12}
          sm={6}
          lg={3}
        >
          {loading ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ) : (
            <>
              {orders.map((property) => {
                return (
                  // <PropertyCard key={property.hotel.id} {...property.hotel} />
                  <p>fdgb</p>
                );
              })}
            </>
          )}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default MyOrders;
