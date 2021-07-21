import React, { useState } from "react";
import Sidebar from "../components/Navigation/Sidebar/Sidebar";
import Navbar from "../components/Navigation/TopNavBar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import {
  aboutInfo,
  discoverInfo,
  servicesInfo,
} from "../components/InfoSection/Data";
import ProjectSection from "../components/ProjectSection/ProjectSection";

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
      <HeroSection />
      <InfoSection data={aboutInfo} />
      <InfoSection data={discoverInfo} />
      <InfoSection data={servicesInfo} />
      <ProjectSection />
    </>
  );
};

export default HomePage;
