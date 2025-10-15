import React from "react";
import { Container, Typography, Grid, Box, Button, Card } from "@mui/material";
import HeroSection from "../components/HomeHero";
import BlogCard from "../components/Cards/BlogCard";
import ServiceCard from "../components/Cards/ServiceCard";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import AdIcon from "@mui/icons-material/AdUnits";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import BrushIcon from "@mui/icons-material/Brush";
import Stat from "../components/Stat";

//services 
const services = [
  {
    icon: <SearchIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Search Engine Optimization (SEO)",
    desc: "Improve your website's visibility in search results and drive organic traffic with our comprehensive SEO strategies.",
    progress: 92,
  },
  {
    icon: <ShareIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Social Media Marketing",
    desc: "Build brand awareness and engage your audience through strategic social media campaigns and community management.",
  },
  {
    icon: <AdIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "PPC Advertising",
    desc: "Drive immediate results with targeted pay-per-click campaigns on Google, Facebook, and other advertising platforms.",
  },
  {
    icon: <EditIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Content Marketing",
    desc: "Attract and retain customers with valuable, relevant content that establishes your authority and builds trust.",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Email Marketing",
    desc: "Nurture leads and build customer loyalty with personalized email campaigns that convert.",
  },
  {
    icon: <BrushIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Branding & Logo Design",
    desc: "Create a strong, memorable brand identity that resonates with your target audience.",
  },
];

