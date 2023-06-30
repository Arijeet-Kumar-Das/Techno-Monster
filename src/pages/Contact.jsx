import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import contactImg from "../assets/contact.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const Contact = () => {
  return (
    <div>
      <Typography variant="h4" sx={{ margin: "auto", paddingTop: "20px" }}>
        Contact Us
      </Typography>
      <Box
        sx={{
          height: "5px",
          width: "100px",
          backgroundColor: "black",
          margin: "auto",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          marginTop: { xs: "50px", sm: "80px" },
        }}
      >
        <Box
          sx={{
            height: { xs: "250px", sm: "300px" },
            width: { xs: "350px", sm: "450px" },
          }}
        >
          <img src={contactImg} alt="" width="100%" height="100%" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 2 },
            gap: 2,
            width: { xs: "90%", sm: "350px", md: "500px" },
          }}
        >
          <TextField variant="outlined" label="Full Name" fullWidth></TextField>
          <TextField variant="outlined" label="Email" fullWidth></TextField>
          <TextField variant="outlined" label="Message" fullWidth></TextField>
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
            fullWidth
          >
            SEND MESSAGE
          </Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Typography variant="p">Follow us on:</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
