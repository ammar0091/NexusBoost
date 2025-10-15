import React from "react";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import BG from "../assets/Images/BG.jpg";

const Hero = ({ title, breadcrumbs }) => {
  return (
    <Box
      sx={{
        height: { xs: 200, md: 250 },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 3, md: 6 },
        backgroundColor: "#121212", //  dark
        color: "#fff",
      }}
    >
      {/* Subtle background pattern or image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05, // subtle texture
          zIndex: 0,
        }}
      />

      {/* Glassy content box */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          borderRadius: 2,
          px: { xs: 3, md: 6 },
          py: { xs: 3, md: 5 },
          maxWidth: 800,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            mb: 1,
            color: "#fff",
          }}
        >
          {title}
        </Typography>

        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs
            separator={"/"}
            aria-label="breadcrumb"
            sx={{
              "& a": {
                color: "#aaa",
                textDecoration: "none",
                transition: "0.3s",
                "&:hover": { color: "#fff" },
              },
              "& .MuiBreadcrumbs-separator": {
                color: "#666",
              },
            }}
          >
            {breadcrumbs.map((crumb, index) => (
              <RouterLink
                key={index}
                to={crumb.path}
                style={{
                  textDecoration:
                    index === breadcrumbs.length - 1 ? "none" : "underline",
                  color: "#aaa",
                }}
              >
                {crumb.label}
              </RouterLink>
            ))}
          </Breadcrumbs>
        )}
      </Box>
    </Box>
  );
};

export default Hero;
