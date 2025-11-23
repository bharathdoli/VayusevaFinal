import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative bg-primary overflow-hidden">
            {/* Background Pattern/Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900 opacity-90"></div>

            {/* Optional: Add a real background image here with object-cover */}
            {/* <img src="/path/to/hero-image.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20" /> */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="text-center md:text-left md:w-2/3">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Serving Humanity with <span className="text-secondary">Compassion</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                        Vayuseva is dedicated to bridging the gap between abundance and need.
                        Join us in our mission to provide food, clothing, and essential support
                        to communities in need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="/donate"
                            className="bg-accent hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                        >
                            Donate Now
                        </Link>
                        <Link
                            to="/volunteer"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 text-center"
                        >
                            Join as Volunteer
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#00B4D8" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.3C60.4,45.7,49.9,54.9,38.3,62.3C26.7,69.7,14,75.3,0.6,74.3C-12.8,73.3,-24.3,65.7,-34.7,57.3C-45.1,48.9,-54.4,39.7,-62.6,28.8C-70.8,17.9,-77.9,5.3,-76.8,-6.7C-75.7,-18.7,-66.4,-30.1,-56.3,-39.8C-46.2,-49.5,-35.3,-57.5,-23.8,-66.3C-12.3,-75.1,0.3,-75.6,12.9,-75.6" transform="translate(100 100) scale(1.1)" opacity="0.1" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
