// src/pages/Services/index.jsx
import React from "react";
import { Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import ServiceCard from "../../components/Cards/ServiceCard";
import { servicesData } from "../../utils/data/serviceData";

const Services = () => {
  return (
    <Box>
      <Hero
        title="Our Services"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
        ]}
      />

      <Grid container spacing={4} justifyContent="center" py={5} px={2}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} maxWidth={400}>
            <Link
              to={`/services/${service.slug}`}
              style={{ textDecoration: "none" }}
            >
              <ServiceCard {...service} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
