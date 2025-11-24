import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
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

  const helpAreas = [
    {
      title: 'Food Donations',
      description: 'Providing nutritious meals and food supplies to families and individuals in need through your generous donations.',
      icon: '🍽️',
    },
    {
      title: 'Clothing Support',
      description: 'Distributing clothing and essential garments to help people stay warm and maintain their dignity.',
      icon: '👕',
    },
    {
      title: 'Medical Aid',
      description: 'Supporting medical expenses and providing healthcare assistance to those who cannot afford it.',
      icon: '🏥',
    },
    {
      title: 'Essential Resources',
      description: 'Delivering basic necessities and resources that help families meet their daily needs.',
      icon: '📦',
    },
    {
      title: 'Community Outreach',
      description: 'Reaching out to underprivileged communities and identifying those who need our help the most.',
      icon: '🤝',
    },
    {
      title: 'Emergency Support',
      description: 'Providing immediate assistance during emergencies and crisis situations.',
      icon: '🚨',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            How We <span className="text-orange-500">Help</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Through your generous donations, we provide essential support to underprivileged communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpAreas.map((area, index) => (
            <div
              key={index}
              className={`group p-8 border border-orange-500/20 rounded-lg hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-500 transition-colors">{area.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
