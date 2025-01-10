import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Header from "pages/Home/Header"; // Ensure these paths are correct

const cardData = [
  {
    id: 1,
    title: "Worldwide",
    images: [
      "https://media.rnztools.nz/rnz/image/upload/s--yRvBL08p--/c_scale,f_auto,q_auto,w_1050/v1643534558/4NKO483_image_crop_70564?_a=BACCd2AD", // Replace with actual image URLs
      "https://cdn.pixabay.com/photo/2019/01/22/08/02/smartphone-3947607_640.jpg",
    ],
    description: "Dunyo bo'ylab sayohatlarni boshdan kechiring.",
    content:
      "Dunyoning mo‘jizalarini bizning mehmonxonalar, tog‘lar va dachalarga mo‘ljallangan eksklyuziv xizmatlarimiz bilan kashf eting. Qadimiy go‘shalar va zamonaviy qulayliklarga ega joylardan tortib, ajoyib tog‘ manzaralari va dam olish maskanlarigacha, biz sizga unutilmas sayohatlarni taklif qilamiz..",
  },
  {
    id: 2,
    title: "Adventures",
    images: [
      "https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2015/07/1-Hiker-3-CROP_Web.jpg", // Replace with actual image URLs
      "https://miro.medium.com/v2/resize:fit:900/1*kpSkLZgHa2CMkHRPLI49zQ.jpeg",
    ],
    description: "Embark on thrilling adventures.",
    content:
      "Join us for thrilling adventures that will take you to the most exciting places on Earth. Whether it's hiking, climbing, or diving, we have something for every adventurer.",
  },
  {
    id: 3,
    title: "Foods & Drinks",
    images: [
      "https://healthylife.lk/wp-content/uploads/2024/03/A-Guide-to-Traditional-Sri-Lankan-Foods-with-Nutritional-Benefits.jpg", // Replace with actual image URLs
      "https://ik.imagekit.io/cprvr2lhot/blog/tys-alcohol%20and%20spirits.jpg",
    ],
    description: "Taste exotic cuisines.",
    content:
      "Indulge in the rich and diverse cuisines from around the world. Our food and drink tours offer a culinary journey that will tantalize your taste buds and leave you craving for more.",
  },
  {
    id: 4,
    title: "Affordable Hotels",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPFOXKASg1f4bilklQ1JTpwCn0IJNqc_lKQ&s", // Replace with actual image URLs
      "https://images.suitcasemag.com/wp-content/uploads/2023/10/10204251/the-best-affordable-hotels-in-paris_652d1f3312e0d.jpeg",
    ],
    description: "Comfortable stays at the best price.",
    content:
      "Enjoy comfortable and affordable hotel stays at our various destinations. We ensure that you have the best accommodation experience without breaking the bank.",
  },
  {
    id: 5,
    title: "Affordable Price",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlG0oHZZXCV_hUhpjqPEPux-SU5t7EgtBrQw&s", // Replace with actual image URLs
    ],
    description: "Best deals for your trips.",
    content:
      "Get the best deals for your trips with our affordable pricing options. We offer competitive rates for all our tours and services, ensuring you get the best value for your money.",
  },
  {
    id: 6,
    title: "24/7 Services",
    images: [
      "https://cdn.pixabay.com/photo/2020/01/27/15/21/sweet-4797470_640.jpg",
      "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=2048x2048&w=is&k=20&c=0KXj_sK4TVRpuv_YfxGW3_QIsx1jGW1AQX_fY-NjEq4=",
    ],
    description: "We are always here for you.",
    content:
      "Our 24/7 services ensure that you always have the support you need. Whether it's booking a tour or getting assistance during your trip, we are here to help you anytime.",
  },
];

const CardInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const card = cardData.find((card) => card.id.toString() === id);

  if (!card) {
    return <Typography variant="h5">Card information not found.</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#F0FBFF", color: "#fff", minHeight: "100vh" }}>
      <Header handleScroll={() => {}} handleSignInClick={() => {}} />{" "}
      <Box sx={{ maxWidth: "1200px", margin: "auto", padding: 2 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ my: 4, fontWeight: "bold", fontFamily: "manrope" }}
          color="#000"
        >
          {card.title}
        </Typography>
        {card.images.map((image, index) => (
          <Card key={index} sx={{ mb: 4 }}>
            <CardMedia
              component="img"
              height="400"
              image={image}
              alt={card.title}
            />
          </Card>
        ))}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {card.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {card.description}
            </Typography>
            <Typography variant="body2">{card.content}</Typography>
          </CardContent>
        </Card>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFB400",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#FFA000",
            },
          }}
          onClick={() => navigate("/readMore")}
        >
          Back to Home
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default CardInfo;
