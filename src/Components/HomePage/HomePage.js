import React from "react";
import Navbar from "../Navbar/Navbar";
import FeatureCards from "./FeatureCards";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureCards />
    </div>
  );
};

export default HomePage;
