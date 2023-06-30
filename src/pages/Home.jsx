import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Services from "../components/Services";
import Projects from "../components/Projects";
import EmailIcon from "@mui/icons-material/Email";

import { Link } from "react-scroll";
const Home = () => {
  return (
    <div>
      <Box
        height="600px"
        sx={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/home-background-image.jpg"
          })`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 3,
            p: { xs: "70px 20px", sm: "70px 50px" },
          }}
        >
          <Typography variant="h2" sx={{ color: "white" }}>
            Techno Monster
          </Typography>
          <Typography variant="p" sx={{ color: "white" }}>
            Empowering Your Digital Transformation Journey with Technological
            Excellence
          </Typography>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <IconButton
              sx={{
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.5)",
                },
              }}
            >
              <ExpandMoreIcon
                sx={{
                  color: "black",
                  "&:hover": {
                    color: "white",
                  },
                }}
              />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <Box>
        <Services />
        <Projects />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "150px",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "black",
            height: "150px",
            width: "95%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: 2, sm: "20px" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <EmailIcon sx={{ color: "white", height: "70px", width: "70px" }} />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                Sign up for newsletter
              </Typography>
              <Typography
                variant="p"
                sx={{ color: "#4B5280", textAlign: "start" }}
              >
                Subscribe to the newsletter for all the latest updates
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{ marginTop: { xs: "20px", sm: "0px" } }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter email address"
              sx={{
                backgroundColor: "white",
                width: { xs: "200px", sm: "300px", md: "500px" },
                height: "50px",
                margin: "auto",
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7303c0",
                borderRadius: "0px",
                color: "white",
                height: "50px",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
