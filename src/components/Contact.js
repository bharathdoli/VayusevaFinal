import React, { useState, useEffect, useRef } from 'react';
import { saveContact } from '../utils/storage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Trim whitespace and check for admin credentials
    const name = formData.name.trim().toLowerCase();
    const email = formData.email.trim();
    const message = formData.message.trim().toLowerCase();
    
    // Check for admin credentials
    if (name === 'vayuseva' && email === 'vayuseva@gmail.com' && message === 'open') {
      // Redirect to admin page
      setFormData({ name: '', email: '', message: '' });
      window.location.href = '/admin';
      return;
    }

    // Save contact submission
    try {
      const result = await saveContact(formData);
      if (result.success) {
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(`Error: ${result.error || 'There was an error sending your message. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('There was an error sending your message. Please check your connection and try again.');
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-500/5 border border-transparent hover:border-orange-500/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                    <span className="text-orange-500 group-hover:text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Address</h4>
                    <p className="text-gray-400">DD colony, Amberpet, Hyderabad</p>
                  </div>
                </div>

                <a 
                  href="https://www.instagram.com/_vayuseva_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-500/5 border border-transparent hover:border-orange-500/20 transition-all duration-300 block"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Instagram</h4>
                    <p className="text-gray-400 group-hover:text-orange-500 transition-colors">@_vayuseva_</p>
                  </div>
                </a>

                <a 
                  href="tel:+916304223380"
                  className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-500/5 border border-transparent hover:border-orange-500/20 transition-all duration-300 block"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                    <span className="text-orange-500 group-hover:text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Phone</h4>
                    <p className="text-gray-400 group-hover:text-orange-500 transition-colors">+91 6304223380</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-300"
                  placeholder="Your Name"
                />
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
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black border border-orange-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
