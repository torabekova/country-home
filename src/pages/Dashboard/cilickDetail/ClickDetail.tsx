import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Header from "pages/Home/Header";
import Footer from "components/Footer/Footer";
import Navbar from "components/navbar/Navbar";
import reseption1 from "./img/reseption1.jpg";
import weting from "./img/weting center.jpg";
import weiting from "./img/weiting holl.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import "./ClickDetail.css"

// Example room data
const images = [
  {
    id: 1,
    title: "Single Room",
    description: "A beautiful mountain retreat for a relaxing vacation.",
    facilities: "Free WiFi, Parking, Pool",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfLkwLrf4rpvCZHc5--29eqYv86fo9ggrgw&s",
  },
  {
    id: 2,
    title: "Twin Room",
    description: "A luxurious villa by the beach for an unforgettable stay.",
    facilities: "Free WiFi, Parking, Poo, Gym, Elevator, Balcony",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1aZQ8nh9P9qGzauogHpTtZVNi1WIZ9BBnQ&s",
  },
  {
    id: 3,
    title: "Double Room",
    description: "A modern apartment in the heart of the city.",
    facilities: "Free WiFi, Parking, Pool, Gym, Elevator, Balcony",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCH8ufTsMaeP8CtE4UY1LeOrxdKTYBQl2RQ&s",
  },
];

const ClickDetail: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [liked, setLiked] = useState(false); // Like state
  const [likeCount, setLikeCount] = useState(0); // Like count
  const [bookingConfirmed, setBookingConfirmed] = useState(false); // Booking status

  const textToShare = "Check out this amazing place on Everest Plaza!"; // Text for sharing

  // Handle "Book Now" button click
  const handleBookClick = (item: any) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  // Close booking dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  // Confirm booking
  const handleConfirmBooking = () => {
    console.log(`You have successfully booked the ${selectedItem.title}!`);
    setBookingConfirmed(true); // Mark booking as confirmed
    setOpenDialog(false);
  };

  // Handle like button click
  const handleLike = () => {
    setLiked(!liked); // Toggle like status
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1)); // Adjust like count
  };

  // Share button click
  const handleShare = () => {
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(textToShare)}`;
    window.open(telegramShareUrl, "_blank"); // Open Telegram share dialog
  };

  const [comments, setComments] = useState<string[]>([]); // Comments list
  const [newComment, setNewComment] = useState<string>(''); // New comment

  // Submit comment
  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]); // Add new comment to list
      setNewComment(''); // Clear input
    }
  };

  const handleCommentDelete = (index: number) => {
    // Delete comment from list
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div style={{ backgroundColor: "#F0FBFF" }}>
      <Header />
      <Navbar />

      <div style={{ maxWidth: "1360px", margin: "auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom:"1.5rem" }}>
          <Typography style={{paddingLeft:"40px", }}>
            <h1 style={{fontFamily:"Manrope", fontSize:"47px"}}>Everest Plaza</h1>
          </Typography>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <IconButton onClick={handleLike} color="primary">
                {liked ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <Typography variant="body1">{likeCount} </Typography>
            </div>

            <IconButton onClick={handleShare} color="primary">
              <ShareIcon />
            </IconButton>
          </div>
        </div>

        <div style={{ marginBottom: "1rem", display: "flex", gap: "20px", }}>
          <img
            className="hover-effect"
            style={{ borderRadius: "8px" }}
            width={800}
            height={673}
            src={reseption1}
          />
          <div>
            <img className="hover-effect" style={{ borderRadius: "8px", maxWidth:'1000px',   }} src={weting} />
            <img className="hover-effect" style={{ borderRadius: "8px" }} src={weiting} />
          </div>
        </div>

        <Stack direction="row" spacing={4} marginBottom={4}>
          {images.slice(0, 3).map((item) => (
            <Card
              sx={{
                maxWidth: 430,
                backgroundColor: "#f5f5f5",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                },
              }}
              key={item.id}
            >
              <CardMedia
                component="img"
                height="300"
                image={item.imageUrl}
                alt={item.title}
                className="hover-effect"
                sx={{
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              />
              <CardContent>
                <Typography
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                  variant="h6"
                  component="div"
                  color="#000000"
                >
                  {item.title}
                </Typography>
                <Typography
                  style={{ color: "#6F6F6F" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.description}
                </Typography>
                <Typography
                  style={{ color: "#6F6F6F" }}
                  variant="body2"
                  color="text.secondary"
                  mt={2}
                >
                  <strong>Facilities:</strong> {item.facilities}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    marginTop: 2,
                    backgroundColor: "#1BA98F",
                    "&:hover": {
                      backgroundColor: "#17A674",
                    },
                  }}
                  onClick={() => handleBookClick(item)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Book "{selectedItem?.title}"</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Are you sure you want to book the "{selectedItem?.title}"?
            </Typography>
            <Typography
              style={{ fontFamily: "Manrope" }}
              variant="body2"
              mt={2}
            >
              <strong>Description:</strong> {selectedItem?.description}
            </Typography>
            <Typography
              style={{ fontFamily: "Manrope" }}
              variant="body2"
              mt={2}
            >
              <strong>Facilities:</strong> {selectedItem?.facilities}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmBooking} color="secondary">
              Confirm Booking
            </Button>
          </DialogActions>
        </Dialog>

        {bookingConfirmed && (
          <Typography variant="h6" color="success.main" mt={2}>
            Your booking for {selectedItem?.title} has been confirmed!
          </Typography>
        )}

        <div
          style={{ display: "flex", justifyContent: "center", padding: "30px" }}
        >
          <div>
             <h1 style={{textAlign:'center', paddingBottom:"1rem", fontFamily:"Manrope"}}>About we</h1>
          <p style={{ textAlign: "center", maxWidth: "1000px", fontFamily:"Manrope", fontSize:"18px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quas tenetur enim, porro id vel blanditiis, doloribus sunt laborum,
            facilis soluta. Quas facilis aspernatur culpa minima commodi esse
            numquam quis laboriosam placeat cumque consequuntur provident quidem
            iure fuga magnam, cum nisi ducimus repudiandae, illum officia omnis
            fugiat eius magni.
          </p>
          </div>
         
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <video
            className="hover-effect"
            style={{ borderRadius: "30px" }}
            width="80%"
            controls
          >
            <source
              src="https://cdn.pixabay.com/video/2015/10/16/1057-142621433_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Comment Section */}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          rows={4}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            marginBottom: '10px',
            marginTop:"1.5rem"
          }}
        />

        <button
          onClick={handleCommentSubmit}
          style={{
            backgroundColor: '#1BA98F',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Submit Comment
        </button>

        <div style={{ marginTop: '20px' }}>
          <h3>User Comments:</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', position:"relative" }}>
            {comments.map((comment, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: '#f1f1f1',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px',
                }}
              >
                {comment}
                <button
                  onClick={() => handleCommentDelete(index)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                   position:"absolute",
                   left:"93%"
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClickDetail;
