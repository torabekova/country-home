import React, { useState } from "react";
import { Box, Typography, ButtonGroup, Button } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

type Metrics = {
  [key: string]: number;
};

const metrics: Metrics = {
  totalSales: 76,
  viewers: 54,
  futureFunds: 89,
  agents: 67,
};

const SalesIndicator: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<keyof Metrics>("totalSales");

  const handleMetricChange = (metric: keyof Metrics) => {
    setSelectedMetric(metric);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor:'#0000000D', borderRadius:"40px"}}>
      <Typography variant="h6">Sotish ko'rsatgichi</Typography>
      <ButtonGroup variant="contained" sx={{ mt: 2, mb: 2 , }}>
        {["Total Sales", "Viewers", "Future Funds", "Agents"].map((metric) => (
          <Button
          style={{backgroundColor:"#69CEBB", color:"white", borderColor:"#69CEBB" ,}}
            key={metric}
            onClick={() => handleMetricChange(metric.toLowerCase().replace(" ", "") as keyof Metrics)}
            disabled={selectedMetric === metric.toLowerCase().replace(" ", "")}
          >
            {metric}
          </Button>
        ))}
      </ButtonGroup>
      <Box sx={{ width: 100, height: 100, margin: "0 auto" }}>
        <CircularProgressbar value={metrics[selectedMetric]} text={`${metrics[selectedMetric]}%`} />
        {/* <Typography variant="h4" sx={{ textAlign: "center", marginTop: 2 }}>{selectedMetric}</Typography> */}
      </Box>
    </Box>
  );
};

export default SalesIndicator;
