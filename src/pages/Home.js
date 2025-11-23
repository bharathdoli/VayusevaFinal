import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: "Food Donation",
      description: "Providing nutritious meals to hunger-stricken communities and individuals in need.",
      icon: "🍲",
      link: "/services"
    },
    {
      title: "Clothing Distribution",
      description: "Collecting and distributing clean clothes to protect the dignity of the underprivileged.",
      icon: "👕",
      link: "/services"
    },
    {
      title: "Emergency Relief",
      description: "Rapid response to natural disasters and emergencies with essential supplies.",
      icon: "🚑",
      link: "/services"
    }
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      role: "Beneficiary",
      quote: "Vayuseva helped my family during the floods. We are forever grateful for their timely support with food and shelter."
    },
    {
      name: "Priya Singh",
      role: "Volunteer",
      quote: "Volunteering with Vayuseva has been a life-changing experience. Seeing the smiles on people's faces is the best reward."
    },
    {
      name: "Dr. Anita Roy",
      role: "Donor",
      quote: "I trust Vayuseva completely. Their transparency and dedication to the cause make me confident that my donations reach the right people."
    }
  ];

  return (
    <div className="bg-background">
      <Hero />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Impact Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We focus on the most fundamental needs of humanity. Here is how we are making a difference every day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="text-secondary font-semibold hover:text-blue-700 text-lg">
            View All Services &rarr;
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Your small contribution can change someone's life. Join our community of changemakers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-accent hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              to="/volunteer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Stories of Hope</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the people whose lives have been touched by your generosity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
