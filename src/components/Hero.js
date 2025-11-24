import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background Pattern - Hexagon Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 100x100 hexagon pattern */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern 
              id="hexagonPattern" 
              x="0" 
              y="0" 
              width="100" 
              height="86.6" 
              patternUnits="userSpaceOnUse"
            >
              <polygon 
                points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.2)" 
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagonPattern)" />
        </svg>
      </div>

      {/* Animated Orange Glow Background - All Corners + Center */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left corner */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Top-right corner */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-pulse translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/18 rounded-full blur-3xl animate-pulse -translate-x-1/2 translate-y-1/2" style={{ animationDelay: '1s' }}></div>
        
        {/* Bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl animate-pulse translate-x-1/2 translate-y-1/2" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.75s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          
          {/* Left Side - Text Content */}
          <div className={`space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-white tracking-tight">
              Eternal giving,{' '}
              <span className="text-orange-500">Infinite hope</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
              We are dedicated to making a positive impact through service, compassion, and innovation. Join us in building a stronger, more connected community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all duration-300 text-center transform hover:scale-105 shadow-lg shadow-orange-500/50"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 text-center transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side - Logo/Visual */}
          <div className={`relative flex items-center justify-center lg:justify-end transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full max-w-md">
              {/* Animated Orange Glow */}
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Logo Container */}
              <div className="relative rounded-3xl">
                <img 
                  src={logo} 
                  alt="Vayuseva Logo" 
                  className="w-full h-auto object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
