import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchInstagramPosts } from '../utils/instagram';

const OurWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Fetch Instagram posts
  useEffect(() => {
    const loadDonations = async () => {
      try {
        const posts = await fetchInstagramPosts();
        setDonations(posts);
      } catch (error) {
        console.error('Error loading donations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDonations();
  }, []);

  // Display only first 3-4 donations on landing page
  const displayedDonations = donations.slice(0, 4);

  return (
    <section ref={sectionRef} id="our-work" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight text-center">
            Our <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center">
            See how your donations are making a real difference in people's lives
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading our work...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {displayedDonations.map((donation, index) => (
            <a
              key={donation.id}
              href={donation.instagramUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-lg border border-orange-500/20 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 block cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={donation.image}
                  alt={donation.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-orange-500 text-xs font-semibold uppercase mb-2 block">
                    {donation.type}
                  </span>
                  <p className="text-white text-sm mb-2 line-clamp-2">
                    {donation.caption}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {new Date(donation.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
              <div className="p-4 bg-black/80">
                <span className="text-orange-500 text-xs font-semibold uppercase mb-2 block">
                  {donation.type}
                </span>
                <p className="text-white text-sm line-clamp-2">
                  {donation.caption}
                </p>
              </div>
            </a>
              ))}
            </div>

            <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <Link
            to="/donations"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            See More
            <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default OurWork;

