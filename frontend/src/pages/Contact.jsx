import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import Hero from "../components/Hero";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  return (
  <div>
    <Hero
      title={"Contact Us"}
       breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}/>
      <Box sx={{ backgroundColor: "#f9fafb", py: 10 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 1, color: "#0A1D56" }}
          >
            Get In <span style={{ color: "#8B1C1C" }}>Touch</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: "1.1rem" }}
          >
            Ready to accelerate your growth?{" "}
            <span style={{ borderBottom: "3px solid #8B1C1C" }}>
              Contact us today
            </span>{" "}
            for a free consultation.
          </Typography>
        </Box>

        {/* Contact Form + Info */}
        <Grid container spacing={4}>
          {/* Form Section */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={1}
              sx={{ p: 4, borderRadius: 3, height: "100%", maxWidth: 600 }}
            >
              <form>
                <TextField
                  fullWidth
                  label="Name"
                  placeholder="Your Name"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  placeholder="Your Email"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Message"
                  placeholder="Your Message"
                  margin="normal"
                  multiline
                  rows={5}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    backgroundColor: "#8B1C1C",
                    py: 1.5,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    "&:hover": { backgroundColor: "#6e1515" },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={1}
              sx={{ p: 4, borderRadius: 3, height: "100%", }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ mb: 3, color: "#0A1D56" }}
              >
                Contact Information
              </Typography>

              <List>
                {/* Office */}
                <ListItem sx={{ alignItems: "flex-start", mb: 2 }}>
                  <ListItemIcon>
                    <LocationOnIcon sx={{ color: "#8B1C1C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Our Office"
                    secondary="123 Marketing Ave, Suite 500
                    San Francisco, CA 94107"
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  />
                </ListItem>

                {/* Email */}
                <ListItem sx={{ alignItems: "flex-start", mb: 2 }}>
                  <ListItemIcon>
                    <EmailIcon sx={{ color: "#8B1C1C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email Us"
                    secondary={
                      <>
                        hello@nexusboost.com
                        <br />
                        support@nexusboost.com
                      </>
                    }
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  />
                </ListItem>

                {/* Phone */}
                <ListItem sx={{ alignItems: "flex-start", mb: 2 }}>
                  <ListItemIcon>
                    <PhoneIcon sx={{ color: "#8B1C1C" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Call Us"
                    secondary={
                      <>
                        +1 (555) 123-4567
                        <br />
                        Mon-Fri, 9am–6pm PST
                      </>
                    }
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  />
                </ListItem>
              </List>

              {/* Social Icons */}
              <Box mt={4}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ mb: 1 }}
                >
                  Follow Us
                </Typography>
                <Box>
                  <IconButton color="inherit">
                    <FacebookIcon sx={{ color: "#8B1C1C" }} />
                  </IconButton>
                  <IconButton color="inherit">
                    <TwitterIcon sx={{ color: "#8B1C1C" }} />
                  </IconButton>
                  <IconButton color="inherit">
                    <InstagramIcon sx={{ color: "#8B1C1C" }} />
                  </IconButton>
                  <IconButton color="inherit">
                    <LinkedInIcon sx={{ color: "#8B1C1C" }} />
                  </IconButton>
                  <IconButton color="inherit">
                    <YouTubeIcon sx={{ color: "#8B1C1C" }} />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </div>
  );
};

export default Contact;
