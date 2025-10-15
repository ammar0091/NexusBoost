import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function BlogCard({ image, category, date, title, description }) {
    return (
        <Card
            sx={{
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "left",
                height: "100%",
                maxWidth: 350,
            }}
        >
            <CardMedia
                component="img"
                height="180"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography
                    variant="body2"
                    sx={{ color: "#b22d2d", fontWeight: 500, mb: 1 }}
                >
                    {category} • {date}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 1 }}
                >
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
                    {description}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ color: "#b22d2d", fontWeight: 600, cursor: "pointer" }}
                >
                    Read More →
                </Typography>
            </CardContent>
        </Card>
    );
}
