// src/components/TestimonialCard.jsx

import React from "react";
import { Card, CardContent, Box, Typography, Avatar } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TestimonialCard = ({ text, name, role, img }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.05)", // frosted effect
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
        padding: 2,
        border: "1px solid #771a1a",
        color: "#ccc",
        height: "100%",
      }}
    >
      <CardContent>
        <FormatQuoteIcon sx={{ fontSize: 40, color: "#771a1a", mb: 2 }} />

        <Typography variant="body1" sx={{ fontStyle: "italic", mb: 3 }}>
          {text}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Avatar src={img} alt={name} sx={{ mr: 2 }} />

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#771a1a" }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              {role}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
