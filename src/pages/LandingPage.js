import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Features from '../components/Features';
import OurWork from '../components/OurWork';
import Donate from '../components/Donate';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      
      <div className="relative z-10 pt-16">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Features />
        <OurWork />
        <Donate />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

