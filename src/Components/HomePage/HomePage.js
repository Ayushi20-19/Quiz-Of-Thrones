import React from "react";
import Navbar from "../Navbar/Navbar";
import FeatureCards from "./FeatureCards";
import HeroSection from "./HeroSection";
import Footer from "../Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <Footer />
    </div>
  );
};

export default HomePage;
