import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "./Cards/TestimonialCard";
import { testimonials } from "../utils/data/testimonialsData";

const TestimonialsCarousel = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Desktop carousel settings
  const desktopSettings = {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: true,
    pagination: { clickable: true },
    style: { paddingBottom: "40px" },
  };

  return (
    <Box sx={{ py: 8, bgcolor: "#060608" }}>
      {isDesktop ? (
        <Swiper {...desktopSettings}>
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <TestimonialCard {...t} futuristic />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Mobile: simple responsive grid
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            px: 2,
          }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} futuristic />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TestimonialsCarousel;
