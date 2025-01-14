import React, { useCallback, useEffect, useState } from "react";
import {
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
import "./ClickDetail.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useNavigate, useParams } from "react-router-dom";
import AddNewRooms from "components/AddNewRooms/AddNewRooms";
import EditRoom from "components/EditRoom/EditRoom";
import axios from "axios";
import { RoomFormData } from "components/RoomFormModal";

interface RoomType {
  _id: any;
  propertyName: string;
  bedRoom: number;
  bathroom: number;
  imgs: string[];
  isRented: boolean;
  price: number;
  description: string;
  guestsNumber: number;
  hasWifi: boolean;
}

// Example room data
const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfLkwLrf4rpvCZHc5--29eqYv86fo9ggrgw&s";

const ClickDetail: React.FC = () => {
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [room, setRoom] = useState([{ id: 1 }]);
  const [editinRoom, setEditingRoom] = useState();

  // uzgartiretkan roomni aydisini saqlen stateda
  // edit qiletkanda aidini set kilasiz va openDialogni true kib quyasiz
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [formData, setFormData] = useState<RoomFormData>({
    bathroom: 0,
    description: "",
    bedroom: 0,
    hasWifi: false,
    hotelId: "",
    price: 0,
    propertyName: "",
  });
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectId, setSelectId] = useState();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const fetchRoom = async () => {
    try {
      const { data } = await axios.get(`/room/get/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });

      setRooms(data);
    } catch (error) {
      console.error(`Error with: ${error}`);
    }
  };

  const textToShare = "Check out this amazing place on Everest Plaza!";

  const handleBookClick = (item: any) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const onClick = () => {
    navigate("/ConfirmPage");

    setBookingConfirmed(true);
    setOpenDialog(false);
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleShare = () => {
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(textToShare)}`;
    window.open(telegramShareUrl, "_blank");
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleCommentDelete = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const handleDelete = async (id: any) => {
    try {
      const { data } = await axios.delete(`/room/${id}`);
      fetchRoom();
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (id: any, items: any) => {
    console.log(id, items);

    // setFormData(items); // Update the form data with the selected item
    // setSelectId(id); // Set the selected ID
    // setIsOpen(true); // Open the form or modal for editing
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.put(`/room/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRoom();
  }, []);

  return (
    <div style={{ backgroundColor: "#F0FBFF" }}>
      <Header />
      <Navbar />

      <div style={{ maxWidth: "1360px", margin: "auto", padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            alignItems: "center",
          }}
        >
          <Typography style={{ paddingLeft: "40px" }}>
            <h1 style={{ fontFamily: "Manrope", fontSize: "47px" }}>
              Everest Plaza
            </h1>
          </Typography>

          <div style={{ display: "flex", gap: "10px" }}>
            <AddNewRooms refetch={fetchRoom} />
            <EditRoom
              refetch={fetchRoom}
              formData={formData}
              open={isOpen}
              handleClose={handleClose}
              id={selectId}
            />
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

        <div style={{ marginBottom: "1rem", display: "flex", gap: "20px" }}>
          <img
            className="hover-effect"
            style={{ borderRadius: "8px" }}
            width={800}
            height={673}
            src={reseption1}
          />
          <div>
            <img
              className="hover-effect"
              style={{ borderRadius: "8px", maxWidth: "1000px" }}
              src={weting}
            />
            <img
              className="hover-effect"
              style={{ borderRadius: "8px" }}
              src={weiting}
            />
          </div>
        </div>

        <Stack direction="row" spacing={4} marginBottom={4}>
          {rooms.map((item, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 430,
                backgroundColor: "#f5f5f5",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                },
              }}
            >
              <div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    paper: {
                      style: {
                        maxHeight: 48 * 4.5,
                        width: "20ch",
                      },
                    },
                  }}
                >
                  <MenuItem onClick={() => handleDelete(item._id)}>
                    O'chirish
                  </MenuItem>

                </Menu>
              </div>
              <CardMedia
                component="img"
                height="300"
                image={imageUrl}
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
                  {item.propertyName}
                </Typography>
                <Typography
                  style={{ color: "#6F6F6F" }}
                  variant="body2"
                  color="text.secondary"
                ></Typography>
                <Typography
                  style={{ color: "#6F6F6F" }}
                  variant="body2"
                  color="text.secondary"
                  mt={2}
                >
                  <strong>Xususiyatlari:</strong> {item.description}
                </Typography>
                <Typography
                  style={{ color: "#6F6F6F" }}
                  variant="body2"
                  color="text.secondary"
                  mt={2}
                >
                  <strong>Narx:</strong> {item.price}
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
                  Hozir band qiling
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Band qilish "{selectedItem?.title}"</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Chindan ham buni bron qilishni xohlaysizmi? "{selectedItem?.title}
              "?
            </Typography>
            <Typography
              style={{ fontFamily: "Manrope" }}
              variant="body2"
              mt={2}
            >
              <strong>Izoh:</strong> {selectedItem?.description}
            </Typography>
            <Typography
              style={{ fontFamily: "Manrope" }}
              variant="body2"
              mt={2}
            >
              <strong>Xusisiyatlar:</strong> {selectedItem?.facilities}
            </Typography>
            <Typography
              style={{ fontFamily: "Manrope" }}
              variant="body2"
              mt={2}
            >
              <strong>Narx:</strong> {selectedItem?.price}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Bekor qilish
            </Button>
            <Button onClick={onClick} color="secondary">
              Buyurtmani tasdiqlash
            </Button>
          </DialogActions>
        </Dialog>

        <div
          style={{ display: "flex", justifyContent: "center", padding: "30px" }}
        >
          <div>
            <h1
              style={{
                textAlign: "center",
                paddingBottom: "1rem",
                fontFamily: "Manrope",
              }}
            >
              Biz Haqimizda
            </h1>
            <p
              style={{
                textAlign: "center",
                maxWidth: "1000px",
                fontFamily: "Manrope",
                fontSize: "18px",
              }}
            >
              Bizning mehmonxonamiz sizga eng yuqori darajadagi qulayliklarni va
              xizmatlarni taqdim etishga intiladi. Har bir xonamiz zamonaviy
              uslubda bezatilgan bo‘lib, mehmonlarimizning dam olish va ish
              jarayonida maksimal darajada qulaylik va farovonlikni ta'minlaydi.
              Mehmonxona ajoyib joylashuvi, do'stona xodimlari va yuqori sifatli
              xizmatlari bilan farq qiladi. Bizning maqsadimiz — sizning dam
              olishingizni unutilmas qilish, shuningdek, har bir mehmonni o‘zini
              xushnud va xotirjam his qilishi uchun barcha imkoniyatlarni
              yaratish.
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

        <section id="services-section">
          {/* <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 4,
              fontWeight: "bold",
              paddingTop: "60px",
              fontFamily: "Manrope",
              paddingBottom: "20px",
            }}
          >
            Cheksiz Hizmatlar
          </Typography> */}
        </section>

        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          rows={4}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginBottom: "10px",
            marginTop: "1.5rem",
          }}
        />

        <button
          onClick={handleCommentSubmit}
          style={{
            backgroundColor: "#1BA98F",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sharh qo'shish
        </button>

        <div style={{ marginTop: "20px" }}>
          <h3>Sharhlar:</h3>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              position: "relative",
            }}
          >
            {comments.map((comment, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#f1f1f1",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              >
                {comment}
                <button
                  onClick={() => handleCommentDelete(index)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "10px",
                    position: "absolute",
                    left: "93%",
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
