import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
];

const servicesLinks = [
  { name: "Search Engine Optimization", path: "/services/seo" },
  { name: "Social Media Marketing", path: "/services/social-media" },
  { name: "Web-development", path: "/services/web-development" },
  { name: "PPC Advertising", path: "/services/ppc" },
  { name: "Web Design", path: "/services/web-design" },
  { name: "Branding", path: "/services/branding" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms" },
  { name: "Cookie Policy", path: "/cookies" },
];

const socialIcons = [Facebook, Twitter, LinkedIn];

function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyle = {
    display: "block",
    color: "#aaa",
    mb: 1,
    fontSize: "0.85rem",
    textDecoration: "none",
    transition: "0.3s",
    "&:hover": { color: "#771a1a" },
  };

  const socialButtonStyle = {
    color: "#aaa",
    p: 1,
    border: "1px solid #222",
    borderRadius: "50%",
    transition: "0.3s",
    "&:hover": {
      color: "#771a1a",
      borderColor: "#771a1a",
      transform: "scale(1.1)",
      boxShadow: "0 0 12px rgba(0,255,255,0.3)",
    },
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Top Section */}
      <Box sx={{ bgcolor: "#1e1e1e", color: "#ccc", pt: 12, pb: 6, position: "relative" }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={8}>
            {/* Logo + Description */}
            <Grid item xs={12} md={4} maxWidth={450}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
                <span style={{ color: "#771a1a" }}>Nexus</span>Boost
              </Typography>
              <Typography variant="body2" sx={{ color: "#aaa", lineHeight: 1.8, mb: 3 }}>
                Accelerating your growth and visibility through innovative digital marketing solutions.
              </Typography>
            </Grid>

            {/* Links Sections */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={4} justifyContent={{ xs: "flex-start", md: "flex-end" }}>
                {[{ title: "Quick Links", links: quickLinks }, { title: "Services", links: servicesLinks }].map((section, idx) => (
                  <Grid
                    key={idx}
                    item xs={12} sm={4}
                    sx={{ px: 3, py: { xs: 4, sm: 0 }, borderTop: { xs: "1px solid #414040", sm: "none" }, borderRight: { sm: "1px solid #414040" }, mb: { xs: 2, sm: 0 } }}
                  >
                    <Typography variant="subtitle1" sx={{ mb: 1, color: "#fff" }}>{section.title}</Typography>
                    {section.links.map((link) => (
                      <Link key={link.name} component={RouterLink} to={link.path} sx={linkStyle}>
                        {link.name}
                      </Link>
                    ))}
                  </Grid>
                ))}

                {/* Connect */}
                <Grid item xs={12} sm={4} sx={{ px: 3, py: { xs: 4, sm: 0 }, borderTop: { xs: "1px solid #414040", sm: "none" }, mb: { xs: 2, sm: 0 } }}>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: "#fff" }}>Connect</Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Link component="a" href="mailto:contact@nexusboost.com" sx={linkStyle}>contact@nexusboost.com</Link>
                    <Link component="a" href="tel:+15551234567" sx={linkStyle}>+1 (555) 123-4567</Link>
                    <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                      {socialIcons.map((Icon, idx) => (
                        <IconButton key={idx} component="a" href="#" target="_blank" sx={socialButtonStyle}>
                          <Icon />
                        </IconButton>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Divider */}
      <Divider sx={{ borderColor: "#111" }} />

      {/* Bottom Bar */}
      <Box sx={{ bgcolor: "#0e0e0e", py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "#777" }}>© {currentYear} NexusBoost. All rights reserved.</Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              {legalLinks.map((link) => (
                <Link key={link.name} component={RouterLink} to={link.path} sx={{ color: "#777", fontSize: "0.85rem", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
