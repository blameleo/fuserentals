import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Cars from "../pages/Cars";
import Services from "../pages/Services";

const Landing = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Cars />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
