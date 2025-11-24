import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import qrImage from '../assets/vqr.jpg';
import { saveDonation } from '../utils/storage';

const DonatePage = () => {
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    email: '',
    phone: '',
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple fade-in on page load
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Save donation submission
    try {
      const result = await saveDonation(formData);
      if (result.success) {
        alert('Thank you for your donation! We will contact you soon.');
        setFormData({ category: '', description: '', email: '', phone: '' });
      } else {
        alert(`Error: ${result.error || 'There was an error submitting your donation. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting donation form:', error);
      alert('There was an error submitting your donation. Please check your connection and try again.');
    }
  };

  const categories = [
    'Food Items',
    'Clothing',
    'Medical Supplies',
    'Educational Materials',
    'Essential Resources',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              Make a <span className="text-orange-500">Donation</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Your contribution helps us make a difference in the lives of those in need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Item Donation Form */}
            <div className={`bg-black border border-orange-500/20 rounded-lg p-8 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Submit Item <span className="text-orange-500">Donation</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-2">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-orange-500/20 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 appearance-none cursor-pointer pr-10"
                    >
                      <option value="" className="bg-black">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat} className="bg-black">
                          {cat}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-black border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 resize-none"
                    placeholder="Describe the items you are donating"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength="10"
                    className="w-full px-4 py-3 bg-black border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-300"
                    placeholder="Enter your 10-digit phone number"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50"
                >
                  Submit Item Donation
                </button>
              </form>
            </div>

            {/* Money Donation Section */}
            <div className={`bg-black border border-orange-500/20 rounded-lg p-8 transition-opacity duration-500 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Donate <span className="text-orange-500">Money</span>
              </h2>
              
              <p className="text-gray-400 mb-8 text-center">
                You can donate money directly by scanning the QR code below or using the UPI ID provided.
              </p>

              <div className="flex flex-col items-center space-y-6">
                {/* QR Code */}
                <div className="bg-white p-4 rounded-lg border-2 border-orange-500/30">
                  <img
                    src={qrImage}
                    alt="UPI QR Code"
                    className="w-64 h-64 object-contain"
                  />
                </div>

                {/* UPI ID */}
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">UPI ID:</p>
                  <p className="text-lg font-semibold text-orange-500 break-all">
                    thadakasaipraneeth10@okhdfcbank
                  </p>
                </div>

                {/* Copy UPI ID Button */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('thadakasaipraneeth10@okhdfcbank');
                    alert('UPI ID copied to clipboard!');
                  }}
                  className="px-6 py-2.5 border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Copy UPI ID
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonatePage;

