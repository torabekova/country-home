import React from "react";
import { jsPDF } from "jspdf";
import { Button } from "@mui/material";

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  paymentMethod: string;
  specialRequests?: string;
}

const PDFCheck: React.FC<{ formData: BookingFormData }> = ({
  formData,
}) => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    
    doc.setFontSize(18);
    doc.text("Zamin Town", 105, 20);

    
    doc.setFontSize(12);
    doc.text("Mijoz ismi: " + formData.fullName, 10, 40);
    doc.text("Bron ID: #12345", 10, 50);
    doc.text("Xona: 503", 10, 60);
    doc.text("Kelish sanasi: " + formData.checkInDate, 10, 70);
    doc.text("Ketish sanasi: " + formData.checkOutDate, 10, 80);
    doc.text("Mehmonlar soni: " + formData.guests, 10, 90);
    doc.text("To'lov usuli: " + formData.paymentMethod, 10, 100);
    doc.text("Maxsus talablar: " + (formData.specialRequests || "Yo‘q"), 10, 110);

    
    doc.line(10, 120, 200, 120);

    
    doc.setFontSize(10);
    doc.text("Chekni reseptionda ko‘rsating", 105, 130);

    
    doc.save("bron_cheki.pdf");
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownloadPDF}
      style={{ backgroundColor: "#1BA98F", marginTop: "20px" }}
    >
      Checkni yuklab olish
    </Button>
  );
};

export default PDFCheck;
