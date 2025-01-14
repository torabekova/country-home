import { Box, Card, Typography } from "@mui/material";
import Navbar from "components/navbar/Navbar";
import Header from "pages/Home/Header";
import React from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubRoundedIcon from "@mui/icons-material/BathtubRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BookingForm from "components/BookingForm/BookingForm";
import Footer from "components/Footer/Footer";

// const navigate = useNavigate =>{
//   navigate("<BookingForm/>")
// }

const StyledButton = styled.button`
  padding-top: 7px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 7px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  background-color: #1ba98f;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

const StyledBookButton = styled.button`
  padding-top: 11px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 11px;
  border-radius: 4px;
  background-color: #1ba98f;
  border: none;
  margin-top: 20px;
  color: white;
`;
const StyledDiv = styled.div`
  padding: 20px;
  border-radius: 4px;

  border: none;
  margin-top: 10px;
`;

const ConfirmPage = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Header />
      <Navbar />
      <Box
        sx={{
          maxWidth: "1360px",
          width: "100%",
          margin: "auto",
          paddingTop: "30px",
        }}
      >
        <h1 style={{ textAlign: "center", fontFamily: "Manrope" }}>
          {" "}
          Siz bron qilgan joy{" "}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <p
            style={{
              textAlign: "center",
              maxWidth: "800px",
              marginBottom: 1,
              color: "#666",
              paddingBottom: "20px",
            }}
          >
            Bu xona mehmonlarimiz uchun eng yuqori qulaylikni taqdim etadi.
            Xonada keng va shinam karavot, konditsioner, televizor, Wi-Fi, va
            boshqa zarur qulayliklar mavjud. Xonada alohida balkon, shuningdek,
            maxsus vannaga ega bo‘lib, sizni to‘liq dam olish va xotirjamlikka
            undaydi. Balkon sizga ajoyib manzaradan bahramand bo‘lish imkonini
            beradi, vannada esa kundalik shaxsiy g‘amxo‘rlikni amalga
            oshirishingiz mumkin. Har bir detallarga e'tibor berilgan, shunda
            sizning qolishingiz qulay va esda qolarli bo‘ladi.
          </p>
        </div>
        <div style={{ display: "flex", gap: "40px", marginTop: "1.5rem" }}>
          <div>
            <img
              style={{ width: "800px", borderRadius: "6px", height: "350px" }}
              src="https://media.istockphoto.com/id/2149664000/photo/hotel-room-with-a-view.jpg?s=2048x2048&w=is&k=20&c=3NL9qB8YDjDs3_1K92FYh4Q7GaS4PAF_MdpD4A_y5_4="
              alt=" twin Room image "
            />
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/04/08/19/11/bathroom-713248_640.png"
                alt=""
                width={400}
                height={205}
                style={{ borderRadius: "10px" }}
              />
              <img
                src="https://cdn.pixabay.com/photo/2020/04/01/10/18/balcony-4990666_640.jpg"
                alt=""
                width={400}
                height={205}
                style={{ borderRadius: "6px" }}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                maxWidth: "400px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "6px",
              }}
            >
              <h1
                style={{
                  fontFamily: "Manrope",
                  paddingBottom: "20px",
                  fontWeight: "bold",
                  color: "#555",
                }}
              >
                Ikki kishilik hona
              </h1>
              <hr style={{ borderColor: "#f5f5f5" }} />
              <div
                style={{
                  display: "flex",
                  paddingTop: "20px",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <h2 style={{ fontWeight: "bold", color: "bisque" }}>100$</h2>
              </div>

              <p style={{ color: "#666" }}>
                Bron qilishda to‘langan pul qaytarib berilmaydi. Iltimos,
                rezervatsiyani tasdiqlashdan oldin shartlar va qoidalar bilan
                tanishing Shartlar va qoidalar haqida qo‘shimcha ma'lumot uchun
                mehmonxona xizmati bilan aloqaga chiqishingiz mumkin.
              </p>
              <div
                style={{
                  borderRadius: "6px",
                  border: "none",
                  marginTop: "15px",
                }}
              >
                <BookingForm />
              </div>
            </div>
            <div
              style={{
                maxWidth: "400px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "6px",
                marginTop: "1.5rem",
              }}
            >
              <h1
                style={{
                  fontWeight: "bold",
                  color: "#666",
                  fontFamily: "Manrope",
                  paddingBottom: "20px",
                }}
              >
                Xususyatlar
              </h1>
              <hr style={{ borderColor: "#f5f5f5" }} />
              <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <StyledButton>
                    <HotelIcon />
                    <h4>2 Krovat</h4>
                  </StyledButton>
                  <StyledButton>
                    <BathtubRoundedIcon />
                    <h4>1 Vana</h4>
                  </StyledButton>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <StyledButton>
                    <WifiRoundedIcon />
                    <h4> Tekin Wifi</h4>
                  </StyledButton>
                  <StyledButton>
                    <BrunchDiningIcon />
                    <h4>Nonushta</h4>
                  </StyledButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h1
                style={{
                  paddingTop: "20px",
                  fontFamily: "Manrope",
                  fontWeight: "bold",
                  color: "#555",
                  paddingBottom: "20px",
                }}
              >
                Ko'proq malumotlar
              </h1>
              <p
                style={{
                  maxWidth: "500px",
                  color: "#666",
                  paddingBottom: "20px",
                }}
              >
                Bizning mehmonxona xizmatlarimizga tekin nonushta ham kiradi, bu
                esa ertalabki vaqtingizni qulay va mazali qilish uchun
                mo‘ljallangan. Nonushta turli taomlar va ichimliklar bilan
                taqdim etiladi, shuningdek, sizning talablaringizga mos ravishda
                tayyorlanadi. Mehmonxonada 24 soat xizmat ko‘rsatuvchi
                xodimlarimiz sizning barcha ehtiyojlaringizni qondirish uchun
                har doim tayyor. Qo‘shimcha servislar ham mavjud, jumladan
                xonada tozalash, qo‘shimcha oziq-ovqat buyurtmalari va boshqa
                maxsus xizmatlar.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px", paddingBottom: "40px" }}>
            <StyledDiv>
              <PlaceOutlinedIcon
                style={{ color: "bisque", fontSize: "35px" }}
              />
              <h3
                style={{
                  fontWeight: "bold",
                  color: "#777",
                  paddingTop: "5px",
                  paddingBottom: "2px",
                }}
              >
                Manzil
              </h3>
              <address style={{ paddingBottom: "2px" }}>
                Jizzax Viloyati Zomin tumani{" "}
              </address>
              <p>Everest Plaza</p>
            </StyledDiv>
            <StyledDiv>
              <LocalPhoneIcon style={{ color: "bisque", fontSize: "35px" }} />
              <h3
                style={{
                  fontWeight: "bold",
                  color: "#777",
                  paddingTop: "5px",
                  paddingBottom: "2px",
                }}
              >
                Telefon Nomer
              </h3>
              <div>
                <a href="tel:+998940956767">(+998) 94 095 67 67</a>
              </div>

              <a href="tel:+998940956767">(+998) 94 095 67 74</a>
            </StyledDiv>
            <StyledDiv>
              <DraftsOutlinedIcon
                style={{ color: "bisque", fontSize: "35px" }}
              />
              <h3
                style={{
                  fontWeight: "bold",
                  color: "#777",
                  paddingTop: "5px",
                  paddingBottom: "2px",
                }}
              >
                Email
              </h3>
              <p style={{ paddingBottom: "2px" }}>
                faridatorabekova507@gmail.com
              </p>
              <p>EverestPlaza@gmail.com</p>
            </StyledDiv>
          </div>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default ConfirmPage;
