import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";
import growth from "../assets/Images/growth.png";

// Styled components
const HeroContainer = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#0a0a0a",
  position: "relative",
  overflow: "hidden",
  padding: "50px 20px",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
});

const Particle = styled(Box)(({ size, top, left, delay }) => ({
  position: "absolute",
  width: size,
  height: size,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.05)",
  top,
  left,
  animation: `particleMove 12s ease-in-out infinite ${delay}s`,
  "@keyframes particleMove": {
    "0%,100%": { transform: "translateY(0) rotate(0deg)" },
    "50%": { transform: "translateY(-25px) rotate(180deg)" },
  },
  pointerEvents: "none",
}));

const Polygon = styled(Box)(({ size, top, left, delay }) => ({
  position: "absolute",
  width: 0,
  height: 0,
  borderLeft: `${size / 2}px solid transparent`,
  borderRight: `${size / 2}px solid transparent`,
  borderBottom: `${size}px solid rgba(255,255,255,0.08)`,
  top,
  left,
  animation: `polygonRotate 15s linear infinite ${delay}s`,
  "@keyframes polygonRotate": {
    "0%": { transform: "rotate(0deg) translateY(0px)" },
    "50%": { transform: "rotate(180deg) translateY(-20px)" },
    "100%": { transform: "rotate(360deg) translateY(0px)" },
  },
  pointerEvents: "none",
}));

const GlassBox = styled(Box)({
  backdropFilter: "blur(12px)",
  background: "rgba(255, 255, 255, 0.05)",
  borderRadius: "20px",
  padding: "30px",
  minHeight: "220px",
  zIndex: 2,
});

const GlassButton = styled(Button)({
  fontWeight: 600,
  textTransform: "none",
  padding: "14px 28px",
  fontSize: "16px",
  marginRight: "16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#00ffff",
    boxShadow: "0 0 15px #00ffff, 0 0 30px #00ffff",
    transform: "scale(1.05)",
  },
});

const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
  "& img": {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "16px",
    boxShadow: "0 20px 50px rgba(0,255,255,0.2)",
  },
});

const HeroSection = () => {
  const fullText = " Digital Solutions to Elevate Your Business";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const typingSpeed = deleting ? 50 : 100;
    let timeout;

    if (!deleting && index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      }, typingSpeed);
    } else if (index === fullText.length && !deleting) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (index === 0 && deleting) {
      setDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, fullText]);

  return (
    <HeroContainer>
      {/* Particles */}
      <Particle size="4px" top="10%" left="20%" delay={0} />
      <Particle size="3px" top="70%" left="60%" delay={2} />
      <Particle size="5px" top="40%" left="50%" delay={4} />

      {/* Polygons */}
      <Polygon size={60} top="15%" left="25%" delay={0} />
      <Polygon size={40} top="60%" left="70%" delay={3} />
      <Polygon size={50} top="35%" left="40%" delay={5} />

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <GlassBox maxWidth={800}>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
            >
              {displayText}
            </Typography>

            <Typography sx={{ my: 3, fontSize: "1.1rem", color: "#aaa" }}>
              We craft cutting-edge digital strategies that push your business into the future.
            </Typography>

            <Box>
              <GlassButton component={Link} to="/contact">
                Get a Free Consultation
              </GlassButton>
              <GlassButton component={Link} to="/portfolio" sx={{ mt: { xs: 2, md: 0 } }}>
                See Our Work
              </GlassButton>
            </Box>
          </GlassBox>
        </Grid>

        <Grid item xs={12} md={6}>
          <ImageBox>
            <img src={growth} alt="Analytics dashboard" />
          </ImageBox>
        </Grid>
      </Grid>
    </HeroContainer>
  );
};

export default HeroSection;
