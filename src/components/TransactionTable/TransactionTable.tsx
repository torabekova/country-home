import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Avatar,
  IconButton,
  Chip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";


interface Sale {
  id: string;
  userId: string
  customerName: string;
  date: string;
  property: string;
  amount: string;
  type: string;
  status: "Completed" | "Pending";
  avatar: string;
}



const salesData: Sale[] = [
  {
    id: "#1201290",
    userId: localStorage.getItem('user_id') || '',
    customerName: "Fajar Firmansyah",
    date: "12 May, 2024",
    property: "Grand Field",
    amount: "$2,980",
    type: "Apartment",
    status: "Completed",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
];
 
async function fetchOrderedData() {
  try {
    const existOrders = await axios.get(`/order${salesData[0].userId}`);
    console.log('heyy') 
  } catch (error) {
    console.log(error)
  }
}


const statusColors: Record<Sale["status"], "success" | "warning"> = {
  Completed: "success",
  Pending: "warning",
};

const TransactionTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

 
  const filteredData = salesData.filter((row) =>
    row.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );


  useEffect(()=> {
    fetchOrderedData()
  })

  const handleDownloadPDF = async () => {
    const element = document.getElementById("sales-table");
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190; 
    const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 10, position + 10, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 10, position + 10, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("sales_transactions.pdf");
  };

  return (
    <Box sx={{ padding: 4 , border:"1px, solid", borderColor:"#DFE1E7", borderRadius:"40px", margin:"20px", backgroundColor:"white"}}>
   
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          List Sales Transaction
          <Typography variant="body2" color="text.secondary" component="span" ml={1}>
            {filteredData.length}
          </Typography>
        </Typography>
        <Box display="flex" gap={2}>
          <Button variant="contained" color="primary" onClick={handleDownloadPDF} style={{backgroundColor:"#1BA98F"}}>
            Download
          </Button>
          <TextField
            size="small"
            placeholder="Search by Customer Name"
            variant="outlined"
            sx={{ width: 300 }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>
      </Box>

     
      <TableContainer id="sales-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Property</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}   sx={{
                "&:hover": {
                  backgroundColor: "#DFE1E7", // Hover paytida background oq rangga o'zgaradi
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.1)", // Hover paytida biroz soyani qo'shish uchun
                  transition: "all 0.3s ease", // Smooth hover effekti
                },
              }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar src={row.avatar} alt={row.customerName} />
                    <Typography>{row.customerName}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.property}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusColors[row.status]}
                    variant="outlined"
                    size="small"
                    sx={{
                      cursor: "pointer", 
                      transition: "all 0.3s ease", 
                      "&:hover": {
                        backgroundColor: row.status === "Pending" ? "#FFC107" : "#4CAF50", 
                        color: "#ffffff",
                        transform: "scale(1.1)", 
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TransactionTable;
