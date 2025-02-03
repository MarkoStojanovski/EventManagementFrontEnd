import React, { useEffect } from "react";
import { Container, Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Cards from "./Cards";
import TopBar from "./TopBar";
import AboutUs from "./AboutUs";
import PhotosHomePage from "./PhotosHomePage";
import { useLocation } from "react-router-dom";

const Homepage = () => {

  const location = useLocation()

  const images = [
    "footballHP.jpg",
    "comedyHP.jpg",
    "basketballHP.jpg",
    "boxHP.jpg",
    "concertHP.jpg",
    "kickboxHP.jpg",
  ];

  useEffect(() => {
    if (location.state?.scrollToAboutUs) {
      const targetSection = document.getElementById("about-us");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <Box>
      <TopBar />
      <Container
        maxWidth="lg"
        sx={{
          mt: 12,
          mb: 15,
        }}
      >
        <Header />
        <Cards />
        <PhotosHomePage images={images} />
        <AboutUs />
      </Container>
      <Footer />
    </Box>
  );
};

export default Homepage;
