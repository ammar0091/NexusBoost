import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";
import growth from "../assets/Images/growth.png";

// Styled components
const HeroContainer = styled(Box)({
  minHeight: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #040405, #050404)",
  overflow: "hidden",
  color: "#fff",
  padding: "40px 20px",
  position: "relative",
});

const GridLines = styled(Box)({
  position: "absolute",
  width: "200%",
  height: "200%",
  top: "-50%",
  left: "-50%",
  backgroundImage:
    "linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "50px 50px",
  animation: "gridMove 60s linear infinite",
  zIndex: 0,
  pointerEvents: "none",
  "@keyframes gridMove": {
    "0%": { transform: "translate(0,0)" },
    "100%": { transform: "translate(50px,50px)" },
  },
});

const ContentBox = styled(Box)({ maxWidth: "600px", zIndex: 2 });

const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
  "& img": {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "16px",
    boxShadow: "0 20px 50px #1d446eb0",
    transition: "transform 0.5s",
    "&:hover": { transform: "translateY(-10px) scale(1.03)" },
  },
});

const ButtonStyled = styled(Button)({
  fontWeight: 600,
  textTransform: "none",
  padding: "14px 28px",
  fontSize: "16px",
  marginRight: "16px",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  border: "1px solid #771a1a",
  background: "rgba(0, 0, 0, 0.05)",
  color: "#771a1a",
  "&:hover": {
    color: "#fff",
    background: "rgba(0, 255, 255, 0)",
    transform: "scale(1.05)",
    boxShadow: "0 0 20px #771a1a",
  },
});

const HeroSection = () => {
  const fullText =
    "Transform Your Business with Expert Digital Marketing Solutions";
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
      <GridLines />
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <ContentBox>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.2,
                background: "linear-gradient(90deg, #692a2aff, #601a1aff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {displayText}
            </Typography>

            <Typography
              variant="body1"
              sx={{ my: 3, fontSize: "1.1rem", color: "#aaa", minHeight: "80px" }}
            >
              "We craft data-driven digital marketing strategies that deliver
              measurable results and sustainable growth for your business."
            </Typography>

            <Box>
              <ButtonStyled component={Link} to="/contact">
                Get a Free Consultation
              </ButtonStyled>
              <ButtonStyled
                component={Link}
                to="/portfolio"
                sx={{
                  mt: { xs: 2, md: 0 },
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  "&:hover": { color: "#771a1a", borderColor: "#771a1a" },
                }}
              >
                See Our Work
              </ButtonStyled>
            </Box>
          </ContentBox>
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
