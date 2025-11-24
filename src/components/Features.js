import React, { useEffect, useRef, useState } from 'react';

const Features = () => {
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

  const reasons = [
    {
      title: 'Direct Impact',
      description: 'Your donations go directly to those in need. We ensure every contribution makes a real difference in people\'s lives.',
    },
    {
      title: 'Transparent Donations',
      description: 'We maintain complete transparency in how donations are used, ensuring accountability and trust.',
    },
    {
      title: 'Reaching Thousands',
      description: 'Since 2024, we have reached thousands of families across the region, making a tangible impact.',
    },
    {
      title: 'Every Donation Counts',
      description: 'No donation is too small. Every contribution helps us provide food, clothing, medical aid, and essential resources.',
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Why Support <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Your donations help us make a meaningful difference in the lives of those who need it most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group p-8 border border-orange-500/20 rounded-lg hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                    <span className="text-orange-500 font-bold text-2xl group-hover:text-white transition-colors">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-500 transition-colors">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
