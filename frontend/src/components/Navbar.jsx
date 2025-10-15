import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Clients", path: "/clients" },
    { label: "Contact", path: "/contact" },
  ];

  const socialIcons = ["facebook-f", "twitter", "instagram"];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box sx={{ width: 260, bgcolor: "#000", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700, pl: 3, py: 3, fontFamily: "Poppins, sans-serif" }}>
          <span style={{ color: "#771a1a" }}>NEXUS</span>BOOST
        </Typography>
        <Divider sx={{ bgcolor: "#222" }} />

        <List sx={{ mt: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.label}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              selected={location.pathname === item.path}
              sx={{
                px: 3,
                py: 1.2,
                textTransform: "uppercase",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                color: location.pathname === item.path ? "#fff" : "#aaa",
                borderBottom: "1px solid #1E1E1E",
                "&.Mui-selected": { bgcolor: "#111", color: "#771a1a" },
                "&:hover": { bgcolor: "#1A1A1A", color: "#fff" },
              }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: "0.8rem" }} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box sx={{ py: 2, textAlign: "center", borderTop: "1px solid #1E1E1E" }}>
        {socialIcons.map((icon) => (
          <IconButton key={icon} href="#" sx={{ color: "#fff", mx: 1 }}>
            <i className={`fab fa-${icon}`}></i>
          </IconButton>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#000", color: "#fff", boxShadow: "none", borderBottom: "1px solid #1E1E1E" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
          {/* Logo */}
          <Typography variant="h6" component={Link} to="/" sx={{ fontWeight: 700, fontFamily: "Poppins, sans-serif", color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", letterSpacing: "1px" }}>
            <span style={{ color: "#771a1a" }}>NEXUS</span>BOOST
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                disableRipple
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  borderRadius: 0,
                  padding: "6px 0",
                  borderBottom: location.pathname === item.path ? "2px solid #771a1a" : "2px solid transparent",
                  "&:hover": { color: "#771a1a", bgcolor: "transparent", borderBottom: "2px solid #771a1a" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Desktop Social Icons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
            <Divider orientation="vertical" flexItem sx={{ bgcolor: "#444", height: 30 }} />
            {socialIcons.map((icon) => (
              <IconButton key={icon} href="#" sx={{ color: "#fff", fontSize: "15px" }}>
                <i className={`fab fa-${icon}`}></i>
              </IconButton>
            ))}
          </Box>

          {/* Mobile Menu */}
          <IconButton edge="end" onClick={handleDrawerToggle} sx={{ display: { md: "none" }, color: "#fff" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Toolbar />
      <Drawer open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={{ display: { md: "none" } }}>
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
