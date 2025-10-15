import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Hero from "../components/Hero";
import { portfolioProjects } from "../utils/data/portfolioData";

const Portfolio = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="Our Portfolio"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Portfolio", path: "/portfolio" },
        ]}
      />

      {/* Portfolio Grid */}
      <Box
        id="portfolioGrid"
        sx={{
          py: 10,
          px: { xs: 2, md: 8, lg: 15 },
          background: "#f5f5f5",
        }}
      >
        <Grid container spacing={6}>
          {portfolioProjects.map((project, i) => (
            <Grid item xs={12} sm={6} md={6} key={i} maxWidth={550}>
              <Box sx={{ textAlign: "center" }}>
                {/* Project Card */}
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    height: 350,
                    cursor: "pointer",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                    },
                    "&:hover .overlay": {
                      opacity: 1,
                      transform: "translateY(0%)",
                    },
                  }}
                >
                  {/* Project Image */}
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />

                  {/* Hover Overlay */}
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: 3,
                      opacity: 0,
                      transform: "translateY(20%)",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    {project.liveLink && (
                      <Button
                        variant="contained"
                        color="secondary"
                        href={project.liveLink}
                        target="_blank"
                      >
                        View Project
                      </Button>
                    )}
                  </Box>
                </Box>

                {/* Permanent Project Title */}
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    color: "#771a1a",
                    letterSpacing: 0.5,
                    borderBottom: "2px solid #771a1a",
                    display: "inline-block",
                    mt: 2,
                  }}
                >
                  {project.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Portfolio;
