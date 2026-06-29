import React from "react";
import HeroSection from "../components/HeroSection";
import Marquee from "../components/Marquee";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
import InsideGymSection from "../components/InsideGymSection";
import ReviewSection from "../components/ReviewSection";
import JoinSection from "../components/JoinSection";
import CertifiedTrainer from "../components/CertifiedTrainer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <CertifiedTrainer />
      <WhyUsSection />
      <InsideGymSection />
      <ReviewSection />
      <JoinSection />
    </>
  );
};

export default Home;
