import React, { useState } from "react";
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


interface Sale {
  id: string;
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
    customerName: "Fajar Firmansyah",
    date: "12 May, 2024",
    property: "Grand Field",
    amount: "$2,980",
    type: "Apartment",
    status: "Completed",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "#1201291",
    customerName: "Aulia",
    date: "12 May, 2024",
    property: "Serenity Estates",
    amount: "$4,980",
    type: "House",
    status: "Completed",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: "#1201293",
    customerName: "Irwansyah",
    date: "12 May, 2024",
    property: "Harbor Heights",
    amount: "$4,980",
    type: "House",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];


const statusColors: Record<Sale["status"], "success" | "warning"> = {
  Completed: "success",
  Pending: "warning",
};

const TransactionTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

 
  const filteredData = salesData.filter((row) =>
    row.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <Box sx={{ padding: 4 }}>
   
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          List Sales Transaction
          <Typography variant="body2" color="text.secondary" component="span" ml={1}>
            {filteredData.length}
          </Typography>
        </Typography>
        <Box display="flex" gap={2}>
          <Button variant="contained" color="primary" onClick={handleDownloadPDF}>
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
              <TableRow key={row.id}>
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
