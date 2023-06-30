import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import WebIcon from "@mui/icons-material/Web";
import AppsIcon from "@mui/icons-material/Apps";
import DevicesIcon from "@mui/icons-material/Devices";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import DvrIcon from "@mui/icons-material/Dvr";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Services = () => {
  return (
    <div id="services">
      <Box display="flex" flexDirection="column" marginTop="50px">
        <Typography variant="h4">Our Services</Typography>
        <Box
          sx={{
            height: "5px",
            width: "100px",
            backgroundColor: "black",
            margin: "auto",
          }}
        ></Box>
        <Box>
          <Grid container spacing={3} sx={{ marginTop: "20px", p: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  height: "250px",
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/assets/web-dev.jpg"
                  })`,

                  backgroundSize: "cover",
                }}
              >
                <Box
                  height="100%"
                  sx={{
                    backgroundColor: "rgb(0,0,0,0.7)",
                  }}
                >
                  <Box display="flex" alignItems="center" p={2} gap={3}>
                    <IconButton>
                      <WebIcon
                        sx={{ color: "white", height: "50px", width: "50px" }}
                      />
                    </IconButton>
                    <Typography variant="h5" sx={{ color: "white" }}>
                      Web Development
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ color: "white" }}>
                      Our skilled team builds responsive, user-friendly websites
                      that leave a lasting impression and drive business growth.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  height: "250px",
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/assets/app-dev.jpg"
                  })`,

                  backgroundSize: "cover",
                }}
              >
                <Box
                  height="100%"
                  sx={{
                    backgroundColor: "rgb(0,0,0,0.7)",
                  }}
                >
                  <Box display="flex" alignItems="center" p={2} gap={3}>
                    <IconButton>
                      <AppsIcon
                        sx={{ color: "white", height: "50px", width: "50px" }}
                      />
                    </IconButton>
                    <Typography variant="h5" sx={{ color: "white" }}>
                      App Development
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ color: "white" }}>
                      Our skilled team builds responsive, user-friendly websites
                      that leave a lasting impression and drive business growth.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  height: "250px",
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/assets/uiux-des.jpg"
                  })`,

                  backgroundSize: "cover",
                }}
              >
                <Box
                  height="100%"
                  sx={{
                    backgroundColor: "rgb(0,0,0,0.7)",
                  }}
                >
                  <Box display="flex" alignItems="center" p={2} gap={3}>
                    <IconButton>
                      <DevicesIcon
                        sx={{ color: "white", height: "50px", width: "50px" }}
                      />
                    </IconButton>
                    <Typography variant="h5" sx={{ color: "white" }}>
                      UI/UX Design
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ color: "white" }}>
                      Our skilled team builds responsive, user-friendly websites
                      that leave a lasting impression and drive business growth.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  height: "250px",
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/assets/robotics.jpg"
                  })`,

                  backgroundSize: "cover",
                }}
              >
                <Box
                  height="100%"
                  sx={{
                    backgroundColor: "rgb(0,0,0,0.7)",
                  }}
                >
                  <Box display="flex" alignItems="center" p={2} gap={3}>
                    <IconButton>
                      <PrecisionManufacturingIcon
                        sx={{ color: "white", height: "50px", width: "50px" }}
                      />
                    </IconButton>
                    <Typography variant="h5" sx={{ color: "white" }}>
                      Robotics Solutions
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ color: "white" }}>
                      Harness the power of cutting-edge robotics technology to
                      automate processes, increase productivity, and optimize
                      efficiency in various industries.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  height: "250px",
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/assets/AI.jpg"
                  })`,

                  backgroundSize: "cover",
                }}
              >
                <Box
                  height="100%"
                  sx={{
                    backgroundColor: "rgb(0,0,0,0.7)",
                  }}
                >
                  <Box display="flex" alignItems="center" p={2} gap={3}>
                    <IconButton>
                      <DeveloperBoardIcon
                        sx={{ color: "white", height: "50px", width: "50px" }}
                      />
                    </IconButton>
                    <Typography variant="h5" sx={{ color: "white" }}>
                      Artificial Intelligence (AI)
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ color: "white" }}>
                      Leverage the capabilities of AI to unlock valuable
                      insights, automate tasks, and enhance decision-making
                      processes for improved business outcomes.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  height: "250px",
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/assets/ML.jpg"
                  })`,

                  backgroundSize: "cover",
                }}
              >
                <Box
                  height="100%"
                  sx={{
                    backgroundColor: "rgb(0,0,0,0.7)",
                  }}
                >
                  <Box display="flex" alignItems="center" p={2} gap={3}>
                    <IconButton>
                      <DvrIcon
                        sx={{ color: "white", height: "50px", width: "50px" }}
                      />
                    </IconButton>
                    <Typography variant="h5" sx={{ color: "white" }}>
                      Machine Learning
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ color: "white" }}>
                      Implement machine learning algorithms to enable systems
                      and applications to learn from data, make predictions, and
                      continuously improve performance.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
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
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Services;
