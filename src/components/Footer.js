import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Vayuseva</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Serving humanity with compassion. We are dedicated to providing essential items to those in need and building a stronger, more supportive community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-secondary text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary text-sm transition-colors">Our Services</Link></li>
              <li><Link to="/volunteer" className="text-gray-300 hover:text-secondary text-sm transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-secondary text-sm transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Work</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Food Donation</li>
              <li className="text-gray-300 text-sm">Clothing Distribution</li>
              <li className="text-gray-300 text-sm">Emergency Relief</li>
              <li className="text-gray-300 text-sm">Community Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start text-gray-300 text-sm">
                <span className="mr-2">📍</span>
                <span>123 Charity Lane, Compassion City, India</span>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="mr-2">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="mr-2">✉️</span>
                <span>contact@vayuseva.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Vayuseva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
