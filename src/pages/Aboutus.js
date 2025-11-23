import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vayuseva</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a non-profit organization driven by a single purpose: to serve humanity with compassion and integrity.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-200 rounded-xl h-64 md:h-96 w-full flex items-center justify-center text-gray-500">
              {/* Placeholder for Story Image */}
              <span>[Our Story Image Placeholder]</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Vayuseva was born out of a simple yet powerful idea: that everyone deserves access to basic necessities.
              What started as a small group of volunteers distributing food on weekends has grown into a dedicated
              organization serving thousands of people across the region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of community. By connecting those who have with those who need,
              we are building a bridge of hope and support that strengthens the very fabric of our society.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To alleviate hunger and poverty by providing essential resources and support to underserved communities.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-600">
                A world where no one goes to bed hungry and every individual has the opportunity to thrive with dignity.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Values</h3>
              <p className="text-gray-600">
                Compassion, Integrity, Transparency, and Community-First approach in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-gray-600">The dedicated individuals working behind the scenes.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">
                <span>Photo</span>
              </div>
              <h4 className="font-bold text-primary">Team Member {item}</h4>
              <p className="text-sm text-gray-500">Volunteer / Role</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
