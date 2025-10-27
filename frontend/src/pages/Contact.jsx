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

// Icons
import {
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";

// --------------------
// Styles
// --------------------
const styles = {
  section: {
    backgroundColor: "#f9fafb",
    py: 10,
  },
  heading: {
    fontWeight: "bold",
    mb: 1,
    color: "#0A1D56",
  },
  subText: {
    color: "text.secondary",
    fontSize: "1.1rem",
  },
  formContainer: {
    p: 4,
    borderRadius: 3,
    height: "100%",
    maxWidth: 600,
  },
  infoContainer: {
    p: 4,
    borderRadius: 3,
    height: "100%",
  },
  primaryText: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  button: {
    mt: 3,
    backgroundColor: "#8B1C1C",
    py: 1.5,
    fontWeight: "bold",
    fontSize: "1rem",
    "&:hover": { backgroundColor: "#6e1515" },
  },
  icon: { color: "#8B1C1C" },
};

// --------------------
// Contact Component
// --------------------
const Contact = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />

      <Box sx={styles.section}>
        <Container maxWidth="lg">
          {/* ---------- Heading ---------- */}
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" sx={styles.heading}>
              Get In <span style={{ color: "#8B1C1C" }}>Touch</span>
            </Typography>

            <Typography variant="body1" sx={styles.subText}>
              Ready to accelerate your growth?{" "}
              <span style={{ borderBottom: "3px solid #8B1C1C" }}>
                Contact us today
              </span>{" "}
              for a free consultation.
            </Typography>
          </Box>

          {/* ---------- Main Grid ---------- */}
          <Grid container spacing={4}>
            {/* ---- Contact Form ---- */}
            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={styles.formContainer}>
                <form>
                  <TextField fullWidth label="Name" margin="normal" />
                  <TextField fullWidth label="Email" margin="normal" />
                  <TextField
                    fullWidth
                    label="Message"
                    margin="normal"
                    multiline
                    rows={5}
                  />
                  <Button variant="contained" fullWidth sx={styles.button}>
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Grid>

            {/* ---- Contact Info ---- */}
            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={styles.infoContainer}>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: "#0A1D56" }}>
                  Contact Information
                </Typography>

                <List>
                  <ListItem sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <LocationOnIcon sx={styles.icon} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Our Office"
                      secondary="123 Marketing Ave, Suite 500, San Francisco, CA 94107"
                      primaryTypographyProps={styles.primaryText}
                    />
                  </ListItem>

                  <ListItem sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <EmailIcon sx={styles.icon} />
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
                      primaryTypographyProps={styles.primaryText}
                    />
                  </ListItem>

                  <ListItem sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <PhoneIcon sx={styles.icon} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Call Us"
                      secondary={
                        <>
                          +1 (555) 123-4567
                          <br />
                          Mon–Fri, 9am–6pm PST
                        </>
                      }
                      primaryTypographyProps={styles.primaryText}
                    />
                  </ListItem>
                </List>

                {/* ---- Social Media ---- */}
                <Box mt={4}>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                    Follow Us
                  </Typography>
                  <Box>
                    {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, YouTubeIcon].map(
                      (Icon, index) => (
                        <IconButton key={index} color="inherit">
                          <Icon sx={styles.icon} />
                        </IconButton>
                      )
                    )}
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
