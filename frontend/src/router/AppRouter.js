import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services/Index";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
// import Dashboard from "../pages/Admin/dashboard";
import Testimonials from "../pages/Testimonial";
import Blog from "../pages/Blog";
import Seo from "../pages/Services/Search-engine-optimisation";
import WebDevelopment from "../pages/Services/Web-development";
import WebDesign from "../pages/Services/Web-Design";


function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* Service pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/web-design" element={<WebDesign />} />
      </Routes>
  );
}

export default AppRouter;
