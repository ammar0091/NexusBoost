import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTop}
        color="secondary"
        size="small"
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          zIndex: 1000,
          bgcolor: "#af3535ff",
          "&:hover": { bgcolor: "#8B1C1C" },
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollTopButton;
