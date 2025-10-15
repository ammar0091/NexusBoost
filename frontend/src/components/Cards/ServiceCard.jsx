import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled Card with hover effect
const CustomCard = styled(Card)({
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  padding: "20px",
  height: "100%",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#8d4646ff",
    color: "#fff",
    transform: "translateY(-5px) scale(1.02)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
  },
  "&:hover .card-text": {
    color: "#f0f0f0ff",
  },
});

const ServiceCard = ({ icon, title, desc }) => (
  <CustomCard>
    <CardContent>
      <Box sx={{ mb: 2 }}>{icon}</Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#111" }}>
        {title}
      </Typography>
      <Typography className="card-text" variant="body2" sx={{ mb: 2 }}>
        {desc}
      </Typography>
    </CardContent>
  </CustomCard>
);

export default ServiceCard;
