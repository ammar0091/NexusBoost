// src/data/servicesData.js
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import WebIcon from "@mui/icons-material/Web";
import BrushIcon from "@mui/icons-material/Brush";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CampaignIcon from "@mui/icons-material/Campaign";
import EmailIcon from "@mui/icons-material/Email";
import MovieIcon from "@mui/icons-material/Movie";
import InsightsIcon from "@mui/icons-material/Insights";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StrategyIcon from "@mui/icons-material/AutoGraph";

export const servicesData = [
  {
    slug: "web-development",
    icon: <WebIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Web Development",
    desc: "Custom websites and web applications built using modern frameworks for performance, scalability, and user experience.",
  },
  {
    slug: "web-design",
    icon: <BrushIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Web Design",
    desc: "Beautiful, intuitive, and user-centered designs that elevate your brand and improve customer engagement.",
  },
  {
    slug: "seo",
    icon: <SearchIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Search Engine Optimization (SEO)",
    desc: "Boost your online visibility and attract organic traffic with our strategic SEO techniques.",
    progress: 92,
  },
  {
    slug: "social-media-marketing",
    icon: <ShareIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Social Media Marketing",
    desc: "Grow your audience and strengthen brand awareness through engaging, data-driven social media campaigns.",
  },
  {
    slug: "ppc-advertising",
    icon: <CampaignIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "PPC Advertising",
    desc: "Maximize ROI with precision-targeted pay-per-click advertising campaigns across Google, Meta, and other platforms.",
  },
  {
      slug: "branding-logo-design",
      icon: <BrushIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
      title: "Branding & Logo Design",
      desc: "Create a powerful visual identity that reflects your values and connects with your audience through stunning design.",
    },
    {
      slug: "email-marketing",
      icon: <EmailIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
      title: "Email Marketing",
      desc: "Build customer loyalty and drive conversions with personalized, automated email campaigns that deliver results.",
    },
  {
    slug: "video-marketing",
    icon: <MovieIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Video Marketing",
    desc: "Engage your customers with high-quality video content that tells your story and boosts online visibility.",
  },
  {
    slug: "conversion-rate-optimization",
    icon: <TrendingUpIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Conversion Rate Optimization (CRO)",
    desc: "Increase your website's effectiveness by analyzing user behavior and optimizing elements to boost conversion rates.",
  },
  {
    slug: "marketing-strategy",
    icon: <StrategyIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Marketing Strategy",
    desc: "Develop a comprehensive marketing roadmap that aligns your goals, audience insights, and digital campaigns for success.",
  },
  {
    slug: "analytics-reporting",
    icon: <InsightsIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "Analytics & Reporting",
    desc: "Gain actionable insights through comprehensive analytics and performance reports to optimize your marketing strategy.",
  },
  {
    slug: "ecommerce-solutions",
    icon: <ShoppingCartIcon sx={{ fontSize: 36, color: "#771a1a" }} />,
    title: "E-Commerce Solutions",
    desc: "We create secure, fast, and scalable online stores optimized for conversions and customer retention.",
  },
];
