import React from "react";
import {
  Container, Typography, Grid, Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LoopIcon from "@mui/icons-material/Loop";
import VerifiedIcon from "@mui/icons-material/Verified";
import Hero from "../components/Hero";
import Stat from "../components/Stat";



const About = () => {
  return (
    <Box sx={{ backgroundColor: "#fafafa", textAlign: "justify" }}>
      <Hero
        title={"About Us"}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
        ]} />
      {/* ABOUT US SECTION */}
      
      <Container sx={{ py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Text */}
          <Grid item xs={12} md={6} maxWidth={600}>
            <Typography
              fontSize={18}
              sx={{ color: "#8B1C1C", fontWeight: "bold", mb: 2 }}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", mb: 3, lineHeight: 1.3 }}
            >
              Welcome to{" "}
              <span style={{ color: "#0A1D56" }}>Nexus Boost</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: 2, fontSize: "1.05rem" }}
            >
              With years of experience working across different industries,
              including both private and government sectors, we have developed
              a deep insight into digital trends and effective branding
              strategies that help companies establish a strong online presence.
              Our clients trust us because of our dedication, transparent
              approach and proven track record.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: 2, fontSize: "1.05rem" }}
            >
              We offer a wide range of services including Social Media
              Marketing, Content Marketing, Influencer Marketing, Website Design
              & Management, Event Management and Branding. Alongside our
              marketing services, we also provide expert solutions in software
              development, mobile applications and graphics designing to support
              complete digital transformation.
            </Typography>


          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
              alt="office"
              sx={{
                width: "100%",
                maxWidth: 400,
                borderRadius: 4,
                position: "relative",
                zIndex: 1,
                boxShadow: "0px 8px 25px rgba(0,0,0,0.25)",
              }}
            />
          </Grid>
        </Grid>
      </Container>


      {/* C */}
      <Stat />

      {/* What we do  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          background: "#121212",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {/* Section title */}
        <Typography
          variant="h3"
          fontWeight="500"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "rgba(211, 222, 222, 1)",
            mb: 4,
            textAlign: "center",
          }}
        >
          What We Do in <span style={{ color: "#771a1a" }}>Nexus</span>Boost
        </Typography>

        {/* Content Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
            maxWidth: 1200,
            zIndex: 2,
            position: "relative",
          }}
        >
          {/* Left Text */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { letter: "C", color: "rgba(12, 116, 116, 1)", text: "Creative Content" },
              { letter: "S", color: "rgba(130, 130, 12, 1)", text: "Strategy Focused" },
              { letter: "E", color: "rgba(127, 11, 127, 1)", text: "Engaging Experiences" },
            ].map((item, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "16%",
                    background: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {item.letter}
                </Box>
                <Typography variant="h6" color="#fff" fontWeight="600" fontFamily="Poppins, sans-serif">
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Right Icons / Highlights */}

          <Box sx={{ color: "#fff", lineHeight: 1.8, textAlign: "justify" }}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Each and every organization or brand needs solid content to meet its communication goals. Anyway, what does content composing mean? Be it on print or in the advanced online space, content is the voice of the organization. Content must form your intended audience's advantage by conveying significant, connecting, and engaging messages - as your site content, blog, or social media content.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              NexusBoost is a firm that manages content composing administrations. We'll work with you keeping your necessities, your objectives, and your main concern at the top of our priority list. Our content is conveyed by a network of professional writers and industry leading professional experts who accomplish the most rigid quality checks and editing. This permits you to put that time in doing the main thing - zeroing in on your business.
            </Typography>
            <Typography variant="body1">
              In the event that you have a thought that needs to be heard, great content encourages you to get heard. Be it composing content for sites, articles, blogs, or social media, it is important that it engages your audience both technically and in creativity. We endeavor to make such vivid encounters for our customers' audience.
            </Typography>
          </Box>
        </Box>

        {/* Spider Web Background Effect */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              width: "150%",
              height: "150%",
              borderRadius: "50%",
              border: "1px solid rgba(0,255,255,0.08)",
              transformOrigin: "center",
              animation: "spinWeb 60s linear infinite",
            },
            "&::after": {
              borderColor: "rgba(255,0,255,0.08)",
              animationDuration: "90s",
            },
          }}
        />

        <style>
          {`
      @keyframes spinWeb {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}
        </style>
      </Box>


      {/* MISSION & VISION */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                px: { md: 5, xs: 2 },
                py: 3,
                borderRadius: 4,
                height: "100%",
                boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#8d4646ff", // red hover
                  color: "#fff",              // text white on hover
                  transform: "translateY(-5px) scale(1.02)", //  lift effect
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardContent>
                <LoopIcon
                  sx={{
                    fontSize: { xs: 30, sm: 35, md: 40 }, // responsive icon size
                    color: "#8B1C1C",
                    mb: { xs: 0.5, sm: 1 }, // responsive margin bottom
                  }}
                />
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    fontSize: { xs: 22, sm: 26, md: 30 }, // responsive heading size
                    mb: { xs: 0.5, sm: 1 },
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" }, // responsive text
                    maxWidth: { xs: "100%", sm: 270, md: 350, lg: 430 }, // responsive width

                  }}
                >
                  Our mission is to provide impactful and results-driven digital
                  marketing & IT solutions that empower businesses to achieve
                  growth objectives and stand out in the online marketplace. By
                  leveraging data, creativity, and strategy, we deliver
                  exceptional value for our clients.
                </Typography>
              </CardContent>

            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                px: { md: 5, xs: 2 },
                py: 3,
                borderRadius: 4,
                height: "100%",
                boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#8d4646ff", // red hover
                  color: "#fff",              // text white on hover
                  transform: "translateY(-5px) scale(1.02)", //  lift effect
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardContent>
                <VerifiedIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: "#8B1C1C", mb: { xs: 0.5, sm: 1 }, }} />
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    fontSize: { xs: 22, sm: 26, md: 30 }, // responsive heading size
                    mb: { xs: 0.5, sm: 1 },
                  }}
                >
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" }, // responsive text
                  maxWidth: { xs: "100%", sm: 270, md: 350, lg: 430 }, // responsive width

                }}>
                  Our vision is to help businesses thrive in the digital age
                  with innovative marketing and IT solutions. Through
                  collaboration and customer-centric strategies, we aim to
                  maximize online presence and deliver sustainable growth.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* WHY CHOOSE US */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 5, textAlign: "center" }}>
          Why Choose Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <List>
              {[
                "Convenience – Single point of contact for a wide range of services.",
                "Competent to integrate multiple services for stand-alone or multi-location.",
                "Back-office talent across various departments of 30+ team members.",
                "Passionate about each assignment – Old & New.",
                "Young organization, willing to adapt to changes & improvise.",
                "Experience in managing 50+ valuable customers.",
              ].map((point, i) => (
                <ListItem key={i} sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#8B1C1C", fontSize: 28 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={point}
                    primaryTypographyProps={{
                      fontSize: "1.rem",
                      color: "text.primary",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
