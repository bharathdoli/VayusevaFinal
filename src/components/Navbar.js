import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-orange-500/20' : 'bg-black/80 backdrop-blur-sm border-b border-orange-500/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white hover:text-orange-500 transition-colors duration-300">
              Vayuseva
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-400 hover:text-orange-500 text-sm font-medium transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" className="text-gray-400 hover:text-orange-500 text-sm font-medium transition-colors duration-300 relative group">
              How We Help
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#features" className="text-gray-400 hover:text-orange-500 text-sm font-medium transition-colors duration-300 relative group">
              Why Support Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#our-work" className="text-gray-400 hover:text-orange-500 text-sm font-medium transition-colors duration-300 relative group">
              Our Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-400 hover:text-orange-500 text-sm font-medium transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 border-2 border-orange-500 text-orange-500 text-sm font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get Involved
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-orange-500 focus:outline-none transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-orange-500/20">
            <a href="#about" className="block px-3 py-2 text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 rounded transition-colors">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 rounded transition-colors">How We Help</a>
            <a href="#features" className="block px-3 py-2 text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 rounded transition-colors">Why Support Us</a>
            <a href="#our-work" className="block px-3 py-2 text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 rounded transition-colors">Our Work</a>
            <a href="#contact" className="block px-3 py-2 text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 rounded transition-colors">Contact</a>
            <a href="#contact" className="block px-3 py-2 text-orange-500 border-2 border-orange-500 rounded-lg mt-2 text-center hover:bg-orange-500 hover:text-white transition-colors">Get Involved</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
