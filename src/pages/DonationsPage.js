import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchInstagramPosts } from '../utils/instagram';

const DonationsPage = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDonations = async () => {
      try {
        const posts = await fetchInstagramPosts();
        setDonations(posts);
      } catch (error) {
        console.error('Error fetching donations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDonations();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              Our <span className="text-orange-500">Donations</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A complete record of all the donations and help we've provided to communities in need
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-400">Loading donations...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {donations.map((donation) => (
                <a
                  key={donation.id}
                  href={donation.instagramUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg border border-orange-500/20 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 block cursor-pointer"
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
                      <p className="text-white text-sm mb-2">
                        {donation.caption}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {new Date(donation.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
                    <p className="text-gray-400 text-xs mt-2">
                      {new Date(donation.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Instagram Button */}
          <div className="text-center mt-16">
            <a
              href="https://www.instagram.com/_vayuseva_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              See All on Instagram
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonationsPage;

