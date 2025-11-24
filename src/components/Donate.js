import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
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
    <section ref={sectionRef} id="donate" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            We can't help everyone, but{' '}
            <span className="text-orange-500">everyone can help someone</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Take your next step
          </p>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Link 
              to="/donate"
              className="inline-flex items-center justify-center px-12 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50"
            >
              Donate Now
              <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;

