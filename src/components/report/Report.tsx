import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Chip,
  CircularProgress,
} from "@mui/material";
import {
  Home,
  People,
  TrendingUp,
  Savings,
  AttachMoney,
  MoreHoriz,
} from "@mui/icons-material";

const Report: React.FC = () => {
  return (
    <Box padding={3} bgcolor="#f9f9f9">
     
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={3}
      >
        <Typography variant="h4" fontWeight="bold">
          Property Records Dashboard
        </Typography>
        <Button variant="contained" color="primary">
          Get Pro
        </Button>
      </Box>

      <Grid container spacing={3}>
        {[
          { title: "Total Sales", value: "$12,450", icon: <AttachMoney /> },
          { title: "Viewers", value: "4,090", icon: <People /> },
          { title: "Future Funds", value: "$130,090", icon: <Savings /> },
          { title: "Agents", value: "2500", icon: <Home /> },
        ].map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar>{stat.icon}</Avatar>
                  <Box marginLeft={2}>
                    <Typography variant="body2">{stat.title}</Typography>
                    <Typography variant="h6" fontWeight="bold">
                      {stat.value}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

     
      <Grid container spacing={3} marginTop={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Financial Statistics
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Monthly
              </Typography>
           
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-end"
                height="150px"
                marginTop={2}
              >
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => (
                  <Box key={i} textAlign="center">
                    <Box
                      bgcolor="primary.main"
                      height={`${20 + i * 15}px`}
                      width="20px"
                      margin="auto"
                    />
                    <Typography variant="caption">{month}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Sales Indicator
              </Typography>
              <Box display="flex" justifyContent="center" marginTop={2}>
                <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={76}
                    size={80}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography variant="h6" component="div">
                      76%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

 
      <Box marginTop={3}>
        <Typography variant="h6" fontWeight="bold">
          Property
        </Typography>
        <Grid container spacing={3} marginTop={1}>
          {[...Array(4)].map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Box height="120px" bgcolor="#e0e0e0" marginBottom={1} />
                  <Typography variant="body1">Grand Field, MN</Typography>
                  <Typography variant="body2" color="textSecondary">
                    $1,200 / per month
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: "8px" }}
                  >
                    Detail
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Staff Section */}
      <Box marginTop={3}>
        <Typography variant="h6" fontWeight="bold">
          Staff
        </Typography>
        <Grid container spacing={3} marginTop={1}>
          {[
            { name: "Rina", status: "Online" },
            { name: "John", status: "Online" },
            { name: "Albert", status: "Offline" },
          ].map((staff, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <Avatar>{staff.name[0]}</Avatar>
                    <Box marginLeft={2}>
                      <Typography variant="body1">{staff.name}</Typography>
                      <Chip
                        label={staff.status}
                        color={staff.status === "Online" ? "success" : "default"}
                        size="small"
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Report;
