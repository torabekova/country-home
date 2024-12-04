import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Header from "pages/Home/Header"; // Ensure these paths are correct

const cardData = [
  {
    id: 1,
    title: "Worldwide",
    images: [
      "https://media.rnztools.nz/rnz/image/upload/s--yRvBL08p--/c_scale,f_auto,q_auto,w_1050/v1643534558/4NKO483_image_crop_70564?_a=BACCd2AD", // Replace with actual image URLs
      "https://cdn.prod.website-files.com/6565e3883754fd9af40aeded/65689636bf685ac8b1cab436_Challenges%20of%20Internationalization-compressed.jpg"
    ],
    description: "Experience worldwide tours.",
    content: "Explore the wonders of the world with our worldwide tours. From ancient landmarks to modern marvels, we offer trips to a variety of destinations across the globe.",
  },
  {
    id: 2,
    title: "Adventures",
    images: [
      "https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2015/07/1-Hiker-3-CROP_Web.jpg", // Replace with actual image URLs
      "https://miro.medium.com/v2/resize:fit:900/1*kpSkLZgHa2CMkHRPLI49zQ.jpeg"
    ],
    description: "Embark on thrilling adventures.",
    content: "Join us for thrilling adventures that will take you to the most exciting places on Earth. Whether it's hiking, climbing, or diving, we have something for every adventurer.",
  },
  {
    id: 3,
    title: "Foods & Drinks",
    images: [
      "https://healthylife.lk/wp-content/uploads/2024/03/A-Guide-to-Traditional-Sri-Lankan-Foods-with-Nutritional-Benefits.jpg", // Replace with actual image URLs
      "https://ik.imagekit.io/cprvr2lhot/blog/tys-alcohol%20and%20spirits.jpg"
    ],
    description: "Taste exotic cuisines.",
    content: "Indulge in the rich and diverse cuisines from around the world. Our food and drink tours offer a culinary journey that will tantalize your taste buds and leave you craving for more.",
  },
  {
    id: 4,
    title: "Affordable Hotels",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPFOXKASg1f4bilklQ1JTpwCn0IJNqc_lKQ&s", // Replace with actual image URLs
      "https://images.suitcasemag.com/wp-content/uploads/2023/10/10204251/the-best-affordable-hotels-in-paris_652d1f3312e0d.jpeg"
    ],
    description: "Comfortable stays at the best price.",
    content: "Enjoy comfortable and affordable hotel stays at our various destinations. We ensure that you have the best accommodation experience without breaking the bank.",
  },
  {
    id: 5,
    title: "Affordable Price",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlG0oHZZXCV_hUhpjqPEPux-SU5t7EgtBrQw&s", // Replace with actual image URLs
      "https://media.istockphoto.com/id/1224627023/vector/auto-sales-thin-line-icons-editable-stroke.jpg?s=2048x2048&w=is&k=20&c=hJND-5Idog250-jI6MBlfZu9t6I5iHcxeYnhe1k9LEE="
    ],
    description: "Best deals for your trips.",
    content: "Get the best deals for your trips with our affordable pricing options. We offer competitive rates for all our tours and services, ensuring you get the best value for your money.",
  },
  {
    id: 6,
    title: "24/7 Services",
    images: [
      "data:image/jpeg;base64,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", // Replace with actual image URLs
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYowHSLAmMb083bXpAuc2KGfdFj6Ya2bO3w&s"
    ],
    description: "We are always here for you.",
    content: "Our 24/7 services ensure that you always have the support you need. Whether it's booking a tour or getting assistance during your trip, we are here to help you anytime.",
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
    <Box sx={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" ,}}>
      <Header handleScroll={() => {}} handleSignInClick={() => {}} /> {/* Adjust props as needed */}
      <Box sx={{ maxWidth: "1200px", margin: "auto", padding: 2 }}>
        <Typography variant="h3" align="center" sx={{ my: 4, fontWeight: "bold",  }}>
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
            <Typography variant="body2">
              {card.content}
            </Typography>
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
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default CardInfo;
