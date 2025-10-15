import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Nexus Boost blue
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    h1: { fontWeight: 700, fontSize: "2.5rem" },
    h2: { fontWeight: 600, fontSize: "2rem" },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
  },
});

export default theme;
