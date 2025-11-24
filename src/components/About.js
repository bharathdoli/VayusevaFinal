import React, { useEffect, useRef, useState } from 'react';
import teamImage from '../assets/team.jpg';

const About = () => {
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

  return (
    <section ref={sectionRef} id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Our Organization Section */}
        <div className="mb-20">
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Our <span className="text-orange-500">Organization</span>
            </h2>
          </div>
          
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg text-gray-400 leading-relaxed">
              Vayuseva is a non-profit organization focused on uplifting the underprivileged communities by providing food, clothing, medical aid, and other resources. Our mission is to ensure that every person has access to the basic necessities of life, regardless of their circumstances.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Founded by <span className="text-orange-500 font-semibold">Thadaka SaiPraneeth</span>, we have been dedicated to improving the lives of the needy since <span className="text-orange-500 font-semibold">2024</span>, reaching thousands of families across the region.
            </p>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                Meet Our <span className="text-orange-500">Team</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our team is made up of passionate individuals who work tirelessly to ensure that we make a meaningful impact in our community. From volunteers to staff, everyone at Vayuseva is committed to serving those in need.
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-lg overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                <img 
                  src={teamImage} 
                  alt="Vayuseva Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
