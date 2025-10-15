import React from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopButton from "./components/ScrollTopButton";
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRouter />
      <ScrollTopButton />
      <Footer />
    </>
  );
}

export default App;
