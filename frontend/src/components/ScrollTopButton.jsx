import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        aria-label="scroll back to top"
        color="secondary"
        size="small"
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          zIndex: 1000,
          bgcolor: "#af3535",
          "&:hover": { bgcolor: "#8B1C1C" },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollTopButton;