const articles = [
  {
    id: 1,
    category: "SEO",
    date: "June 15, 2023",
    title: "5 SEO Trends Dominating 2023",
    description:
      "Discover the most important SEO trends this year and how to adapt your strategy for better rankings.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&q=80&w=800",
  },
  {
    id: 2,
    category: "Social Media",
    date: "May 28, 2023",
    title: "Mastering Instagram Reels for Business",
    description:
      "Learn how to leverage Instagram Reels to increase engagement and grow your audience effectively.",
    image:
      "https://images.unsplash.com/photo-1637744943740-78f7f08d68f2?auto=format&q=80&w=800",
  },
  {
    id: 3,
    category: "Strategy",
    date: "May 10, 2023",
    title: "Building a Cohesive Digital Marketing Strategy",
    description:
      "How to align all your digital marketing efforts for maximum impact and consistent messaging.",
    image:
      "https://images.unsplash.com/photo-1640374022045-183e2b65c1a9?auto=format&q=80&w=800",
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />

      {/* Benefits Section */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Why Choose NexusBoost?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 6, maxWidth: "600px", mx: "auto" }}
        >
          Our team combines data-driven strategies with creative execution to deliver exceptional results.
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: "center", borderRadius: 4, boxShadow: 4, transition: "0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: 6 } }}>
              <Typography variant="h5" fontWeight="bold">🚀 Proven Results</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Scaled businesses across industries with measurable growth.</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: "center", borderRadius: 4, boxShadow: 4, transition: "0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: 6 } }}>
              <Typography variant="h5" fontWeight="bold">💡 Creative Strategies</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Unique campaigns designed for your brand voice and goals.</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: "center", borderRadius: 4, boxShadow: 4, transition: "0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: 6 } }}>
              <Typography variant="h5" fontWeight="bold">🤝 Trusted Partner</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>We value long-term collaboration and transparent communication.</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* Stats Section */}
      <Stat />
      {/* Services Section */}
      <Box sx={{ py: 8, background: "#f8f9fa" }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 1, color: "#111" }}>
          Our <span style={{ color: "#771a1a" }}>Services</span>
        </Typography>

        <Typography variant="subtitle1" align="center" sx={{ mb: 6, color: "#555" }}>
          Comprehensive digital marketing <span style={{ color: "#771a1a" }}>solutions</span> to grow your business online
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} maxWidth={350}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={5}>
          <Button
            component={Link}
            to="/services"
            variant="contained"
            sx={{
              backgroundColor: "#a94848ff",
              color: "#fff",
              px: 4,
              py: 1.2,
              fontWeight: 600,
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#5a1111",
                transform: "scale(1.05)",
              },
            }}
          >
            View All Services
          </Button>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 10, background: "#060808ff", position: "relative", textAlign: "center", color: "#fff" }}>
        {/* Grid overlay for tech feel */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            backgroundSize: "40px 40px",
            zIndex: 0,
          }}
        />

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, zIndex: 2, position: "relative" }}>
          Client <span style={{ color: "#771a1a" }}>Testimonials</span>
        </Typography>

        <Typography variant="h6" sx={{ mb: 6, zIndex: 2, position: "relative", color: "#aaa" }}>
          What our clients <span style={{ color: "#771a1a" }}>say</span> about working with us
        </Typography>

        <Box sx={{ zIndex: 2, position: "relative" }}>
          <TestimonialsCarousel />
        </Box>
      </Box>

      {/* Marketing Insights Section */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Marketing <span style={{ color: "#b22d2d" }}>Insights</span>
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 6, color: "text.secondary" }}>
          Latest articles on <span style={{ color: "#b22d2d" }}>digital marketing</span> trends and strategies
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <BlogCard {...article} />
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={5}>
          <Button
            component={Link}
            to="/blog"
            variant="contained"
            sx={{
              backgroundColor: "#a94848ff",
              color: "#fff",
              px: 4,
              py: 1.2,
              fontWeight: 600,
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#5a1111",
                transform: "scale(1.05)",
              },
            }}
          >
            View All Articles
          </Button>
        </Box>
      </Box>

      {/* Connect Section */}
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    minHeight: "55vh",
    px: { xs: 2, md: 6 },
    py: { xs: 6, md: 8 },
    background: "#0a0a0a",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Animated soft wave background */}
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
        background:
          "radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.08), transparent 60%)",
        animation: "wave1 25s linear infinite alternate",
      },
      "&::after": {
        background:
          "radial-gradient(circle at 70% 70%, rgba(255, 0, 255, 0.08), transparent 60%)",
        animation: "wave2 35s linear infinite alternate",
      },
    }}
  />

  {/* Left abstract */}
  <Box
    sx={{
      flex: 1,
      position: "relative",
      display: { xs: "none", md: "block" },
      mr: 4,
      zIndex: 1,
    }}
  >
    <Box sx={{ width: 300, height: 300 }} />
  </Box>

  {/* Right content card */}
  <Box
    sx={{
      flex: 1,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(15px)",
      borderRadius: 3,
      px: { xs: 3, md: 6 },
      py: { xs: 6, md: 8 },
      boxShadow: "inset 0 0 20px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.6)",
      textAlign: "center",
      color: "#fff",
      position: "relative",
      zIndex: 2,
    }}
  >
    <Typography
      variant="h3"
      fontWeight="700"
      gutterBottom
      sx={{
        fontSize: { xs: "2rem", md: "2.5rem" },
        background: "rgba(255, 255, 255, 0.32)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Let’s Connect
    </Typography>
    <Typography
      variant="body1"
      sx={{ opacity: 0.85, mb: 5, fontSize: { xs: "1rem", md: "1.1rem" } }}
    >
      Ready to boost your business? Fill out the form and we’ll reach out shortly.
    </Typography>
    <Button
      component={Link}
      to="/contact"
      sx={{
        px: 6,
        py: 1.8,
        fontWeight: "bold",
        fontSize: { xs: "0.95rem", md: "1.05rem" },
        borderRadius: 3,
        color: "#fff",
        background: "#0d455b73",
        transition: "all 0.3s ease",
      }}
    >
      Contact Us
    </Button>
  </Box>

  {/* Animations */}
  <style>
    {`
      @keyframes wave1 {
        0% { transform: translate(-20%, -20%) scale(1); }
        50% { transform: translate(0%, 10%) scale(1.2); }
        100% { transform: translate(-20%, -20%) scale(1); }
      }

      @keyframes wave2 {
        0% { transform: translate(20%, 20%) scale(1); }
        50% { transform: translate(-10%, -10%) scale(1.15); }
        100% { transform: translate(20%, 20%) scale(1); }
      }
    `}
  </style>
</Box>

    </Box>
  );
};

export default Home;
