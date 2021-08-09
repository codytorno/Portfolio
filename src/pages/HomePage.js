import React, { useState } from "react";
import Sidebar from "../components/Navigation/Sidebar/Sidebar";
import Navbar from "../components/Navigation/TopNavBar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import AboutMeSection from "../components/AboutMe/AboutMeSection";
import Portfolio from "../Data";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(`Toggle set to ${isOpen}`);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Navbar toggle={toggleSidebar} />
      <HeroSection data={Portfolio} />
      <AboutMeSection data={Portfolio.aboutMe} />
      <Footer />
    </>
  );
};

export default HomePage;
