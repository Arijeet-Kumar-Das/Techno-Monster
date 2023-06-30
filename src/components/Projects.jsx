import { Box, Button, Typography } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Restaurant from "../animations/restaurant.json";
import Hotel from "../animations/hotel.json";
import Library from "../animations/library.json";
const Projects = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" marginTop="50px">
        <Typography variant="h4">Our Projects</Typography>
        <Box
          sx={{
            height: "5px",
            width: "100px",
            backgroundColor: "black",
            margin: "auto",
          }}
        ></Box>
        <Box
          display="flex"
          justifyContent="space-evenly"
          marginTop="50px"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Lottie
            animationData={Restaurant}
            style={{ maxWidth: 400, maxHeight: 400 }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", sm: "start" },
              flexDirection: "column",
              width: { xs: "100%", sm: "50%" },
              gap: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", sm: "start" } }}
            >
              Restaurant Management System
            </Typography>
            <Typography
              variant="p"
              sx={{ textAlign: { xs: "center", sm: "start" } }}
            >
              The Restaurant Point of Sale (POS) Management System provides a
              significant advantage over existing systems by introducing two
              modules and a real-time notification system. This advanced system
              empowers waitstaff with a dedicated module for order placement and
              transmission, ensuring seamless communication with the kitchen.
              Additionally, administrators or counter staff benefit from
              real-time notifications, allowing them to promptly process orders
              and maintain efficient operations.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "0px",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "rgb(0,0,0,0.5)",
                  color: "white",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              View More
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-evenly"
          marginTop="100px"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Lottie
            animationData={Hotel}
            style={{
              maxWidth: 400,
              maxHeight: 400,
              order: "1",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", sm: "start" },
              flexDirection: "column",
              width: { xs: "100%", sm: "50%" },
              gap: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", sm: "start" } }}
            >
              Hotel Management System
            </Typography>
            <Typography
              variant="p"
              sx={{ textAlign: { xs: "center", sm: "start" } }}
            >
              Introducing our Hotel Management System: Streamline operations,
              enhance guest experiences, and boost efficiency with our
              comprehensive solution. From reservations and check-ins to
              housekeeping and analytics, our system offers seamless
              integration, real-time updates, and intuitive interfaces to
              optimize every aspect of your hotel's operations.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "0px",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "rgb(0,0,0,0.5)",
                  color: "white",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              View More
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-evenly"
          marginTop="100px"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Lottie
            animationData={Library}
            style={{ maxWidth: 400, maxHeight: 400 }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", sm: "start" },
              flexDirection: "column",
              width: { xs: "100%", sm: "50%" },
              gap: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", sm: "start" } }}
            >
              Library Management System
            </Typography>
            <Typography
              variant="p"
              sx={{ textAlign: { xs: "center", sm: "start" } }}
            >
              Introducing our Library Management System: Simplify library
              operations, improve patron services, and streamline resource
              management with our robust solution. From cataloging and
              circulation to online reservations and analytics, our system
              empowers librarians to efficiently manage collections, track
              borrowing, and enhance user experiences. Experience the future of
              library management with us.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "0px",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "rgb(0,0,0,0.5)",
                  color: "white",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              View More
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
